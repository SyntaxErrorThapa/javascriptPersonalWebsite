import React, { useState, useEffect } from "react";

const ImageGallery = () => {
  const imageData = [
    {
      images: ["openHouse.jpg"],
      caption: "University Open House Spring 2025",
    },
    {
      images: ["teamImage.jpeg"],
      caption: "Project Oval Team @NCDOT",
    },
    {
      images: ["iEEE2.png", "iEEE4.png", "iEEE3.png", "iEEE1.png"],
      caption: `IEEE IV 2025 Cluj-Napoca, Romania Attendance`,
    },
    {
      images: ["qlocPoster.jpg"],
      caption: "QLOC Poster Presentation at NCDOT Research and Innovation Symposium 2025",
    },
    {
      images: ["wolfwagenFront.jpg", "wolfwagenBack.jpg"],
      caption: "Wolf Wagen Views",
    },
    {
      images: ["CrossfitClubImage.jpeg", "beachTrip.jpeg"],
      caption: "Crossfit Club Adventures",
    },
    {
      images: ["hikingTrip.jpeg", "murph2025.jpeg"],
      caption: `O great Nature! 
      With you I can sing a song only you decipher. 
      a song that rings the bell of life and death and existence. (What is Existence?)
      With you I hear the cry of a mother on her labour,
      and solemn happiness shine through a father, veiled in quiet perplexity.
      With you I experience ephemeral rejoice and tragic sorrow, grief and despair. \n
      And yet, with you I remain silence, 
      For in your breath, all meaning dissolves.
      `,
    },
    {
      images: ["murph2025.jpeg"],
      caption: `Murph 2025
      `,
    },
    {
      images: ["strangePerson.jpeg"],
      caption: `Theme:
I exist neither in the sky nor upon the earth.
You may see me walking; yet I am adrift, not moving at all.
You may see me lost in thought, but I am only fading in silence.
You may see me stranded in chaos and pain, yes, that is me, unseen and breaking.
You may see me dancing with the devil, yes, that is me, weary and surrendering.
You may hear me speak of love, yes, that is me, aching in the fire I cannot escape.`,
    },
    {
      images: ["oldManInCave.jpeg"],
      caption: ``
      // caption: `I'm scared of Old People. Does that mean I'm scared of death? 
      // There is no denial that death is the conclusion that we all yearn for, prepare for, yet we are scared. 
      // Is it because we don't want to leave this MAYA full of pleasure or is it because we have attached ourself with the world and now it's dear to us.
      // Life is full of pain and suffering and love and lust and pleasure and evil. Let me hold my horses. 
      // Let's try to make connecting why we are scared of death. Let's start through fundamental logic and connect. What is death? In scientific term, 
      // `,
    }
  ];

  const [selectedPost, setSelectedPost] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (post) => {
    setSelectedPost(post);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedPost(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (!selectedPost) return;
    setCurrentImageIndex((prev) => (prev + 1) % selectedPost.images.length);
  };

  const prevImage = () => {
    if (!selectedPost) return;
    setCurrentImageIndex(
      (prev) =>
        (prev - 1 + selectedPost.images.length) % selectedPost.images.length
    );
  };

  useEffect(() => {
    if (selectedPost) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [selectedPost]);

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Visuals</h1>

      {/* Grid Gallery */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {imageData.map((post, index) => (
          <div
            key={index}
            className="cursor-pointer group"
            onClick={() => openModal(post)}
          >
            <img
              src={post.images[0]} // first image as preview
              alt={`Post ${index + 1}`}
              className="w-full h-60 object-cover rounded-lg shadow-sm group-hover:opacity-80 transition duration-200"
            />
          </div>
        ))}
      </div>

      {selectedPost && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center px-4"
          onClick={closeModal} // background click
        >
          <div
            className="bg-white rounded-lg shadow-lg max-w-4xl w-full relative"
            onClick={(e) => e.stopPropagation()} // prevent close when clicking inside modal
          >
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-2xl font-bold z-10"
              onClick={closeModal}
              aria-label="Close"
            >
              &times;
            </button>

            {/* Image Carousel */}
            <div className="relative">
              <img
                src={selectedPost.images[currentImageIndex]}
                alt="Selected"
                className="w-full max-h-[80vh] object-contain rounded-t-lg"
              />

              {selectedPost.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-60 hover:bg-opacity-80 text-white p-2 rounded-full"
                    aria-label="Previous image"
                  >
                    ◀
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-60 hover:bg-opacity-80 text-white p-2 rounded-full"
                    aria-label="Next image"
                  >
                    ▶
                  </button>
                </>
              )}
            </div>

            <div className="p-4 text-center">
              <div className="text-lg font-medium whitespace-pre-line max-h-40 overflow-y-auto px-2 text-left">
                {selectedPost.caption}
              </div>

              {selectedPost.images.length > 1 && (
                <p className="text-sm text-gray-500">
                  Image {currentImageIndex + 1} of {selectedPost.images.length}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
