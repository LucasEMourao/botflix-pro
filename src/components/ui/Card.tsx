import styled from 'styled-components';
import { ICardProps } from '../../types';

interface StyledCardProps {
  $elevation?: number;
  $clickable?: boolean;
}

const StyledCard = styled.div<StyledCardProps>`
  background: rgba(30, 30, 40, 0.95);
  border: 1.5px solid #222;
  border-radius: 19px;
  box-shadow: ${({ $elevation }) =>
    $elevation
      ? `0 ${$elevation}px ${$elevation * 3}px 0 rgba(0, 0, 0, 0.18)`
      : '0 4px 24px 0 rgba(0, 0, 0, 0.18)'};
  overflow: hidden;
  transition: all 0.2s ease;

  ${({ $clickable }) =>
    $clickable &&
    `
    cursor: pointer;
    
    &:hover {
      border-color: #e50914;
      transform: translateY(-8px) scale(1.03);
      box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.28);
    }
  `}
`;

const Card: React.FC<ICardProps> = ({
  children,
  className,
  elevation = 2,
  onClick,
}) => {
  return (
    <StyledCard
      className={className}
      $elevation={elevation}
      $clickable={!!onClick}
      onClick={onClick}
    >
      {children}
    </StyledCard>
  );
};

export default Card;