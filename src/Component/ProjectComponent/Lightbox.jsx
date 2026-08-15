import React, { useEffect } from "react";

function Lightbox({ media, selectedIndex, onClose, onNext, onPrev }) {
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [selectedIndex]);

  if (selectedIndex === null) return null;
  const selected = media[selectedIndex];
  if (!selected) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center px-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-lg max-w-4xl w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-2xl font-bold z-10"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>

        <div className="relative bg-black">
          {selected.type === "video" ? (
            <video
              key={selected.src}
              className="w-full max-h-[80vh]"
              src={`${process.env.PUBLIC_URL}/${selected.src}`}
              controls
              autoPlay
              playsInline
            />
          ) : (
            <img
              className="w-full max-h-[80vh] object-contain"
              src={`${process.env.PUBLIC_URL}/${selected.src}`}
              alt={selected.caption || ""}
            />
          )}

          {media.length > 1 && (
            <>
              <button
                onClick={onPrev}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-60 hover:bg-opacity-80 text-white p-2 rounded-full"
                aria-label="Previous media"
              >
                ◀
              </button>
              <button
                onClick={onNext}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-60 hover:bg-opacity-80 text-white p-2 rounded-full"
                aria-label="Next media"
              >
                ▶
              </button>
            </>
          )}
        </div>

        {(selected.caption || media.length > 1) && (
          <div className="p-4 text-center">
            {selected.caption && (
              <div className="text-base font-medium">{selected.caption}</div>
            )}
            {media.length > 1 && (
              <p className="text-sm text-gray-500 mt-1">
                {selectedIndex + 1} of {media.length}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Lightbox;
