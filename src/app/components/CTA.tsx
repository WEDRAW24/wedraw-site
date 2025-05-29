'use client';

import React, { useState } from 'react';
import { MagnetDots } from './Magnet-dots';
import { MagnetLines } from './Magnet-lines';
import { MagnetCross } from './Magnet-cross';
import { MagnetGrid } from './Magnet-grid';
import Button from './Button';

type MagnetType = 'dots' | 'lines' | 'cross' | 'grid';

interface CTAProps {
  magnetType?: MagnetType;
  magnetColor?: string;
  title?: string;
  buttonText?: string;
  buttonHref?: string;
  className?: string;
  onButtonClick?: () => void;
}

const CTA: React.FC<CTAProps> = ({
  magnetType = 'dots',
  magnetColor = 'var(--color-blueprint)',
  title = "Let's get started",
  buttonText = 'CONTACT US',
  buttonHref = '#',
  className = '',
  onButtonClick,
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    
    // Wait for animation to complete before navigating
    setTimeout(() => {
      if (buttonHref) {
        window.location.href = buttonHref;
      }
      if (onButtonClick) {
        onButtonClick();
      }
    }, 2000);
  };

  const getButtonVariant = () => {
    switch (magnetColor) {
      case 'var(--color-marker)':
        return 'marker';
      case 'var(--color-meadow)':
        return 'meadow';
      case 'var(--color-sunny)':
        return 'sunny';
      default:
        return 'blueprint';
    }
  };

  // Calculate gap size based on content
  const gapSize = {
    width: 10,
    height: 4,
  };

  const renderMagnetComponent = () => {
    switch (magnetType) {
      case 'dots':
        return (
          <MagnetDots
            rows={12}
            columns={20}
            containerSize="100%"
            dotColor={magnetColor}
            minDotSize="0.4vmin"
            maxDotSize="2.5vmin"
            maxDistance={300}
            centerGap={gapSize}
            isAnimating={isAnimating}
          />
        );
      case 'lines':
        return (
          <MagnetLines
            rows={12}
            columns={20}
            containerSize="100%"
            lineColor={magnetColor}
            lineWidth="5px"
            lineHeight="40px"
            baseAngle={-10}
            centerGap={gapSize}
            isAnimating={isAnimating}
          />
        );
      case 'cross':
        return (
          <MagnetCross
            rows={12}
            columns={20}
            containerSize="100%"
            lineColor={magnetColor}
            lineWidth="0.4vmin"
            lineHeight="2.5vmin"
            baseAngle={-10}
            centerGap={gapSize}
            isAnimating={isAnimating}
          />
        );
      case 'grid':
        return (
          <MagnetGrid
            rows={12}
            columns={20}
            containerSize="100%"
            gridColor={magnetColor}
            centerGap={gapSize}
            isAnimating={isAnimating}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className={`relative w-full ${className}`} style={{ aspectRatio: '1440/800' }}>
      {/* Background Magnet Component */}
      <div className="absolute inset-0" style={{ pointerEvents: magnetType === 'grid' ? 'auto' : 'none' }}>
        {renderMagnetComponent()}
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center z-[5] pointer-events-none">
        <div className="space-y-8 -mt-2">
          <h2 className="text-[58px] font-bold leading-[1]">{title}</h2>
          <div className="text-center relative">
            <Button 
              variant={getButtonVariant()}
              className="inline-block relative z-[5] pointer-events-auto"
              onClick={handleClick}
            >
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
