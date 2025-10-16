import React from 'react';
import './PostEvaluation.css';

const PostEvaluation = () => {
  return (
    <section className="posteval-section section">
      <div className="posteval-container">
        <h2 className="section-title">We Value Your Feedback</h2>
        <p className="posteval-message">
          Thank you for joining the summit! Your feedback matters to us. Kindly share your thoughts by filling out our post-summit evaluation survey.
        </p>
        <div className="buttons-container">
          <a 
            href="https://forms.gle/jDF7rF9XAXEb9uHNA" 
            target="_blank" 
            rel="noopener noreferrer"
            className="posteval-button summit-button"
          >
            Fill Out Evaluation Form
          </a>
        </div>
      </div>
    </section>
  );
};

export default PostEvaluation;
