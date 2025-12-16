import React from 'react';
import styled from 'styled-components';
import { IMovie } from '../../types';
import MovieCard from '../components/ui/MovieCard';
import SearchResultsHeader from '../components/ui/SearchResultsHeader';
import ErrorMessage from '../components/ui/ErrorMessage';
import { useSearchHistory, SearchHistoryItem } from '../hooks/useSearchHistory';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  min-height: calc(100vh - 200px);
`;

const SearchHistoryList = styled.div`
  margin-top: 2rem;
`;

const HistoryItem = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #222;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
  }
`;

const HistoryQuery = styled.div`
  color: #fff;
  font-size: 1rem;
`;

const HistoryDate = styled.div`
  color: #808080;
  font-size: 0.9rem;
`;

const ResultsPreview = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  overflow-x: auto;
  padding: 0.5rem 0;
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: #e50914;
    border-radius: 3px;
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
`;

const SearchHistory: React.FC = () => {
  const { history, clearHistory } = useSearchHistory();

  if (history.length === 0) {
    return (
      <Container>
        <SearchResultsHeader
          title="Histórico de Buscas"
          subtitle="Nenhuma busca realizada ainda"
        />
        <EmptyState>
          <EmptyTitle>Você ainda não realizou nenhuma busca</EmptyTitle>
          <EmptyMessage>
            Suas buscas aparecerão aqui para que você possa revisitar rapidamente
          </EmptyMessage>
        </EmptyState>
      </Container>
    );
  }

  return (
    <Container>
      <SearchResultsHeader
        title="Histórico de Buscas"
        subtitle={`${history.length} busca${history.length !== 1 ? 's' : ''} realizada${history.length !== 1 ? 's' : ''}`}
      />

      <SearchHistoryList>
        {history.map((item) => (
          <HistoryItem key={item.id}>
            <div>
              <HistoryQuery>{item.query}</HistoryQuery>
              <HistoryDate>{new Date(item.timestamp).toLocaleString('pt-BR')}</HistoryDate>
            </div>
            <ResultsPreview>
              {item.results.slice(0, 3).map((movie) => (
                <div key={movie.id} style={{ minWidth: '100px' }}>
                  <img
                    src={movie.poster_path ? `https://image.tmdb.org/t/p/w92${movie.poster_path}` : '/src/images/botflix-robot.jpg'}
                    alt={movie.title}
                    style={{ width: '100%', borderRadius: '4px' }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = '/src/images/botflix-robot.jpg';
                    }}
                  />
                </div>
              ))}
              {item.results.length > 3 && (
                <div style={{ display: 'flex', alignItems: 'center', color: '#d0d0d0', fontSize: '0.8rem' }}>
                  +{item.results.length - 3} mais
                </div>
              )}
            </ResultsPreview>
          </HistoryItem>
        ))}
      </SearchHistoryList>
    </Container>
  );
};

export default SearchHistory;