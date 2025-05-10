import React, { useState } from "react";
import { Link } from "react-router-dom";

function BlogCard({ id, image, date, title, subtitle, paragraph }) {
  const [pageOpen, setPageOpen] = useState(false);

  return (
    <Link to={`/blog/${id}`} className="block no-underline text-inherit">
      <div className="max-w-sm bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
        {/* Card Image */}
        <div className="h-40 overflow-hidden">
          <img className="w-full h-full object-cover" src={image} alt={image} />
        </div>

        {/* Card Content */}
        <div className="p-5">
          <h2 className="text-xl font-bold mb-2 text-custom-text-charcoal">
            {title}
          </h2>
          <p className="text-custom-text-darkGray text-sm mb-4">{subtitle || date}</p>

          {/* Action Button */}
          <div className="pt-2 pb-1">
            <button className="text-sm text-custom-text-coolTeal font-medium hover:text-teal-700 transition-colors">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
