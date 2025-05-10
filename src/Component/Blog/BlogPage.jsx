import React from "react";
import BlogCard from "./BlogCard";

function BlogPage() {
  return (
    <>
      <div className="bg-gray-50 py-16">
        {/* Section heading with underline */}
        <div className="container mx-auto mb-12">
          <h2 className="text-4xl font-extrabold text-center text-custom-text-charcoal">
            Blog
          </h2>
          <div className="w-24 h-1 bg-custom-text-coolTeal mx-auto mt-4"></div>
        </div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogPage;
