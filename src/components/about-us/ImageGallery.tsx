import React from 'react';
import styled, { keyframes } from 'styled-components';

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const CarouselContainer = styled.div`
  width: 100%;
  overflow: hidden;
  margin-top: 4rem;
  @media (max-width: 768px) {
    margin-top: 2.5rem;
  }
`;

const ScrollingContent = styled.div`
  display: flex;
  animation: ${scroll} 30s linear infinite;
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
`;

export const ImageGallery: React.FC = () => {
  const images = [
    "https://cdn.builder.io/api/v1/image/assets/TEMP/185370e25f7210f8273e85c64964b12a1dc9cf27c9ffc04f5374fc925c92807f?placeholderIfAbsent=true&apiKey=f547751f91f54b6a805677abc411ee2e",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/c452060805654b5454491b9185840aa032cbe87d8b933f993e5055430b7f0e06?placeholderIfAbsent=true&apiKey=f547751f91f54b6a805677abc411ee2e",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/601e3b4a820c551a7ca8e587f75ea5aecefa04b39a22e624b56b79fd19665fcf?placeholderIfAbsent=true&apiKey=f547751f91f54b6a805677abc411ee2e",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/df90d45d3bd66ff65a954fda305ba880ac1ec24880f324493b12482c27894ff5?placeholderIfAbsent=true&apiKey=f547751f91f54b6a805677abc411ee2e",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/3594a3a13ff6861ba4e9cbcf33c786fb4aa162644e859772bc2dd2d3ef85e5e7?placeholderIfAbsent=true&apiKey=f547751f91f54b6a805677abc411ee2e",
  ];

  return (
    <CarouselContainer>
      <ScrollingContent>
        {[...images, ...images].map((src, index) => (
          <ImageWrapper key={index}>
            <CarouselImage
              loading="lazy"
              src={src}
              alt={`African product showcase ${index % images.length + 1}`}
            />
          </ImageWrapper>
        ))}
      </ScrollingContent>
    </CarouselContainer>
  );
};
