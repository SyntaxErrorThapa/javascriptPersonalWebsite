import React from "react";

function InlineMedia({ items, startIndex, onSelect }) {
  const gridCols =
    items.length === 1
      ? "grid-cols-1"
      : items.length === 2
      ? "grid-cols-1 sm:grid-cols-2"
      : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3";

  return (
    <div className={`grid ${gridCols} gap-6 my-8`}>
      {items.map((item, i) => (
        <figure key={i} className="m-0">
          <button
            type="button"
            className="block w-full rounded-lg overflow-hidden shadow-md group cursor-pointer"
            onClick={() => onSelect(startIndex + i)}
          >
            {item.type === "video" ? (
              <video
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                src={`${process.env.PUBLIC_URL}/${item.src}`}
                autoPlay
                muted
                loop
                playsInline
              />
            ) : item.fit === "contain" ? (
              <img
                className="w-full h-auto object-contain bg-white"
                src={`${process.env.PUBLIC_URL}/${item.src}`}
                alt={item.caption || ""}
              />
            ) : (
              <img
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                src={`${process.env.PUBLIC_URL}/${item.src}`}
                alt={item.caption || ""}
              />
            )}
          </button>
          {item.caption && (
            <figcaption className="mt-2 text-sm text-custom-text-darkGray text-center">
              {item.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}

export default InlineMedia;
