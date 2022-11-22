import PropTypes from 'prop-types';
import css from './VoteButton.module.css';

export const VoteButton = ({ name, onLeaveFeedback }) => {
  return (
    <button className={css[name]} name={name} onClick={onLeaveFeedback}>
      {name}
    </button>
  );
};

VoteButton.propTypes = {
  name: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};