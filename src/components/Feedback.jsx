import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import './feedback.css';

const Feedback = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleFeedback = (type) => {
    setFeedback({ ...feedback, [type]: feedback[type] + 1 });
  };

  return (
    <div className="button_list">
      <button
        type="button"
        name="good"
        onClick={() => handleFeedback('good')}
        className="button">
        Good
      </button>
      <button
        type="button"
        name="neutral"
        onClick={() => handleFeedback('neutral')}
        className="button">
        Neutral
      </button>
      <button
        type="button"
        name="bad" onClick={() => handleFeedback('bad')}
        className="button">
        Bad
      </button>
    </div>
  );
};

export default Feedback;