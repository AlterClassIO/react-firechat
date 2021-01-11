import React, { useState } from 'react';
import firebase from 'firebase/app';
import { useFirestoreQuery } from '../hooks';

const Channel = () => {
  const db = firebase.firestore();
  const messagesRef = db.collection('messages');
  const messages = useFirestoreQuery(messagesRef);

  const [newMessage, setNewMessage] = useState('');

  const handleOnChange = e => {
    setNewMessage(e.target.value);
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    // Add new message in Firestore
    messagesRef.add({
      text: newMessage,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    // Clear input field
    setNewMessage('');
  };

  return (
    <div>
      <ul>
        {messages?.map(message => (
          <li key={message.uid}>{JSON.stringify(message)}</li>
        ))}
      </ul>
      <form onSubmit={handleOnSubmit}>
        <input type="text" value={newMessage} onChange={handleOnChange} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Channel;
