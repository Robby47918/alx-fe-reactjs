import { useNavigate } from "react-router-dom";
import DeleteRecipeButton from "./DeleteRecipeButton";
import EditRecipeForm from "./EditRecipeForm";
import { useRecipeStore } from "./recipeStore";

const RecipeDetails = ({ recipeId }) => {
  const navigate = useNavigate();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === recipeId),
  );

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      <h3>Edit Recipe</h3>
      <EditRecipeForm recipe={recipe} />

      <DeleteRecipeButton id={recipeId} onDeleted={() => navigate("/")} />
    </div>
  );
};

export default RecipeDetails;
