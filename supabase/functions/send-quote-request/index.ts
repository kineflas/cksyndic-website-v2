import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const RESEND_API_KEY = "re_JbzP8TqU_MPCdcHT26tPwExt6vqjZbpCx";
const EMAIL_TO = "khalidborntocode@gmail.com";

interface QuoteRequest {
  residenceName: string;
  address: string;
  phone: string;
  hasAssembly: boolean;
  assemblyDate?: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const { residenceName, address, phone, hasAssembly, assemblyDate }: QuoteRequest = await req.json();

    if (!residenceName || !address || !phone) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const assemblyInfo = hasAssembly && assemblyDate
      ? `<p><strong>Assemblée générale prévue :</strong> Oui</p><p><strong>Date de l'assemblée :</strong> ${new Date(assemblyDate).toLocaleDateString("fr-FR", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</p>`
      : `<p><strong>Assemblée générale prévue :</strong> Non</p>`;

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #f9fafb;
            }
            .header {
              background-color: #2563eb;
              color: white;
              padding: 30px 20px;
              text-align: center;
              border-radius: 8px 8px 0 0;
            }
            .content {
              background-color: white;
              padding: 30px;
              border-radius: 0 0 8px 8px;
              box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            }
            .info-row {
              margin-bottom: 15px;
              padding-bottom: 15px;
              border-bottom: 1px solid #e5e7eb;
            }
            .info-row:last-child {
              border-bottom: none;
            }
            strong {
              color: #1e40af;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Nouvelle Demande de Devis</h1>
            </div>
            <div class="content">
              <p>Vous avez reçu une nouvelle demande de devis gratuit :</p>
              
              <div class="info-row">
                <p><strong>Nom de la résidence :</strong></p>
                <p>${residenceName}</p>
              </div>
              
              <div class="info-row">
                <p><strong>Adresse :</strong></p>
                <p>${address}</p>
              </div>
              
              <div class="info-row">
                <p><strong>Téléphone :</strong></p>
                <p>${phone}</p>
              </div>
              
              <div class="info-row">
                ${assemblyInfo}
              </div>
              
              <p style="margin-top: 30px; color: #6b7280; font-size: 14px;">
                Cette demande a été envoyée depuis le formulaire de contact du site CK Syndic.
              </p>
            </div>
          </div>
        </body>
      </html>
    `;

    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set");
      return new Response(
        JSON.stringify({ error: "Email service not configured" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "CK Syndic <onboarding@resend.dev>",
        to: [EMAIL_TO],
        subject: `Nouvelle demande de devis - ${residenceName}`,
        html: emailHtml,
      }),
    });

    if (!resendResponse.ok) {
      const errorText = await resendResponse.text();
      console.error("Resend API error:", errorText);
      return new Response(
        JSON.stringify({ error: "Failed to send email" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const data = await resendResponse.json();

    return new Response(
      JSON.stringify({ success: true, data }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
