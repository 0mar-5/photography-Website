import { Route, BrowserRouter, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Intro from "./Components/Intro";
import Plans from "./Components/Plans";
import Gallery from "./Components/Gallery";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Intro />
                <Plans />
              </>
            }
          />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
