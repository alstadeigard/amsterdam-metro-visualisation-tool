import React from 'react'
import Graph from './Graph.jsx'
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Graph />
          </div>
      </BrowserRouter>
  );
}

export default App;
