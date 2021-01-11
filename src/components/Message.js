import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

const Message = ({ createdAt = null, text = '' }) => {
  if (!text) return null;

  return (
    <div className="px-4 pt-4 pb-6 hover:bg-gray-50">
      {createdAt?.seconds ? (
        <span className="text-gray-500 text-sm">
          {format(new Date(createdAt.seconds), 'MM/dd/yyyy')}
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
