import { useRecipeStore } from './recipeStore';
import { useEffect } from 'react';

const RecommendationsList = () => {
  const recommendations = useRecipeStore((s) => s.recommendations);
  const generateRecommendations = useRecipeStore((s) => s.generateRecommendations);

  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  return (
    <div>
      <h2>Recommended for You</h2>
      {recommendations.length === 0 ? (
        <p>No recommendations available.</p>
      ) : (
        recommendations.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecommendationsList;
