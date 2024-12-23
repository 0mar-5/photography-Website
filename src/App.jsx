import { Route, BrowserRouter, Routes } from "react-router-dom";
import Navbar from "./Components/navbar/Navbar";
import Intro from "./Components/intro/Intro";
import Plans from "./Components/plans/Plans";
import Gallery from "./Components/gallery/Gallery";

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
