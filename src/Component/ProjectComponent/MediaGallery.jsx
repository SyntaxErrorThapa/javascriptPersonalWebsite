import React, { useState } from "react";
import Lightbox from "./Lightbox";

function MediaGallery({ media }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {media.map((item, index) => (
          <button
            key={index}
            type="button"
            className="relative h-40 rounded-lg overflow-hidden shadow-sm group cursor-pointer"
            onClick={() => setSelectedIndex(index)}
          >
            {item.type === "video" ? (
              <>
                <video
                  className="w-full h-full object-cover group-hover:opacity-80 transition duration-200"
                  src={`${process.env.PUBLIC_URL}/${item.src}`}
                  muted
                  playsInline
                  preload="metadata"
                />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="w-10 h-10 rounded-full bg-black bg-opacity-50 flex items-center justify-center text-white text-lg">
                    ▶
                  </span>
                </span>
              </>
            ) : (
              <img
                className="w-full h-full object-cover group-hover:opacity-80 transition duration-200"
                src={`${process.env.PUBLIC_URL}/${item.src}`}
                alt={item.caption || ""}
              />
            )}
          </button>
        ))}
      </div>

      <Lightbox
        media={media}
        selectedIndex={selectedIndex}
        onClose={() => setSelectedIndex(null)}
        onNext={() => setSelectedIndex((prev) => (prev + 1) % media.length)}
        onPrev={() =>
          setSelectedIndex((prev) => (prev - 1 + media.length) % media.length)
        }
      />
    </>
  );
}

export default MediaGallery;
