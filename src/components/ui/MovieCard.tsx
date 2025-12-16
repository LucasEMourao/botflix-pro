import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IMovie } from "../../types";
import Card from "./Card";
import FavoriteButton from "./FavoriteButton";
import { useFavorites } from "../../hooks/useFavorites";

const MovieCardWrapper = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
  position: relative;
  outline: none;

  width: 100%;
  max-width: 220px;

  &:hover {
    transform: translateY(-8px) scale(1.03);
  }

  &:focus-visible {
    outline: 2px solid #e50914;
    outline-offset: 2px;
  }
`;

const MoviePoster = styled.div`
  width: 100%;
  aspect-ratio: 2 / 3;
  overflow: hidden;
`;

const MovieInfo = styled.div`
  padding: 12px;
`;

const MovieTitle = styled.h4`
  font-size: 16px;
  margin-bottom: 6px;
`;

const MovieOverview = styled.p`
  font-size: 13px;
  line-height: 1.4;
  color: #ccc;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const MovieRating = styled.p`
  font-size: 14px;
`;

interface MovieCardProps {
  movie: IMovie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : null;

  const [imageError, setImageError] = useState(false);
  const { toggleFavorite, isFavorite } = useFavorites();

  const handleFavoriteToggle = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation when clicking the favorite button
    e.stopPropagation();

    toggleFavorite(movie);
  };

  return (
    <MovieCardWrapper
      to={`/movie/${movie.id}`}
      aria-label={`Ver detalhes do filme ${movie.title}`}
    >
      <Card>
        <MoviePoster>
          {!imageError && posterUrl ? (
            <img
              src={posterUrl}
              alt={movie.title}
              loading="lazy"
              onError={() => setImageError(true)}
              style={{
                width: "100%",
                aspectRatio: "2 / 3",
                objectFit: "cover",
                display: "block",
              }}
            />
          ) : (
            <div
              role="img"
              aria-label={`Capa não disponível para ${movie.title}`}
              style={{
                width: "100%",
                height: "100%",
                background: "#222",
                color: "#888",
                fontSize: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: "12px",
              }}
            >
              Imagem não disponível
            </div>
          )}
          <FavoriteButton
            isFavorite={isFavorite(movie.id)}
            onClick={handleFavoriteToggle}
            aria-label={
              isFavorite(movie.id)
                ? `Remover ${movie.title} dos favoritos`
                : `Adicionar ${movie.title} aos favoritos`
            }
          />
        </MoviePoster>

        <MovieInfo>
          <MovieTitle title={movie.title} tabIndex={0}>
            {movie.title}
          </MovieTitle>
          <MovieOverview aria-label={`Sinopse de ${movie.title}`}>
            {movie.overview || "Sinopse não disponível."}
          </MovieOverview>
          <MovieRating>
            ⭐{" "}
            {typeof movie.vote_average === "number"
              ? movie.vote_average.toFixed(1)
              : "N/A"}{" "}
            / 10
          </MovieRating>
        </MovieInfo>
      </Card>
    </MovieCardWrapper>
  );
};

export default MovieCard;
