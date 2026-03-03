export function getOptimizedImageUrl(src: string, format: 'webp' | 'original' = 'webp'): string {
  if (format === 'webp' && !src.endsWith('.svg')) {
    return src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  }
  return src;
}

export function supportsWebP(): boolean {
  if (typeof window === 'undefined') return false;

  const elem = document.createElement('canvas');
  if (elem.getContext && elem.getContext('2d')) {
    return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  }
  return false;
}
