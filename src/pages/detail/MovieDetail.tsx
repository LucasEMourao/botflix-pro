import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { IMovie } from '../../types';
import { movieService } from '../../services/movieService';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import Spinner from '../../components/ui/Spinner';
import ErrorMessage from '../../components/ui/ErrorMessage';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  min-height: calc(100vh - 200px);
`;

const BackButton = styled(Button)`
  margin-bottom: 1rem;
`;

const MovieDetailCard = styled(Card)`
  padding: 2rem;
  background: rgba(30, 30, 40, 0.95);
  border: 1.5px solid #222;
  border-radius: 19px;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.28);
`;

const MovieHeader = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const MoviePoster = styled.div`
  width: 300px;
  flex-shrink: 0;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 24px 0 rgba(0, 0, 0, 0.18);
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
    align-self: center;
  }
`;

const MovieInfo = styled.div`
  flex: 1;
`;

const MovieTitle = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 0.5rem;
`;

const MovieSubtitle = styled.h2`
  font-size: 1.2rem;
  color: #d0d0d0;
  margin-bottom: 1rem;
  font-weight: 400;
`;

const MovieDetails = styled.div`
  display: flex;
  gap: 1.5rem;
  margin: 1.5rem 0;
  flex-wrap: wrap;
`;

const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const DetailLabel = styled.span`
  font-size: 0.9rem;
  color: #808080;
`;

const DetailValue = styled.span`
  font-size: 1rem;
  color: #fff;
  font-weight: 500;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
  font-size: 1.2rem;
  color: #e50914;
`;

const MovieOverview = styled.div`
  margin: 1.5rem 0;
`;

const OverviewTitle = styled.h3`
  color: #fff;
  margin-bottom: 0.5rem;
`;

const OverviewText = styled.p`
  color: #d0d0d0;
  line-height: 1.6;
  font-size: 1.1rem;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const MovieDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<IMovie | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        // In a real implementation, we would fetch the specific movie
        // For now, we'll simulate by searching for a movie and finding the one with the id
        // Since we don't have an endpoint for individual movies, we'll use a placeholder
        const mockMovie: IMovie = {
          id: parseInt(id || '0'),
          title: 'Mock Movie Title',
          overview: 'This is a mock movie overview. In a real implementation, this would contain detailed information about the movie, including plot summary, cast, director, and other relevant information.',
          poster_path: '/src/images/botflix-robot.jpg',
          vote_average: 7.5,
          release_date: '2022-01-01',
          genre_ids: [18, 80],
          genre_names: ['Drama', 'Crime']
        };
        setMovie(mockMovie);
      } catch (err) {
        setError('Erro ao carregar detalhes do filme. Tente novamente.');
        console.error('Error fetching movie:', err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchMovie();
    }
  }, [id]);

  if (loading) {
    return (
      <Container>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
          <Spinner size="large" />
        </div>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <ErrorMessage message={error} />
      </Container>
    );
  }

  if (!movie) {
    return (
      <Container>
        <ErrorMessage message="Filme não encontrado." />
      </Container>
    );
  }

  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : null;

  return (
    <Container>
      <BackButton variant="secondary" onClick={() => window.history.back()}>
        ← Voltar
      </BackButton>

      <MovieDetailCard>
        <MovieHeader>
          <MoviePoster>
            {posterUrl ? (
              <img
                src={posterUrl}
                alt={movie.title}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = '/src/images/botflix-robot.jpg';
                }}
              />
            ) : (
              <div style={{
                width: '100%',
                height: '450px',
                background: '#222',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '8px'
              }}>
                Imagem não disponível
              </div>
            )}
          </MoviePoster>

          <MovieInfo>
            <MovieTitle>{movie.title}</MovieTitle>
            <MovieSubtitle>{movie.original_title !== movie.title ? movie.original_title : ''}</MovieSubtitle>

            <MovieDetails>
              <DetailItem>
                <DetailLabel>Data de Lançamento</DetailLabel>
                <DetailValue>{movie.release_date ? new Date(movie.release_date).toLocaleDateString('pt-BR') : 'N/A'}</DetailValue>
              </DetailItem>

              <DetailItem>
                <DetailLabel>Nota</DetailLabel>
                <DetailValue>
                  <Rating>⭐ {movie.vote_average.toFixed(1)}/10</Rating>
                </DetailValue>
              </DetailItem>

              <DetailItem>
                <DetailLabel>Duração</DetailLabel>
                <DetailValue>N/A</DetailValue>
              </DetailItem>
            </MovieDetails>

            <MovieDetails>
              <DetailItem>
                <DetailLabel>Gêneros</DetailLabel>
                <DetailValue>
                  {movie.genre_names ? movie.genre_names.join(', ') : 'N/A'}
                </DetailValue>
              </DetailItem>
            </MovieDetails>

            <ActionButtons>
              <Button variant="primary">Adicionar aos Favoritos</Button>
              <Button variant="secondary">Assistir Trailer</Button>
            </ActionButtons>
          </MovieInfo>
        </MovieHeader>

        <MovieOverview>
          <OverviewTitle>Sinopse</OverviewTitle>
          <OverviewText>
            {movie.overview || 'Não há descrição disponível para este filme.'}
          </OverviewText>
        </MovieOverview>
      </MovieDetailCard>
    </Container>
  );
};

export default MovieDetail;