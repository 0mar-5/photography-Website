import "./Gallery.css";

function Gallery() {
  const imageURL = [
    "https://media.geeksforgeeks.org/wp-content/uploads/20240122102942/1a-(2).jpg",
    "https://media.geeksforgeeks.org/wp-content/uploads/20240122103211/13.jpg",
    "https://media.geeksforgeeks.org/wp-content/uploads/20240122103211/15.jpg",
    "https://media.geeksforgeeks.org/wp-content/uploads/20240122103210/12.jpg",
    "https://media.geeksforgeeks.org/wp-content/uploads/20240122103210/14.jpg",
    "https://media.geeksforgeeks.org/wp-content/uploads/20240122102942/2b.jpg",
  ];
  return (
    <div className="gallery">
      {imageURL.map((image, i) => (
        <div key={i} className="img-container">
          <img src={image} alt={`image ${i + 1}`} />
        </div>
      ))}
    </div>
  );
}

export default Gallery;
