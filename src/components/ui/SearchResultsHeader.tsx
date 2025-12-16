import styled from 'styled-components';

const HeaderContainer = styled.header`
  text-align: center;
  margin: 2rem 0;
  padding: 0 1rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #fff;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  color: #d0d0d0;
  font-size: 1rem;
`;

interface SearchResultsHeaderProps {
  title: string;
  subtitle?: string;
}

const SearchResultsHeader: React.FC<SearchResultsHeaderProps> = ({ 
  title, 
  subtitle 
}) => {
  return (
    <HeaderContainer>
      <Title>{title}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </HeaderContainer>
  );
};

export default SearchResultsHeader;