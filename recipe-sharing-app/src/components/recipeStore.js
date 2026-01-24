import { create } from "zustand";

export const useRecipeStore = create((set, get) => ({
  recipes: [
    { id: 1, title: "Jollof Rice", description: "A popular West African dish." },
     { id: 2, title: "Fufu and Light Soup", description: "Traditional Ghanaian meal." }
  ],
  favorites: [],
  recommendations: [],
  searchTerm: "",
  setSearchTerm: (term) => set({ searchTerm: term }),

  filteredRecipes: [],
  filterRecipes: () => {
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()),
      ),
    }));
  },

  addFavorite: (recipeId) =>
    set((state) =>
      state.favorites.includes(recipeId)
        ? state
        : { favorites: [...state.favorites, recipeId] },
    ),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  generateRecommendations: () => {
    const { recipes, favorites } = get();
    const recommended = recipes.filter(
      (recipe) => favorites.includes(recipe.id) && Math.random() > 0.5,
    );
    set({ recommendations: recommended });
  },

  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),

  updateRecipe: (id, updates) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === id ? { ...r, ...updates } : r,
      ),
    })),
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
    })),
}));

