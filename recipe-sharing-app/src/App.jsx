import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import EditRecipeForm from "./components/EditRecipeForm";
import DeleteRecipeButton from "./components/DeleteRecipeButton";
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";
import SearchBar from "./components/SearchBar";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <div style={{ padding: "20px" }}>
          <h1>
            <Link to="/">Recipe Sharing App</Link>
          </h1>
        
          <Routes>
            <Route path="/search" element={<SearchBar />} />
            <Route path="/edit/:id" element={<EditRecipeForm />} />
            <Route path="/delete/:id" element={<DeleteRecipeButton />} />
            <Route path="/favorites" element={<FavoritesList />} />
            <Route path="/recommendations" element={<RecommendationsList />} />
            <Route path="/" element={<RecipeList />} />
            <Route path="/add" element={<AddRecipeForm />} />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
      <recipeStore />

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
