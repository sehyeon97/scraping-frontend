

import './App.css';

// Server is online at:
// https://sehyeon97.github.io/scraping-frontend/
// to update github pages, in the terminal type: npm run deploy (npm run build to)
function App() {
  return (
    <div className="App">
      <form action='../../post' method='post'>
        <button type='submit'>Connect to Node</button>
      </form>
    </div>
  );
}

export default App;
