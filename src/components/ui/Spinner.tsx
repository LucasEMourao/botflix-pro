import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const SpinnerWrapper = styled.div<{ size?: 'small' | 'medium' | 'large' }>`
  display: inline-block;
  width: ${({ size }) => {
    switch(size) {
      case 'small': return '20px';
      case 'large': return '40px';
      default: return '30px';
    }
  }};
  height: ${({ size }) => {
    switch(size) {
      case 'small': return '20px';
      case 'large': return '40px';
      default: return '30px';
    }
  }};

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    border: 3px solid rgba(255, 255, 255, 0.3);
    border-top-color: #fff;
    border-radius: 50%;
    animation: ${spin} 1s linear infinite;
  }
`;

interface SpinnerProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ size = 'medium', className }) => {
  return <SpinnerWrapper size={size} className={className} />;
};

export default Spinner;