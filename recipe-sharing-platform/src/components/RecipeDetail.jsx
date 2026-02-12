import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/public/data.json")
      .then((res) => res.json())
      .then((data) => {
        const foundRecipe = data.find((r) => r.id === Number(id));
        setRecipe(foundRecipe);
      })
      .catch((err) => console.error("Error loading recipe:", err));
  }, [id]);

  if (!recipe) return <p className="mt-10 text-center">Loading...</p>;

  return (
    <div className="container p-6 mx-auto">
      <h1 className="mb-4 text-3xl font-bold">{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="object-cover w-full h-64 mb-6 rounded-lg"
      />

      <div className="p-6 mb-6 bg-white rounded-lg shadow-md">
        <h2 className="mb-4 text-2xl font-semibold">Ingredients</h2>
        <ul className="space-y-2 text-gray-700 list-disc list-inside">
          {recipe.ingredients?.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>

      <div className="p-6 bg-white rounded-lg shadow-md">
        <h2 className="mb-4 text-2xl font-semibold">Instructions</h2>
        <ol className="space-y-3 text-gray-700 list-decimal list-inside">
          {recipe.instructions?.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;