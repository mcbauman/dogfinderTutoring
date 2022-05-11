import React from 'react';
import { NavLink, Route ,Routes } from 'react-router-dom';
import { getDog, getDogs } from "./datadogs.js"
import Dog from "./Dog"
import "./style.css"
import Dogs from "./Dogs.js"


function App() {

  return (
    <div className="App">
      <h1>My React App</h1>

        <Routes>
          <Route path="/dogs" element={<Dogs/>}>
            <Route path=":name" element={<Dog/>}/>
          </Route>
        </Routes>

    </div>
  );
}


export default App;