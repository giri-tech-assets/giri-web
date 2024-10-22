import { useGetPageImage } from '@/hooks/pages-queries/useGetPageImage';
import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  width: 100%;
  overflow: hidden;
  margin-top: 4rem;
  position: relative;
  touch-action: pan-y pinch-zoom;

  @media (max-width: 768px) {
    margin-top: 2.5rem;
  }
`;

interface ScrollingContentProps {
  position: number;
}

const ScrollingContent = styled.div<ScrollingContentProps>`
  display: flex;
  transform: translateX(${(props) => props.position}px);
  transition: transform 0.5s ease-out;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`;

const ImageWrapper = styled.div`
  flex-shrink: 0;
  width: 300px;
  margin: 0 10px;
`;

const CarouselImage = styled.img`
  width: 100%;
  height: 380px;
  object-fit: cover;
  border-radius: 1rem;
  pointer-events: none;
`;

const Controls = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 2;
`;

const ControlButton = styled.button`
  background: rgba(255, 255, 255, 0.8);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(255, 255, 255, 1);
  }
`;

export const ImageGallery: React.FC = () => {
  const { about: aboutPageImages } = useGetPageImage();
  const [position, setPosition] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const scrollContentRef = useRef<HTMLDivElement>(null);

  const images = [
    aboutPageImages?.['african-potter']?.src,
    aboutPageImages?.['african-woman-smiling']?.src,
    aboutPageImages?.['cow-art']?.src,
    aboutPageImages?.['african-seller']?.src,
    aboutPageImages?.['man-holding-clay']?.src,
    aboutPageImages?.['painter']?.src,
    aboutPageImages?.['african-design']?.src,
  ];

  // Calculate limits
  const itemWidth = 320; // 300px width + 20px margin
  const containerWidth = scrollContentRef.current?.clientWidth || 0;
  const maxScroll = -(images.length * itemWidth - containerWidth);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.pageX - position);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - position);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const newPosition = e.pageX - startX;
    setPosition(clampPosition(newPosition));
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const newPosition = e.touches[0].pageX - startX;
    setPosition(clampPosition(newPosition));
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const clampPosition = (pos: number): number => {
    if (pos > 0) return 0;
    if (pos < maxScroll) return maxScroll;
    return pos;
  };

  const handlePrevious = () => {
    setPosition((prev) => {
      const newPosition = prev + itemWidth;
      return clampPosition(newPosition);
    });
  };

  const handleNext = () => {
    setPosition((prev) => {
      const newPosition = prev - itemWidth;
      return clampPosition(newPosition);
    });
  };

  // Double the images for infinite scroll effect
  const displayImages = [...images];

  return (
    <CarouselContainer>
      <ScrollingContent
        ref={scrollContentRef}
        position={position}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleDragEnd}
      >
        {displayImages.map((src, index) => (
          <ImageWrapper key={index}>
            <CarouselImage
              loading="lazy"
              src={src}
              alt={`African product showcase ${(index % images.length) + 1}`}
            />
          </ImageWrapper>
        ))}
      </ScrollingContent>
      <Controls>
        <ControlButton onClick={handlePrevious} disabled={position >= 0}>
          ←
        </ControlButton>
        <ControlButton onClick={handleNext} disabled={position <= maxScroll}>
          →
        </ControlButton>
      </Controls>
    </CarouselContainer>
  );
};
