import React from 'react';
import styled from 'styled-components';
import { IMovie } from '../../types';
import MovieCard from '../components/ui/MovieCard';
import SearchResultsHeader from '../components/ui/SearchResultsHeader';
import ErrorMessage from '../components/ui/ErrorMessage';
import { useFavorites } from '../hooks/useFavorites';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  min-height: calc(100vh - 200px);
`;

const MoviesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  width: 100%;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 0.75rem;
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem;
`;

const EmptyTitle = styled.h3`
  color: #fff;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const EmptyMessage = styled.p`
  color: #d0d0d0;
  font-size: 1rem;
  margin-bottom: 2rem;
`;

const Favorites: React.FC = () => {
  const { favorites, isFavorite } = useFavorites();

  if (favorites.length === 0) {
    return (
      <Container>
        <SearchResultsHeader
          title="Meus Favoritos"
          subtitle="Nenhum filme adicionado aos favoritos ainda"
        />
        <EmptyState>
          <EmptyTitle>Você ainda não tem filmes favoritos</EmptyTitle>
          <EmptyMessage>
            Adicione filmes à sua lista de favoritos para encontrá-los facilmente aqui
          </EmptyMessage>
          <p>Busque por filmes na página inicial e clique no ícone de coração para adicioná-los à sua lista de favoritos.</p>
        </EmptyState>
      </Container>
    );
  }

  return (
    <Container>
      <SearchResultsHeader
        title="Meus Favoritos"
        subtitle={`${favorites.length} filme${favorites.length !== 1 ? 's' : ''} favorito${favorites.length !== 1 ? 's' : ''}`}
      />
      <MoviesGrid>
        {favorites.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </MoviesGrid>
    </Container>
  );
};

export default Favorites;