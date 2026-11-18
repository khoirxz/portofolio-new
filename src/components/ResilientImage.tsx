import { useState } from 'react';
import { ImageOff } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
}

export function ResilientImage({
  src,
  alt,
  className = 'w-full h-full object-cover',
  containerClassName = '',
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center gap-3 bg-[#EDEDEA] dark:bg-[#141414] border border-[#D4D4D0] dark:border-[#262626] pixel-dither-bg p-6 text-center ${containerClassName}`}
        role="img"
        aria-label={alt}
      >
        <ImageOff className="w-6 h-6 text-[#525252] dark:text-[#A1A1AA]" aria-hidden="true" />
        <p className="font-mono text-xs text-[#525252] dark:text-[#A1A1AA] max-w-xs">
          {alt}
        </p>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-[#E5E5E2] dark:bg-[#121212] ${containerClassName}`}>
      {!isLoaded && (
        <div
          aria-hidden="true"
          className="absolute inset-0 pixel-dither-bg animate-pulse bg-[#E5E5E2] dark:bg-[#141414]"
        />
      )}
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`${className} transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
}
