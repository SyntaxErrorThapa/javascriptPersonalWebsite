import React, { useState, useEffect } from "react";
import BlogCard from "./BlogCard";

function BlogPage() {
  const [blogData, setBlogData] = useState({ blogs: [] });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogDate() {
      try {
        const response = await fetch(`${process.env.PUBLIC_URL}/Blog.json`);
        const data = await response.json();
        setBlogData(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error loading the JSON file:", error);
        setIsLoading(false);
      }
    }

    fetchBlogDate();
  }, []);
  if (isLoading)
    return <div className="text-center py-16">Loading blogs...</div>;

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
            {blogData.blogs.map((blog) => (
              <BlogCard
                key={blog.id}
                id={blog.id}
                title={blog.title}
                subtitle={blog.subtitle}
                date={blog.date}
                paragraph={blog.paragraphs || blog.paragraph}
                image={blog.image}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogPage;
