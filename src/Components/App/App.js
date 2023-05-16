import './App.css';
import { Routes, Route } from 'react-router-dom';

// import HomePage from '../../pages/HomePage/HomePage';
import RecipeChoices from '../../pages/RecipeChoices/RecipeChoices';
import RecipeDetail from '../../pages/RecipeDetail/RecipeDetail';

import Nav from '../Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <main className="container">
        <Routes>
          <Route exact path="/recipe-choices" component={<RecipeChoices />} />
          <Route exact path="/recipe-detail/:id" component={<RecipeDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;



//<Route path="/" element={<HomePage />} />//
//<Route path="/recipe-choices" element={<RecipeChoices />} />//
//<Route path="/recipe-detail/:id" element={<RecipeDetail />} />//