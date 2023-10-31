import PropTypes from 'prop-types';
import css from './feedback.css';

export const Feedback = ({ onLeaveFeedback }) => (
  <div className={css.button_list}>
    <button
      type="button"
      name="good"
      onClick={onLeaveFeedback}
      className={css.button}
    >
      Good
    </button>
    <button
      type="button"
      name="neutral"
      onClick={onLeaveFeedback}
      className={css.button}
    >
      Neutral
    </button>
    <button
      type="button"
      name="bad"
      onClick={onLeaveFeedback}
      className={css.button}
    >
      Bad
    </button>
  </div>
);

Feedback.propTypes = {
  onLeaveFeedback: PropTypes.func,
};