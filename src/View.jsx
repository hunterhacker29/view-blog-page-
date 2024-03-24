import React, { useState } from 'react';
import { RiThumbUpLine } from 'react-icons/ri'; // Importing like button icon
import './view.css';

function View() {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  return (
    <div className="vlog-container">
      <div className="vlogger-info">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7l0FO6rvBvfooyPnpLPtPN32Vche4fC7BzQ&s" alt="Vlogger Photo" />
        <div>
          <h3>Elon Musk</h3>
          <p>2 days ago</p>
        </div>
        <button className={`like-button ${liked ? 'liked' : ''}`} onClick={handleLikeClick}>
          <RiThumbUpLine />
        </button>
      </div>
      <h1>Cybertron</h1>
      <div className="blog-image-container">
      <img className="blog-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROAdIzDgAGRhGIEY_SQa6eg2zbHp_B-JkRPg&s" alt="Vlog Image" />
      </div>
      <p className="blog-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum possimus accusantium impedit quas iusto quam. Perferendis, ipsa ipsum ex numquam exercitationem nulla porro ea error eaque in doloremque omnis fuga!
      </p>
      <div>
        <form id="comment-form">
          <h2>Leave a Comment</h2>
          <label htmlFor="comment">Comment:</label>
          <textarea id="comment" name="comment" rows="5" required></textarea>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="website">Website:</label>
          <input type="url" id="website" name="website" />
          <button type="submit" className="submit-button">Submit Comment</button>
        </form>
      </div>
    </div>
  );
}

export default View;
