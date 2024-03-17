import React, { useState, useEffect } from "react";
import image2 from "../assets/Untitled (3).png";
import image3 from "../assets/Untitled (4).png";
import image4 from "../assets/Untitled (5).png";
import image5 from "../assets/Untitled (6).png";
import image6 from "../assets/Untitled (7).png";
import image7 from "../assets/Untitled (8).png";
import image8 from "../assets/Untitled (9).png";
import image9 from "../assets/Untitled (10).png";
import image10 from "../assets/Untitled (11).png";

const images = [
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
];

const Images = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex  h-96 m-8 lg:h-full lg:w-full  justify-center items-center">
      {/* Image */}
      <img
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        className=" h-96 lg:h-96 w-screen lg:w-4/5  sm:h-full rounded-lg flex justify-center items-center"
      />
    </div>
  );
};

export default Images;
