import Navbar from "./Components/Navbar";
import Intro from "./Components/Intro";
import Plans from "./Components/Plans";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Intro />
        <Plans />
      </div>
    </div>
  );
}

export default App;
