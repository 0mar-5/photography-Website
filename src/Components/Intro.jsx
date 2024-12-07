import natureImg from "../Images/nature.jpg";
import { Link } from "react-router-dom";

function Intro() {
  return (
    <main className="intro-container">
      <div className="description">
        <h1>Your Photography Journey Begins Here</h1>
        <p>Discover the beauty through our lens...</p>
        <p>
          Capture moments, tell stories, and create memories that last a
          lifetime.
        </p>
        <button>
          <Link to="gallery">Explore Now</Link>
        </button>
      </div>
      <div className="image">
        <img src={natureImg} alt="nature" />
      </div>
    </main>
  );
}

export default Intro;
