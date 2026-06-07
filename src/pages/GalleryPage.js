import React from "react";

export default function GalleryPage() {
  const images = [
    "https://via.placeholder.com/200",
    "https://via.placeholder.com/200",
    "https://via.placeholder.com/200",
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Memories Gallery 📸</h1>
      <p>Some beautiful moments together ❤️</p>

      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        {images.map((img, index) => (
          <img key={index} src={img} alt="memory" />
        ))}
      </div>
    </div>
  );
}