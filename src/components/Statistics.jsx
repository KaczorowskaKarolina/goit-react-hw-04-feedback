import React from 'react';
import PropTypes from 'prop-types';
import './statistics.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul className="stats">
    <StatItem label="Good" value={good} />
    <StatItem label="Neutral" value={neutral} />
    <StatItem label="Bad" value={bad} />
    <StatItem label="Total" value={total} />
    <StatItem label="Positive feedback" value={`${positivePercentage}%`} />
  </ul>
);

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

const StatItem = ({ label, value }) => (
  <li>
    {label}: {value}
  </li>
);

StatItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default Statistics;
