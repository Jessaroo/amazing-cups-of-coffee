import './App.css';
import { Routes, Route } from 'react-router-dom';

import HomePage from '../../pages/HomePage/HomePage';
import RecipeChoices from '../../pages/RecipeChoices/RecipeChoices';
import RecipeDetail from '../../pages/RecipeDetail/RecipeDetail';

import Nav from '../Nav';

export default function App() {
  return (
    <div className="App">
      <Nav />
      <main className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Recipes" element={<RecipeChoices />} />
          <Route path="/recipe-detail/:id" element={<RecipeDetail />} />
        </Routes>
      </main>
    </div>
  );
}
