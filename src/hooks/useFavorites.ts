import { useState, useEffect, useCallback } from 'react';
import { IMovie } from '../types';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<IMovie[]>([]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem('botflix-favorites');
    if (savedFavorites) {
      try {
        setFavorites(JSON.parse(savedFavorites));
      } catch (error) {
        console.error('Error parsing favorites from localStorage:', error);
        setFavorites([]);
      }
    }
  }, []);

  const addToFavorites = useCallback((movie: IMovie) => {
    setFavorites(prevFavorites => {
      const newFavorites = [...prevFavorites, movie];
      localStorage.setItem('botflix-favorites', JSON.stringify(newFavorites));
      return newFavorites;
    });
  }, []);

  const removeFromFavorites = useCallback((movieId: number) => {
    setFavorites(prevFavorites => {
      const newFavorites = prevFavorites.filter(movie => movie.id !== movieId);
      localStorage.setItem('botflix-favorites', JSON.stringify(newFavorites));
      return newFavorites;
    });
  }, []);

  const toggleFavorite = useCallback((movie: IMovie) => {
    setFavorites(prevFavorites => {
      const isCurrentlyFavorite = prevFavorites.some(fav => fav.id === movie.id);
      let newFavorites;

      if (isCurrentlyFavorite) {
        newFavorites = prevFavorites.filter(fav => fav.id !== movie.id);
      } else {
        newFavorites = [...prevFavorites, movie];
      }

      localStorage.setItem('botflix-favorites', JSON.stringify(newFavorites));
      return newFavorites;
    });
  }, []);

  const isFavorite = useCallback((movieId: number) => {
    return favorites.some(movie => movie.id === movieId);
  }, [favorites]);

  return {
    favorites,
    addToFavorites,
    removeFromFavorites,
    toggleFavorite,
    isFavorite
  };
};