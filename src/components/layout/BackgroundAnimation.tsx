import styled from 'styled-components';

interface BackgroundLayerProps {
  $layer: number;
}

const BackgroundLayer = styled.div<BackgroundLayerProps>`
  position: fixed;
  top: 0;
  left: -50%;
  right: -50%;
  bottom: 0;
  background-image: linear-gradient(-60deg, #510101 50%, #181717 50%);
  z-index: -1;
  opacity: 0.7;
  animation: slide 4s ease-in-out infinite alternate;

  ${({ $layer }) => {
    switch($layer) {
      case 2:
        return `
          animation-direction: alternate-reverse;
          animation-duration: 5s;
        `;
      case 3:
        return `
          animation-duration: 6s;
        `;
      default:
        return '';
    }
  }}

  @keyframes slide {
    0% {
      transform: translateX(-20%);
    }
    100% {
      transform: translateX(20%);
    }
  }
`;

interface BackgroundAnimationProps {
  children?: React.ReactNode;
}

const BackgroundAnimation: React.FC<BackgroundAnimationProps> = ({ children }) => {
  return (
    <>
      <BackgroundLayer $layer={1} />
      <BackgroundLayer $layer={2} />
      <BackgroundLayer $layer={3} />
      {children}
    </>
  );
};

export default BackgroundAnimation;