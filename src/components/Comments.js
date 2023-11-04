// Comments.js
import React, { useState, useEffect } from 'react';
import './Comments.css';

const Comments = () => {
  const [comments, setComments] = useState(() => {
    const savedComments = JSON.parse(localStorage.getItem('comments'));
    return savedComments || [
      { id: 1, text: 'This is a comment', likes: 0, replies: [] },
      // Add more comments as needed
    ];
  });

  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments));
  }, [comments]);

  const [selectedEmoji, setSelectedEmoji] = useState(null);

  const handleEmojiClick = (emoji) => {
    setSelectedEmoji(emoji);
  };

  const handleLike = (id) => {
    const updatedComments = comments.map(comment => {
      if (comment.id === id) {
        return { ...comment, likes: comment.likes + 1 };
      }
      return comment;
    });
    setComments(updatedComments);
  };

  const handleReply = (id, replyText) => {
    const updatedComments = comments.map(comment => {
      if (comment.id === id) {
        return { ...comment, replies: [...comment.replies, replyText] };
      }
      return comment;
    });
    setComments(updatedComments);
  };

  return (
    <div className="comments-container">
      <h3>Comments</h3>
      <div className="emoji-picker">
        <span>Emoji Picker:</span>
        <button className="emoji-btn" onClick={() => handleEmojiClick('👍')}>👍</button>
        <button className="emoji-btn" onClick={() => handleEmojiClick('❤️')}>❤️</button>
        <button className="emoji-btn" onClick={() => handleEmojiClick('😊')}>😊</button>
        <button className="like-btn" onClick={() => handleLike(comments[0].id)}>Like</button>
      </div>
      {selectedEmoji && <div className="selected-emoji">Selected Emoji: {selectedEmoji}</div>}
      {comments.map(comment => (
        <div key={comment.id} className="comment">
          <p>{comment.text}</p>
          <p>Likes: {comment.likes}</p>
          <button className="like-btn" onClick={() => handleLike(comment.id)}>Like</button>
          <div>
            {comment.replies.map((reply, index) => (
              <div key={index} className="reply">
                <p>{reply}</p>
              </div>
            ))}
          </div>
          <input
            type="text"
            placeholder="Reply..."
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleReply(comment.id, e.target.value);
                e.target.value = '';
              }
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default Comments;

