import React, { useState } from "react";
import styled from "styled-components";
import { IMovie } from "../types";
import { movieService } from "../services/movieService";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import MovieCard from "../components/ui/MovieCard";
import ErrorMessage from "../components/ui/ErrorMessage";
import SearchResultsHeader from "../components/ui/SearchResultsHeader";
import NoResults from "../components/ui/NoResults";
import { useSearchHistory } from "../hooks/useSearchHistory";

const MainContent = styled.main`
  width: 100%;
  min-height: 100vh;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  animation: fadeIn 0.6s ease-out;
`;

const BrandHeader = styled.div`
  padding: 24px 0;
  margin-bottom: 24px;
`;

const ContainerLogo = styled.div`
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

const BrandTitle = styled.h1`
  margin-bottom: 16px;
  color: #f20612;
  font-size: 48px;
  font-weight: 700;
`;

const BrandSubtitle = styled.p`
  color: #ffffff;
  font-size: 20px;
  line-height: 1.6;
`;

const SearchCard = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 32px;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
`;

const SearchContent = styled.div`
  gap: 24px;
  display: flex;
  flex-direction: column;
`;

const InputContainer = styled.div`
  position: relative;
`;

const Examples = styled.div`
  color: #d0d0d0;
  font-size: 14px;
  text-align: left;
`;

const ExamplesTitle = styled.p`
  margin-bottom: 8px;
  font-weight: 500;
`;

const ExamplesList = styled.ul`
  gap: 4px;
  font-size: 12px;
  list-style: none;
  display: flex;
  flex-direction: column;
  opacity: 0.8;
`;

const ResultsSection = styled.section`
  width: 100%;
  margin-top: 32px;
  display: none;

  ${({ $hasResults }: { $hasResults: boolean }) =>
    $hasResults &&
    `
    display: block;
  `}
`;

const MoviesGrid = styled.div<{ $count: number }>`
  display: grid;
  gap: 32px;
  justify-content: center;

  grid-template-columns: ${({ $count }) =>
    $count === 1
      ? "minmax(260px, 320px)"
      : $count === 2
      ? "repeat(2, minmax(260px, 320px))"
      : "repeat(auto-fill, minmax(260px, 320px))"};

  padding: 40px 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const HomePage: React.FC = () => {
  const [mood, setMood] = useState("");
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchPerformed, setSearchPerformed] = useState(false);

  const { addToHistory } = useSearchHistory();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!mood.trim()) {
      setError("Por favor, descreva o que você quer assistir!");
      return;
    }

    setError(null);
    setLoading(true);
    setSearchPerformed(true);

    try {
      const data = await movieService.searchMovies({ userPrompt: mood });

      // The API response should follow the TMDB standard format
      if (data && Array.isArray(data.results) && data.results.length > 0) {
        setMovies(data.results);
        addToHistory(mood, data.results);
      } else {
        setMovies([]);
      }
    } catch (err) {
      console.error("Erro ao buscar filmes:", err);
      setError("Erro ao buscar filmes. Tente novamente.");
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainContent>
      <BrandHeader>
        <ContainerLogo>
          <img
            src="/src/images/botflix-robot.jpg"
            alt="Assistente Robô BotFlix"
            style={{
              width: "128px",
              height: "128px",
              borderRadius: "50%",
              objectFit: "cover",
              boxShadow: "0 0 40px hsla(348, 83%, 47%, 0.4)",
              animation: "float 3s ease-in-out infinite",
            }}
          />
          <BrandTitle>BotFlix</BrandTitle>
        </ContainerLogo>

        <BrandSubtitle>
          Seu assistente pessoal para encontrar o filme perfeito
        </BrandSubtitle>
      </BrandHeader>

      <SearchCard role="region" aria-labelledby="search-form-title">
        <h2 id="search-form-title" className="sr-only">
          Busca de filmes
        </h2>
        <form
          onSubmit={handleSubmit}
          role="search"
          aria-label="Busca de filmes"
        >
          <SearchContent>
            <InputContainer>
              <Input
                id="mood-input"
                value={mood}
                onChange={(e) => setMood(e.target.value)}
                placeholder="Digite como você está se sentindo ou o que quer assistir..."
                aria-label="Descreva seu humor ou o tipo de filme que deseja assistir"
                fullWidth
              />
            </InputContainer>

            {/* Examples */}
            <Examples>
              <ExamplesTitle>Exemplos:</ExamplesTitle>
              <ExamplesList>
                <li>• Quero algo engraçado para relaxar depois do trabalho</li>
                <li>
                  • Estou procurando um thriller que me deixe na ponta da
                  cadeira
                </li>
                <li>• Algo romântico para assistir com minha namorada</li>
              </ExamplesList>
            </Examples>

            <Button
              type="submit"
              variant="primary"
              size="large"
              loading={loading}
              disabled={!mood.trim() || loading}
              fullWidth
              style={{ padding: "16px 32px" }}
              aria-describedby={error ? "error-message" : undefined}
            >
              {loading ? "Buscando..." : "Encontrar Filmes Perfeitos"}
            </Button>
          </SearchContent>
        </form>
      </SearchCard>

      {error && <ErrorMessage message={error} id="error-message" />}

      {searchPerformed && movies.length === 0 && !loading && !error && (
        <NoResults query={mood} />
      )}

      {movies.length > 0 && (
        <ResultsSection
          $hasResults={true}
          role="region"
          aria-labelledby="results-heading"
        >
          <SearchResultsHeader
            title="Filmes perfeitos pra você"
            subtitle={`${movies.length} resultado${
              movies.length !== 1 ? "s" : ""
            } encontrado${movies.length !== 1 ? "s" : ""}`}
          />
          <MoviesGrid
            $count={movies.length}
            role="list"
            aria-label="Lista de filmes recomendados"
          >
            {movies.map((movie) => (
              <div
                key={movie.id}
                role="listitem"
                aria-label={`Filme: ${movie.title}`}
              >
                <MovieCard movie={movie} />
              </div>
            ))}
          </MoviesGrid>
        </ResultsSection>
      )}
    </MainContent>
  );
};

export default HomePage;
