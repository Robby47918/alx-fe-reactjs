import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const addFavorite = useRecipeStore(state => state.addFavorite);
  const favorites = useRecipeStore(state => state.favorites);

  return (
    <div>
      {recipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        recipes.map(recipe => (
          <div key={recipe.id} style={{ marginBottom: '12px' }}>
            <h3>
              <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
            </h3>
            <p>{recipe.description}</p>
            <button
              onClick={() =>
                addFavorite(recipe.id)
              }
            >
              {favorites.includes(recipe.id) ? "Favorited" : "Add to Favorites"}
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
