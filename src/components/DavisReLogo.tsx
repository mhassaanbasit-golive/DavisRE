import React from 'react';

interface DavisReLogoProps {
  variant?: 'full' | 'compact' | 'icon-only';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  iconHeight?: number;
}

export const DavisReLogo: React.FC<DavisReLogoProps> = ({
  variant = 'compact',
  size = 'sm',
  className = '',
  iconHeight,
}) => {
  // Determine effective height based on size prop if iconHeight not explicitly provided
  const effectiveIconHeight = iconHeight ?? (size === 'sm' ? 26 : size === 'md' ? 34 : 44);

  const textClasses =
    size === 'sm'
      ? 'text-base sm:text-lg'
      : size === 'md'
      ? 'text-lg sm:text-xl'
      : 'text-xl sm:text-2xl';

  const subtextClasses =
    size === 'sm'
      ? 'text-[8px] sm:text-[9px] mt-0.5'
      : 'text-[9px] sm:text-[10px] mt-1';

  if (variant === 'icon-only') {
    return (
      <svg
        viewBox="0 0 230 120"
        height={effectiveIconHeight}
        className={`w-auto ${className}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="building-blocks">
          <rect x="0" y="28" width="35" height="74" fill="#6CB877" opacity="0.75" />
          <rect x="26" y="4" width="34" height="82" fill="#7FA4DC" opacity="0.75" />
          <rect x="52" y="42" width="33" height="74" fill="#50B263" opacity="0.75" />
          <rect x="78" y="16" width="35" height="82" fill="#52B768" opacity="0.75" />
          <rect x="105" y="0" width="34" height="92" fill="#4AA45C" opacity="0.75" />
          <rect x="126" y="22" width="24" height="70" fill="#93CE9A" opacity="0.6" />
          <rect x="137" y="30" width="35" height="82" fill="#6A9EE0" opacity="0.75" />
          <rect x="163" y="4" width="35" height="82" fill="#50B263" opacity="0.7" />
          <rect x="192" y="28" width="24" height="68" fill="#9CBEE8" opacity="0.65" />
          <rect x="194" y="28" width="35" height="78" fill="#3B8ECB" opacity="0.8" />
        </g>
      </svg>
    );
  }

  if (variant === 'full') {
    return (
      <div className={`flex flex-col items-center ${className}`}>
        <svg
          viewBox="0 0 230 120"
          height={effectiveIconHeight}
          className="w-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="building-blocks">
            <rect x="0" y="28" width="35" height="74" fill="#6CB877" opacity="0.75" />
            <rect x="26" y="4" width="34" height="82" fill="#7FA4DC" opacity="0.75" />
            <rect x="52" y="42" width="33" height="74" fill="#50B263" opacity="0.75" />
            <rect x="78" y="16" width="35" height="82" fill="#52B768" opacity="0.75" />
            <rect x="105" y="0" width="34" height="92" fill="#4AA45C" opacity="0.75" />
            <rect x="126" y="22" width="24" height="70" fill="#93CE9A" opacity="0.6" />
            <rect x="137" y="30" width="35" height="82" fill="#6A9EE0" opacity="0.75" />
            <rect x="163" y="4" width="35" height="82" fill="#50B263" opacity="0.7" />
            <rect x="192" y="28" width="24" height="68" fill="#9CBEE8" opacity="0.65" />
            <rect x="194" y="28" width="35" height="78" fill="#3B8ECB" opacity="0.8" />
          </g>
        </svg>
        <div className="mt-1.5 text-center">
          <span className={`font-sans font-light tracking-[0.25em] ${textClasses} text-[#4A4C50]`}>
            davis
          </span>
          <span className={`font-sans font-normal tracking-[0.2em] ${textClasses} text-[#52B768]`}>
            RE
          </span>
        </div>
      </div>
    );
  }

  // 'compact' variant (Ideal for Headers & Navigation Bars)
  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 ${className}`}>
      {/* Abstract Building Blocks Mark */}
      <svg
        viewBox="0 0 230 120"
        height={effectiveIconHeight}
        className="w-auto shrink-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="building-blocks">
          <rect x="0" y="28" width="35" height="74" fill="#6CB877" opacity="0.75" />
          <rect x="26" y="4" width="34" height="82" fill="#7FA4DC" opacity="0.75" />
          <rect x="52" y="42" width="33" height="74" fill="#50B263" opacity="0.75" />
          <rect x="78" y="16" width="35" height="82" fill="#52B768" opacity="0.75" />
          <rect x="105" y="0" width="34" height="92" fill="#4AA45C" opacity="0.75" />
          <rect x="126" y="22" width="24" height="70" fill="#93CE9A" opacity="0.6" />
          <rect x="137" y="30" width="35" height="82" fill="#6A9EE0" opacity="0.75" />
          <rect x="163" y="4" width="35" height="82" fill="#50B263" opacity="0.7" />
          <rect x="192" y="28" width="24" height="68" fill="#9CBEE8" opacity="0.65" />
          <rect x="194" y="28" width="35" height="78" fill="#3B8ECB" opacity="0.8" />
        </g>
      </svg>

      {/* Elegant Wordmark Matching User's Image */}
      <div>
        <div className="flex items-baseline leading-none">
          <span className={`font-sans font-light tracking-[0.2em] ${textClasses} text-[#4A4C50]`}>
            davis
          </span>
          <span className={`font-sans font-normal tracking-[0.18em] ${textClasses} text-[#52B768] ml-0.5 sm:ml-1`}>
            RE
          </span>
        </div>
        <span className={`uppercase font-sans tracking-[0.16em] text-gray-500 font-medium block ${subtextClasses}`}>
          Dallas, Texas • Real Estate Investment
        </span>
      </div>
    </div>
  );
};
