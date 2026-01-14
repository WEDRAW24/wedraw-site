'use client';

import React, { useState, useEffect } from 'react';
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
  debug?: boolean;
}

const CTA: React.FC<CTAProps> = ({
  magnetType = 'dots',
  magnetColor = 'var(--color-blueprint)',
  title = "Let's get started",
  buttonText = 'CONTACT US',
  buttonHref = '#',
  className = '',
  onButtonClick,
  debug = false,
}) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [viewportSize, setViewportSize] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');
  const [gridDimensions, setGridDimensions] = useState({ rows: 12, columns: 20 });
  const [gapDimensions, setGapDimensions] = useState({ width: 10, height: 4 });
  const [containerAspectRatio, setContainerAspectRatio] = useState<string>('1440/800');
  const contentRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateViewport = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setViewportSize('mobile');
      } else if (width < 1024) {
        setViewportSize('tablet');
      } else {
        setViewportSize('desktop');
      }
    };

    updateViewport();
    window.addEventListener('resize', updateViewport);
    return () => window.removeEventListener('resize', updateViewport);
  }, []);

  // Calculate optimal rows and columns based on container dimensions
  useEffect(() => {
    const calculateGridDimensions = () => {
      const container = contentRef.current;
      if (!container) {
        console.log('CTA: Container ref not ready');
        return;
      }

      const width = container.clientWidth;
      const height = container.clientHeight;
      
      console.log(`CTA: Container dimensions: ${width}px × ${height}px`);
      
      if (width === 0 || height === 0) {
        console.log('CTA: Container has no dimensions yet');
        return;
      }

      // Calculate and store the red container's actual aspect ratio
      const aspectRatio = `${width}/${height}`;
      setContainerAspectRatio(aspectRatio);
      console.log(`CTA: Container aspect ratio: ${aspectRatio} (${(width/height).toFixed(2)}:1)`);

      // Target cell size tuned to give ~8 columns on typical mobile (360px)
      const targetCellSize = viewportSize === 'mobile' ? 40 : viewportSize === 'tablet' ? 65 : 80;
      
      // Calculate initial grid dimensions dynamically
      const calculatedColumns = Math.round(width / targetCellSize);
      const calculatedRows = Math.round(height / targetCellSize);
      
      console.log(`CTA: Target cell size: ${targetCellSize}px`);
      console.log(`CTA: Initial grid: ${calculatedColumns} columns × ${calculatedRows} rows`);
      
      // Gap percentage - mobile needs larger WIDTH gap, but smaller HEIGHT gap for more rows
      const greenWidthPercent = viewportSize === 'mobile' ? 0.55 : 0.40;
      const greenHeightPercent = viewportSize === 'mobile' ? 0.30 : 0.40;
      
      let gapWidth = Math.round(calculatedColumns * greenWidthPercent);
      let gapHeight = Math.round(calculatedRows * greenHeightPercent);
      
      console.log(`CTA: Initial gap: ${gapWidth} columns (${greenWidthPercent * 100}% width) × ${gapHeight} rows (${greenHeightPercent * 100}% height)`);
      
      // CRITICAL: Ensure (total - gap) is EVEN for symmetrical distribution
      // Adjust COLUMNS if needed
      let adjustedColumns = calculatedColumns;
      let colsMinusGap = adjustedColumns - gapWidth;
      if (colsMinusGap % 2 !== 0) {
        // Add 1 column to make (columns - gap) even
        adjustedColumns = calculatedColumns + 1;
        colsMinusGap = adjustedColumns - gapWidth;
      }
      
      // Adjust ROWS if needed
      let adjustedRows = calculatedRows;
      let rowsMinusGap = adjustedRows - gapHeight;
      if (rowsMinusGap % 2 !== 0) {
        // Add 1 row to make (rows - gap) even
        adjustedRows = calculatedRows + 1;
        rowsMinusGap = adjustedRows - gapHeight;
      }
      
      console.log(`CTA: Final grid - Rows: ${adjustedRows}, Columns: ${adjustedColumns}`);
      console.log(`CTA: Final gap - Rows: ${gapHeight}, Columns: ${gapWidth}`);
      console.log(`CTA: Distribution - Left/Right: ${colsMinusGap/2} each, Above/Below: ${rowsMinusGap/2} each`);
      
      // Store BOTH grid dimensions AND gap dimensions to keep them in sync
      setGridDimensions({ rows: adjustedRows, columns: adjustedColumns });
      setGapDimensions({ width: gapWidth, height: gapHeight });
    };

    // Initial calculation with delay to ensure ref is attached
    const initialTimer = setTimeout(calculateGridDimensions, 100);
    
    // Recalculate on resize
    window.addEventListener('resize', calculateGridDimensions);
    
    // Also try immediately in case ref is already ready
    calculateGridDimensions();
    
    return () => {
      window.removeEventListener('resize', calculateGridDimensions);
      clearTimeout(initialTimer);
    };
  }, [viewportSize]);

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

  // Use the gap dimensions calculated and stored in state to ensure perfect sync
  const gapSize = {
    width: gapDimensions.width,
    height: gapDimensions.height,
  };

  const renderMagnetComponent = () => {
    // Get responsive maxDistance for better reactivity
    const getMaxDistance = () => {
      switch (viewportSize) {
        case 'mobile':
          return 150;
        case 'tablet':
          return 250; // Increased for better tablet reactivity
        case 'desktop':
        default:
          return 300;
      }
    };

    switch (magnetType) {
      case 'dots':
        return (
          <MagnetDots
            rows={gridDimensions.rows}
            columns={gridDimensions.columns}
            containerSize="100%"
            dotColor={magnetColor}
            minDotSize={viewportSize === 'mobile' ? '1.6vmin' : '0.4vmin'}
            maxDotSize={viewportSize === 'mobile' ? '3vmin' : '2.5vmin'}
            maxDistance={getMaxDistance()}
            centerGap={gapSize}
            isAnimating={isAnimating}
          />
        );
      case 'lines':
        return (
          <MagnetLines
            rows={gridDimensions.rows}
            columns={gridDimensions.columns}
            containerSize="100%"
            lineColor={magnetColor}
            lineWidth={viewportSize === 'mobile' ? '2.5px' : '5px'}
            lineHeight={viewportSize === 'mobile' ? '20px' : viewportSize === 'tablet' ? '32px' : '40px'}
            baseAngle={-10}
            centerGap={gapSize}
            isAnimating={isAnimating}
          />
        );
      case 'cross':
        return (
          <MagnetCross
            rows={gridDimensions.rows}
            columns={gridDimensions.columns}
            containerSize="100%"
            lineColor={magnetColor}
            lineWidth={viewportSize === 'mobile' ? '0.6vmin' : '0.4vmin'}
            lineHeight={viewportSize === 'mobile' ? '3.5vmin' : '2.5vmin'}
            baseAngle={-10}
            centerGap={gapSize}
            isAnimating={isAnimating}
          />
        );
      case 'grid':
        return (
          <MagnetGrid
            rows={gridDimensions.rows}
            columns={gridDimensions.columns}
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
    // OUTER CONTAINER: Viewport-sized (minus nav bar)
    <div 
      className={`relative w-full ${className} ${debug ? 'border-8 border-purple-500' : ''}`}
      style={{
        // Viewport height minus nav bar
        height: viewportSize === 'mobile' || viewportSize === 'tablet'
          ? 'calc(100vh - 56px)' // Top nav on mobile/tablet
          : '100vh', // Side nav on desktop (nav is beside, not above)
        minHeight: viewportSize === 'mobile' 
          ? 'clamp(500px, calc(100vh - 56px), 700px)' 
          : 'clamp(400px, 100vh, 800px)'
      }}
    >
      {/* CTA CONTENT: Fluid inset from purple on all sides */}
      <div 
        ref={contentRef}
        className={`absolute ${debug ? 'border-8 border-red-500' : ''}`}
        style={{ 
          // Fluid padding: 20px at mobile → 60px at 1440px+
          top: 'clamp(20px, 4.17vw, 60px)',
          right: 'clamp(20px, 4.17vw, 60px)',
          bottom: 'clamp(20px, 4.17vw, 60px)',
          left: 'clamp(20px, 4.17vw, 60px)',
          // No aspect ratio - grid calculation will determine optimal rows/columns
        }}
      >
      {/* Background Magnet Component */}
      <div className="absolute inset-0" style={{ pointerEvents: magnetType === 'grid' ? 'auto' : 'none' }}>
        {renderMagnetComponent()}
      </div>

        {/* Content Container - Centered with fluid sizing */}
      <div className="absolute inset-0 flex items-center justify-center z-[5] pointer-events-none">
          <div 
            className={`flex flex-col items-center justify-center ${debug ? 'border-4 border-green-500' : ''}`}
            style={{ 
              // Fluid gap between title and button
              gap: 'clamp(16px, 2vw, 32px)',
              // Padding around content
              padding: 'clamp(20px, 2.5vw, 36px)',
              // 40% across all viewports for maximum visible lines
              width: 'max(180px, 40%)',
              height: 'max(180px, 40%)',
              // Centered by parent flex layout
            }}
          >
            <h2 
              className="font-area-extrabold text-center"
              style={{ 
                // Viewport-specific font sizing
                fontSize: viewportSize === 'mobile' 
                  ? 'clamp(28px, 8vw, 48px)'
                  : viewportSize === 'tablet'
                  ? 'clamp(44px, 5.5vw, 58px)' // Tablet size
                  : 'clamp(48px, 3.5vw, 72px)', // Desktop
                lineHeight: '1.2',
                // Constrain width to encourage two-line layout more readily
                maxWidth: 'min(85%, 16em)', // 16em = ~16 characters at current font size
                textTransform: 'lowercase', // All lowercase
                // Allow wrapping to two lines if needed
                whiteSpace: 'normal',
                wordWrap: 'break-word',
              }}
            >
              {title}
            </h2>
          <div className="text-center relative">
            <Button 
              variant={getButtonVariant()}
              className="inline-block relative z-[5] pointer-events-auto"
              onClick={handleClick}
                size="md"
            >
              {buttonText}
            </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
