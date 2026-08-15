import React from "react";

function Timeline({ events }) {
  return (
    <div className="relative pl-6 border-l-2 border-custom-text-coolTeal">
      {events.map((event, index) => (
        <div key={index} className="mb-8 last:mb-0 relative">
          <div className="absolute -left-[29px] top-1 w-3.5 h-3.5 rounded-full bg-custom-text-coolTeal border-2 border-white shadow" />
          <div className="text-sm font-semibold text-custom-text-coolTeal mb-1">
            {event.date}
          </div>
          <div className="text-lg font-bold text-custom-text-charcoal">
            {event.title}
          </div>
          {event.description && (
            <p className="text-custom-text-darkGray mt-1">{event.description}</p>
          )}
          {event.link && (
            <a
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-custom-text-coolTeal underline mt-1 text-sm"
            >
              {event.linkLabel || event.link}
            </a>
          )}
        </div>
      ))}
    </div>
  );
}

export default Timeline;
