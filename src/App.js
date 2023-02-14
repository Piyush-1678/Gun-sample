import { Routes, Route } from "react-router-dom";
import './App.css';
import Images from "./Components/Data";
import Guns from './Components/Guns';

function App() {
  return (
    <div className="App">
      <h1>Just add gun1 or gun2 in the url</h1>
      <Routes>
      {Images.map((Image, index) => {
          return (
            <Route
              exact
              path={"/" + Image.name}
              element={<Guns tomap={index} />}
            />
          );
        })}
     </Routes>
    </div>
  );
}

export default App;
