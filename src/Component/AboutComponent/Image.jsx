import React, { useState } from "react";

const ImageGallery = () => {
  // Image data with paths and captions
  const imageData = [
    {
      path: "openHouse.jpg",
      caption: "University Open House Spring 2025"
    },
    {
      path: "teamImage.jpeg",
      caption: "Project Oval Team @NCDOT"
    },
    {
      path: "qlocPoster.jpg",
      caption: "QLOC Poster Presentation at NCDOT Research and Innovation Symposium 2025"
    },
    {
      path: "wolfwagenBack.jpg",
      caption: "Wolf Wagen Back"
    },
    {
      path: "wolfwagenFront.jpg",
      caption: "Wolf Wagen Front"
    },
    {
      path: "CrossfitClubImage.jpeg",
      caption: "Crossfit Club - DC Trip Fall 2024"
    }
    ,
    {
      path: "beachTrip.jpeg",
      caption: "Crossfit Club - Beach Trip Spring 2025"
    },
    {
      path: "Hiking Trip.jpeg",
      caption: "Adventure through nature trails"
    },
    {
      path: "murph2025.jpeg", 
      caption: "Murph 2025"
    }
    
  ];

  // State to track current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigation functions
  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? imageData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === imageData.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-screen mx-auto bg-gray-100 min-h-screen px-4 text-gray-800 flex items-center justify-center">
      <div className="container flex flex-col max-w-3xl mx-auto py-16">
        {/* Header */}
        <div className="text-4xl font-extrabold tracking-widest mb-8 text-center">
          Visuals
        </div>

        {/* Main image display container */}
        <div className="relative w-full h-[450px] md:h-[600px] bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Image */}
          <img
            src={imageData[currentIndex].path}
            alt={`Gallery Image ${currentIndex + 1}`}
            className="w-full h-full object-cover"
          />

          {/* Caption */}
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 text-center">
            <p className="text-lg">{imageData[currentIndex].caption}</p>
            <p className="text-sm mt-1">
              Image {currentIndex + 1} of {imageData.length}
            </p>
          </div>

          {/* Navigation buttons - larger and more prominent */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-60 hover:bg-opacity-80 text-white p-3 rounded-full transition-all duration-300"
            aria-label="Previous image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-60 hover:bg-opacity-80 text-white p-3 rounded-full transition-all duration-300"
            aria-label="Next image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Thumbnail navigation - more compact */}
        <div className="mt-4 flex justify-center space-x-1 overflow-x-auto p-1">
          {imageData.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-14 w-14 flex-shrink-0 overflow-hidden rounded-md border-2 transition-all duration-200 ${
                index === currentIndex
                  ? "border-blue-500 opacity-100"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <img
                src={image.path}
                alt={`Thumbnail ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;