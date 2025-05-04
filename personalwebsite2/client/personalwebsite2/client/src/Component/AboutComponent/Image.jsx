import React from "react";
import RoughHighlight from "../RoughHighlight";

const imageList = [
  
  "Picture in car.jpeg",
  "image_me.jpg",
  "GrandFather Mountain.jpeg",
  "Hiking Trip.jpeg",
  "Training.jpeg",
  "CrossfitClubImage.jpeg", // Replace with your actual image paths,
];

function Image() {
  return (
    <>
      <div className="relative w-screen mx-auto bg-custom-bg-image min-h-screen px-4 text-custom-text-darkGray flex items-center justify-center">
        <div className="container flex flex-col max-w-5xl mx-auto py-16">
          {/* Image section */}
          <div className="justify-center flex flex-col items-center">
            <div className="text-4xl font-extrabold tracking-widest mb-8">
              <RoughHighlight>gallery</RoughHighlight>
            </div>

            {/* Aesthetic Image Layout */}
            <div
              className="relative grid grid-cols-12 gap-4"
              style={{ gridTemplateRows: "repeat(3, 150px)", gridAutoFlow: "dense" }}
            >
              {/* Image placements with varying sizes */}
              <div
                className="col-span-4 row-span-2 overflow-hidden hover:scale-105 transform transition duration-300 ease-in-out"
              >
                <img
                  src={imageList[0]}
                  alt="Gallery Image 1"
                  className="object-cover w-full h-full"
                />
              </div>
              <div
                className="col-span-3 row-span-1 overflow-hidden hover:scale-105 transform transition duration-300 ease-in-out"
              >
                <img
                  src={imageList[1]}
                  alt="Gallery Image 2"
                  className="object-cover w-full h-full"
                />
              </div>
              <div
                className="col-span-5 row-span-3 overflow-hidden hover:scale-105 transform transition duration-300 ease-in-out"
              >
                <img
                  src={imageList[2]}
                  alt="Gallery Image 3"
                  className="object-cover w-full h-full"
                />
              </div>
              <div
                className="col-span-4 row-span-2 overflow-hidden hover:scale-105 transform transition duration-300 ease-in-out"
              >
                <img
                  src={imageList[3]}
                  alt="Gallery Image 4"
                  className="object-cover w-full h-full"
                />
              </div>
              <div
                className="col-span-3 row-span-2 overflow-hidden hover:scale-105 transform transition duration-300 ease-in-out"
              >
                <img
                  src={imageList[4]}
                  alt="Gallery Image 5"
                  className="object-cover w-full h-full"
                />
              </div>
              <div
                className="col-span-7 row-span-1 overflow-hidden hover:scale-105 transform transition duration-300 ease-in-out"
              >
                <img
                  src={imageList[5]}
                  alt="Gallery Image 6"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Image;
