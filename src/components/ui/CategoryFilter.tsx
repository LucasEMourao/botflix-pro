import styled from 'styled-components';

const FilterContainer = styled.div`
  margin: 1rem 0 2rem;
  padding: 0 1rem;
  overflow-x: auto;
  white-space: nowrap;
  scrollbar-width: none;
  -ms-overflow-style: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

const FilterList = styled.div`
  display: inline-flex;
  gap: 0.75rem;
  align-items: center;
`;

const FilterButton = styled.button<{ $active?: boolean }>`
  padding: 0.5rem 1rem;
  background-color: ${({ $active }) => $active ? 'rgba(229, 9, 20, 0.2)' : 'rgba(255, 255, 255, 0.1)'};
  color: ${({ $active }) => $active ? '#e50914' : '#d0d0d0'};
  border: 1px solid ${({ $active }) => $active ? '#e50914' : 'rgba(255, 255, 255, 0.2)'};
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  
  &:hover {
    background-color: rgba(229, 9, 20, 0.3);
    color: #fff;
    border-color: #e50914;
  }
`;

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string | null;
  onCategoryChange: (category: string | null) => void;
  className?: string;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  categories, 
  activeCategory, 
  onCategoryChange,
  className 
}) => {
  return (
    <FilterContainer className={className}>
      <FilterList>
        <FilterButton
          $active={activeCategory === null}
          onClick={() => onCategoryChange(null)}
        >
          Todos
        </FilterButton>
        {categories.map((category) => (
          <FilterButton
            key={category}
            $active={activeCategory === category}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </FilterButton>
        ))}
      </FilterList>
    </FilterContainer>
  );
};

export default CategoryFilter;