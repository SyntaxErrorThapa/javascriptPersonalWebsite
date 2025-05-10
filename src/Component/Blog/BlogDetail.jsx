import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogDetail() {
      try {
        const response = await fetch("/Blog.json");
        const data = await response.json();
        const foundBlog = data.blogs.find((blog) => blog.id === parseInt(id));
        setBlog(foundBlog);
        setIsLoading(false);
      } catch (error) {
        console.log(`Error in BlogDetail`, error);
        setIsLoading(false);
      }
    }

    fetchBlogDetail();
  }, [id]);

  if (isLoading)
    return <div className="text-center py-16">Loading blog...</div>;
  if (!blog) return <div className="text-center py-16">Blog not found</div>;

  return (
    <>
      {/* Navigation bar is already in your App.js */}
      
      {/* Main content */}
      <div className="bg-white min-h-screen">
        {/* Back link */}
        <div className="container mx-auto px-4 pt-8">
          <Link
            to="/blog"
            className="inline-block text-custom-text-coolTeal hover:text-teal-700 transition-colors"
          >
            ← Back to Blogs
          </Link>
        </div>

        {/* Blog Image Banner */}
        <div className="w-full overflow-hidden mt-6">
          <img
            className="w-full h-64 md:h-96 object-cover"
            src={blog.mainimage || "default-banner.jpg"}
            alt={blog.title}
          />
        </div>

        {/* Blog Content Container */}
        <div className="container mx-auto px-4 py-8">
          {/* Blog Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-custom-text-charcoal">
              {blog.title}
            </h1>
            <p className="text-custom-text-darkGray mt-2">
              {blog.date}
            </p>
            {blog.subtitle && (
              <p className="text-lg text-custom-text-darkGray mt-4">
                {blog.subtitle}
              </p>
            )}
          </div>

          {/* Blog Content */}
          <div className="bg-white rounded-lg mb-12">
            {Array.isArray(blog.paragraphs) ? (
              blog.paragraphs.map((paragraph, index) => (
                <p key={index} className="mb-6 text-custom-text-charcoal leading-relaxed">
                  {paragraph}
                </p>
              ))
            ) : (
              <p className="mb-6 text-custom-text-charcoal leading-relaxed">
                {blog.paragraph || "No content available."}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogDetail;