import React, { useState } from 'react';
import firebase from 'firebase/app';
import { useFirestoreQuery } from '../hooks';
// Components
import Message from './Message';

const Channel = () => {
  const db = firebase.firestore();
  const messagesRef = db.collection('messages');
  const messages = useFirestoreQuery(
    messagesRef.orderBy('createdAt').limit(25)
  );

  const [newMessage, setNewMessage] = useState('');

  const handleOnChange = e => {
    setNewMessage(e.target.value);
  };

  const handleOnSubmit = e => {
    e.preventDefault();

    const trimmedMessage = newMessage.trim();
    if (trimmedMessage) {
      // Add new message in Firestore
      messagesRef.add({
        text: trimmedMessage,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
      // Clear input field
      setNewMessage('');
    }
  };

  return (
    <>
      <div className="overflow-auto h-full">
        <ul className="max-w-screen-lg mx-auto">
          {messages?.map(message => (
            <li key={message.uid}>
              <Message {...message} />
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-6 mx-4">
        <form
          onSubmit={handleOnSubmit}
          className="flex flex-row bg-gray-200 rounded-md px-4 py-3 z-10 max-w-screen-lg mx-auto"
        >
          <input
            type="text"
            value={newMessage}
            onChange={handleOnChange}
            placeholder="Type your message here..."
            className="flex-1 bg-transparent outline-none"
          />
          <button
            type="submit"
            disabled={!newMessage}
            className="uppercase font-semibold text-sm tracking-wider text-gray-500 hover:text-gray-900 transition-colors"
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default Channel;
