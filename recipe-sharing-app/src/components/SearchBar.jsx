import { useRecipeStore } from './recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((s) => s.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{ marginBottom: '16px', padding: '8px', width: '100%' }}
    />
  );
};

export default SearchBar;
