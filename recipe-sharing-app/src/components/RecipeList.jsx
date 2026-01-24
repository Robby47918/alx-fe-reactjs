import { useRecipeStore } from './recipeStore';

  const RecipeList = () => {
    const filteredRecipes = useRecipeStore(state => state.filteredRecipes);

    return (
      <div>
        {filteredRecipes.length === 0 ? (
          <p>No recipes found.</p>
        ) : (
          filteredRecipes.map(recipe => (
            <div key={recipe.id} style={{ marginBottom: '12px' }}>
              <h3> 
                <a href={`/recipe/${recipe.id}`}>{recipe.title}</a>
              </h3>
              <p>{recipe.description}</p>
            </div>
          ))
        )}
      </div>
    );
  };
export default RecipeList;