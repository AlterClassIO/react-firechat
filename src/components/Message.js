import React from 'react';
import PropTypes from 'prop-types';
import { formatRelative } from 'date-fns';

const formatDate = date => {
  let formattedDate = '';
  if (date) {
    // Convert the date in words relative to the current date
    formattedDate = formatRelative(date, new Date());
    // Uppercase the first letter
    formattedDate =
      formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  }
  return formattedDate;
};

const Message = ({ createdAt = null, text = '' }) => {
  if (!text) return null;

  return (
    <div className="px-4 py-4 hover:bg-gray-50 dark:hover:bg-coolDark-600">
      {createdAt?.seconds ? (
        <span className="text-gray-500 text-sm">
          {formatDate(new Date(createdAt.seconds * 1000))}
        </span>
      ) : null}
      <p>{text}</p>
    </div>
  );
};

Message.propTypes = {
  text: PropTypes.string,
  createdAt: PropTypes.shape({
    seconds: PropTypes.number,
  }),
};

export default Message;
