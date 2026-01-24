import { useParams, useNavigate } from "react-router-dom";
import DeleteRecipeButton from "./DeleteRecipeButton";
import EditRecipeForm from "./EditRecipeForm";
import { useRecipeStore } from "./recipeStore";
import FavoriteButton from "./FavoritesList";

const RecipeDetails = () => {
  const { id } = useParams(); // get id from URL
  const navigate = useNavigate();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === Number(id))
  );

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      {/* Favorite toggle */}
      <FavoriteButton recipeId={recipe.id} />

      <h3>Edit Recipe</h3>
      <EditRecipeForm recipe={recipe} />

      <DeleteRecipeButton id={recipe.id} onDeleted={() => navigate("/")} />
    </div>
  );
};

export default RecipeDetails;
