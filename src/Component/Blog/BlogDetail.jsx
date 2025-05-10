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
      {/* Back link with teal color matching your navbar */}
      {/* <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-3">
          <Link
            to="/blog"
            className="inline-block text-custom-text-coolTeal hover:text-teal-700 transition-colors"
          >
            ← Back to Blogs
          </Link>
        </div>
      </div> */}

      {/* Blog Hero Banner - Full Width with better positioning & zoom level */}
      <div className="w-full h-80 md:h-[40vh] lg:h-[50vh] bg-gray-900 relative overflow-hidden">
        <img
          className="w-full h-full object-cover object-center scale-125 opacity-90"
          src={blog.mainimage || "blog-default-banner.jpg"}
          alt=""
          style={{ transform: "scale(1)", objectPosition: "60% 10%" }}
        />
        {/* Title centered in the image with blog title styling from reference */}
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3">
              {blog.title}
            </h1>
            <div className="text-sm md:text-base font-medium">
              {blog.date} • Blog Post
            </div>
          </div>
        </div>
      </div>

      {/* Blog Content Container */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Blog subtitle styled like the reference */}
          {blog.subtitle && (
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              {blog.subtitle}
            </p>
          )}

          {/* Secondary image below subtitle */}
          {blog.secondaryImage && (
            <div className="mb-8">
              <img
                className="w-full rounded-md"
                src={blog.secondaryImage}
                alt=""
              />
              {blog.imageCaption && (
                <p className="text-sm text-gray-500 text-center mt-2">
                  {blog.imageCaption}
                </p>
              )}
            </div>
          )}

          {/* Blog Content */}
          <div className="prose prose-lg max-w-none">
            {Array.isArray(blog.paragraphs) ? (
              blog.paragraphs.map((paragraph, index) => (
                <div
                  key={index}
                  className="mb-8 text-gray-800 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))
            ) : (
              <p className="mb-6 text-gray-800 leading-relaxed">
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
