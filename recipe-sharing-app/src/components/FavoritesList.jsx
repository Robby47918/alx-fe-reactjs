import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const FavoritesList = () => {
  const recipes = useRecipeStore((state) => state.recipes) || [];
  const favorites = useRecipeStore((state) => state.favorites) || [];

  // Build list of favorite recipes
  const favoriteRecipes = recipes.filter((r) => favorites.includes(r.id));

  return (
    <div>
      <h2>My Favorites</h2>
      {favoriteRecipes.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        favoriteRecipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>
              <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
            </h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesList;

