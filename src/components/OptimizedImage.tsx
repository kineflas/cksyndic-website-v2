import { ImgHTMLAttributes, useState, useEffect } from 'react';

interface OptimizedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  eager?: boolean;
}

export function OptimizedImage({ src, alt, eager = false, className, style, ...props }: OptimizedImageProps) {
  const [imageSrc, setImageSrc] = useState(src);

  useEffect(() => {
    const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    const img = new Image();
    img.onload = () => setImageSrc(webpSrc);
    img.onerror = () => setImageSrc(src);
    img.src = webpSrc;
  }, [src]);

  return (
    <picture>
      <source srcSet={imageSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp')} type="image/webp" />
      <img
        src={imageSrc}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        className={className}
        style={style}
        {...props}
      />
    </picture>
  );
}
