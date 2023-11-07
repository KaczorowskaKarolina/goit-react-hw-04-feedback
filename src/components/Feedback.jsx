import React from 'react';
import PropTypes from 'prop-types';
import './feedback.css';

const Feedback = ({ onLeaveFeedback }) => {
  const handleFeedback = (feedbackType) => {
    onLeaveFeedback({ target: { name: feedbackType } }); // Symulacja poprawnego obiektu zdarzenia
  };

  return (
    <div className="button_list">
      <button type="button" onClick={() => handleFeedback('good')} className="button">
        Good
      </button>
      <button type="button" onClick={() => handleFeedback('neutral')} className="button">
        Neutral
      </button>
      <button type="button" onClick={() => handleFeedback('bad')} className="button">
        Bad
      </button>
    </div>
  );
};

Feedback.propTypes = {
  onLeaveFeedback: PropTypes.func,
};

export default Feedback;
