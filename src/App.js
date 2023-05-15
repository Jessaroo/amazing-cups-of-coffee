import React from 'react';
import logo from './logo.svg';
import RecipeList from './RecipeList/RecipeList';
import RecipeDetail from './RecipeDetail/RecipeDetail';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Amazing Cups of Coffee
        </a>
      </header>
      <main>
        <RecipeList />
        <RecipeDetail />
      </main>
    </div>
  );
}

export default App;