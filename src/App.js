import React from "react";
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App container">
      <header className="App-header">
      </header>
      <main>
<Dictionary />
      </main>
      <footer className="App-footer">
        This project is created by <a href="https://www.elisacrescentini.dev" target="_blank" rel="noreferrer noopener" title="Elisa Crescentini portfolio">Elisa Crescentini</a> and is {" "} 
        <a href="https://github.com/AmyLynn87/dictionary-project" target="_blank" rel="noreferrer noopener" title="React Dictionary app repository on GitHub">open-sourced</a> on GitHub and hosted on <a href="https://www.netlify.com/" target="_blank" rel="noreferrer noopener" title="Netlify Homepage">Netlify</a>.
      </footer>
    </div>
  );
}

