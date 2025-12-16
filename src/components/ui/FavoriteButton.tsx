import React from 'react';
import styled from 'styled-components';

const FavoriteButtonStyled = styled.button<{ $isFavorite: boolean }>`
  position: absolute;
  top: 10px;
  right: 10px;
  background: ${({ $isFavorite }) => $isFavorite ? 'rgba(229, 9, 20, 0.8)' : 'rgba(0, 0, 0, 0.6)'};
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.1);
    background: ${({ $isFavorite }) => $isFavorite ? '#e50914' : 'rgba(229, 9, 20, 0.8)'};
  }

  &::before {
    content: ${({ $isFavorite }) => $isFavorite ? "'♥'" : "'♡'"};
    font-size: 1.2rem;
  }
`;

interface FavoriteButtonProps {
  isFavorite: boolean;
  onClick: () => void;
  className?: string;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ isFavorite, onClick, className }) => {
  return (
    <FavoriteButtonStyled 
      $isFavorite={isFavorite} 
      onClick={onClick}
      className={className}
      aria-label={isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
    />
  );
};

export default FavoriteButton;