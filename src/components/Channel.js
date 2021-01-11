import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';

const Channel = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const db = firebase.firestore();
    const messagesRef = db.collection('messages');

    messagesRef
      .get()
      .then(querySnapshot => {
        // Get all documents from collection - with IDs
        const updatedMessages = querySnapshot.docs.map(doc => ({
          ...doc.data(),
          id: doc.id,
        }));
        // Update messages in state
        setMessages(updatedMessages);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <ul>
      {messages.map(message => (
        <li>{JSON.stringify(message)}</li>
      ))}
    </ul>
  );
};

export default Channel;
