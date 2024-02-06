import "./App.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App container">
      <header className="App-header">
        <h1>What is the weather today?</h1>
        <Weather />
        <footer>
          This project was coded by{" "}
          <a href="https://github.com/annadowding">Anna Dowding</a> is{" "}
          <a href="https://github.com/annadowding/react-js-weather-app">
            open-sourced
          </a>{" "}
          and{" "}
          <a href="https://anna-dowding-react-weather-app.netlify.app/">
            hosted on Netlify
          </a>
          .
        </footer>
      </header>
    </div>
  );
}

export default App;
