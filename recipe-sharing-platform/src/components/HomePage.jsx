import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {recipes.map((recipe) => (
    <div
      key={recipe.id}
      className="transition duration-300 transform bg-white rounded-lg shadow-md hover:shadow-xl hover:scale-105"
    >
      <img
        src={recipe.image}
        alt={recipe.title}
        className="object-cover w-full h-48 rounded-t-lg"
      />
      <div className="p-4">
        <h2 className="mb-2 text-xl font-semibold">{recipe.title}</h2>
        <p className="text-gray-600">{recipe.summary}</p>
        <Link
          to={`/recipe/${recipe.id}`}
          className="block mt-2 text-blue-500 hover:underline">
          View Recipe
        </Link>
        
        <Link to="/add-recipe" className="text-red-500 hover:underline ">
        Add New Recipe
        </Link>
      </div>
    </div>
  ))}
</div>
  );
};

export default HomePage;