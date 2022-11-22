import PropTypes from 'prop-types';

export const Notification = ({ message }) => message;

Notification.propTypes = PropTypes.string.isRequired;