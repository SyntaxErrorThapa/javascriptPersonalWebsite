import React from "react";
import { Link } from "react-router-dom";
import SkillBox from "../SkillsComponent/SkillBox";

function stripHtml(html) {
  return html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

function FeaturedProjectCard({ slug, imagePath, title, sk1, sk2, sk3, description }) {
  const preview = stripHtml(description);
  const truncated = preview.length > 220 ? `${preview.slice(0, 220)}…` : preview;

  return (
    <Link
      to={`/projects/${slug}`}
      className="group flex flex-col bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-gray-100"
    >
      <div className="h-56 overflow-hidden relative">
        {imagePath ? (
          <img
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            src={`${process.env.PUBLIC_URL}/${imagePath}`}
            alt={title}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-custom-text-coolTeal to-custom-text-navyBlue text-white text-lg font-semibold px-4 text-center">
            {title}
          </div>
        )}
        <div className="absolute top-3 left-3 bg-custom-text-coolTeal text-white text-xs font-bold uppercase tracking-wide py-1 px-3 rounded-full shadow">
          Featured
        </div>
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-2xl font-bold text-custom-text-charcoal mb-2">{title}</h3>
        <p className="text-custom-text-darkGray text-sm mb-4 flex-grow">{truncated}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          <SkillBox skillName={sk1} />
          <SkillBox skillName={sk2} />
          <SkillBox skillName={sk3} />
        </div>
        <span className="inline-block text-custom-text-coolTeal font-semibold group-hover:underline">
          View Project →
        </span>
      </div>
    </Link>
  );
}

export default FeaturedProjectCard;
