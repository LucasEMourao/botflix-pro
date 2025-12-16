import React from 'react';
import styled from 'styled-components';

const NoResultsContainer = styled.div`
  text-align: center;
  padding: 3rem;
  margin: 2rem 0;
`;

const NoResultsTitle = styled.h2`
  color: #fff;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const NoResultsMessage = styled.p`
  color: #d0d0d0;
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto 1.5rem;
`;

const Suggestions = styled.div`
  margin-top: 2rem;
`;

const SuggestionsTitle = styled.h3`
  color: #fff;
  margin-bottom: 1rem;
`;

const SuggestionsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SuggestionItem = styled.li`
  color: #d0d0d0;
  margin: 0.5rem 0;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "•";
    color: #e50914;
    margin-right: 0.5rem;
  }
`;

interface NoResultsProps {
  query?: string;
  suggestions?: string[];
}

const NoResults: React.FC<NoResultsProps> = ({ 
  query = '', 
  suggestions = [
    'Tente usar palavras-chave diferentes',
    'Seja mais específico sobre o gênero desejado',
    'Experimente buscar por atores ou diretores',
    'Considere buscar por filmes similares'
  ] 
}) => {
  return (
    <NoResultsContainer>
      <NoResultsTitle>Nenhum filme encontrado</NoResultsTitle>
      <NoResultsMessage>
        Não encontramos nenhum filme correspondente à sua busca "{query || 'vazia'}". 
        Tente usar palavras-chave diferentes ou mais específicas.
      </NoResultsMessage>
      
      <Suggestions>
        <SuggestionsTitle>Sugestões para melhorar sua busca:</SuggestionsTitle>
        <SuggestionsList>
          {suggestions.map((suggestion, index) => (
            <SuggestionItem key={index}>
              {suggestion}
            </SuggestionItem>
          ))}
        </SuggestionsList>
      </Suggestions>
    </NoResultsContainer>
  );
};

export default NoResults;