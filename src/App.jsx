import Navbar from "./Components/Navbar";
import Intro from "./Components/Intro";
import Plans from "./Components/Plans";
import Gallery from "./Components/Gallery";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Intro />
        <Plans />
        <Gallery />
      </div>
    </div>
  );
}

export default App;
