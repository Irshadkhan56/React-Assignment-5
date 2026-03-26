import React, { useState } from "react";

const ProductLike = ({ name }) => {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(prev => prev + 1);
  };

  return (
    <div className="like-container">
      <h3>{name}</h3>
      <p className="like-count">❤️ Likes: {likes}</p>
      <button className="like-button" onClick={handleLike}>
        Like
      </button>
    </div>
  );
};

export default ProductLike;