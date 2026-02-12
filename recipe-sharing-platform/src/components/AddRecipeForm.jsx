import React, { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  // ✅ Separate validation function
  const validate = (title, ingredients, steps) => {
    const errors = {};
    if (!title.trim()) errors.title = "Title is required";
    if (!ingredients.trim()) errors.ingredients = "Ingredients are required";
    else if (ingredients.split("\n").length < 2)
      errors.ingredients = "Include at least two ingredients";
    if (!steps.trim()) errors.steps = "Preparation steps are required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validate(title, ingredients, steps);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const newRecipe = {
        title,
        ingredients: ingredients.split("\n"),
        instructions: steps.split("\n"),
      };
      console.log("Recipe submitted:", newRecipe);

      // Reset form
      setTitle("");
      setIngredients("");
      setSteps("");
    }
  };

  return (
    <div className="container p-6 mx-auto">
      <h1 className="mb-6 text-3xl font-bold text-center">Add New Recipe</h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg p-6 mx-auto bg-white rounded-lg shadow-md"
      >
        {/* Title */}
        <div className="mb-4">
          <label className="block mb-2 font-semibold text-gray-700">
            Recipe Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.title && (
            <p className="mt-1 text-sm text-red-500">{errors.title}</p>
          )}
        </div>

        {/* Ingredients */}
        <div className="mb-4">
          <label className="block mb-2 font-semibold text-gray-700">
            Ingredients (one per line)
          </label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            rows="4"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.ingredients && (
            <p className="mt-1 text-sm text-red-500">{errors.ingredients}</p>
          )}
        </div>

        {/* Steps */}
        <div className="mb-4">
          <label className="block mb-2 font-semibold text-gray-700">
            Preparation Steps (one per line)
          </label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            rows="4"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.steps && (
            <p className="mt-1 text-sm text-red-500">{errors.steps}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-2 font-semibold text-white transition duration-300 bg-blue-500 rounded-lg hover:bg-blue-600"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;