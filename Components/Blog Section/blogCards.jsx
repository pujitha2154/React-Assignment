import React from "react";
import './blogpost.css';
const BlogCards = () => {
  const blogPosts = [
    {
      category: "Design",
      title: "UX review presentations",
      description: "How do you create compelling presentations that wow your colleagues and impress your managers?",
      author: "Olivia Rhye",
      date: "20 Jan 2024",
      imageUrl: "src/assets/UVReview.png",
      avatarUrl: "src/assets/image2.png",
    },
    {
      category: "Product",
      title: "Migrating to Linear 101",
      description:
        "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
      author: "Phoenix Baker",
      date: "19 Jan 2024",
      imageUrl: "src/assets/linear.png",
      avatarUrl: "src/assets/Phoenix.png", 
    },
    {
      category: "Software Engineering",
      title: "Building your API stack",
      description:
        "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
      author: "Lana Steiner",
      date: "18 Jan 2024",
      imageUrl: "src/assets/apistack.png",
      avatarUrl: "src/assets/Lana.png", 
    },
  ];

  return (
    <div className="blog-cards-container">
      {blogPosts.map((post, index) => (
        <div className="blog-card" key={index}>
          <div
            className="blog-image"
            style={{ backgroundImage: `url(${post.imageUrl})` }}
          ></div>
          <div className="blog-content">
            <p className="blog-category">{post.category}</p>
            <h1 className="blog-title">
              {post.title} <span className="arrow">→</span>
            </h1>
            <p className="blog-description">{post.description}</p>
            <div className="blog-meta">
              <img
                className="author-avatar"
                src={post.avatarUrl}
                alt={`${post.author}'s avatar`}
              />
              <div>
                <h6 className="author-name">{post.author}</h6>
                <p className="post-date">{post.date}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCards;
