import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';

const Channel = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const db = firebase.firestore();
    const messagesRef = db.collection('messages');

    const unsubscribe = messagesRef.onSnapshot(querySnapshot => {
      // Get all documents from collection - with IDs
      const updatedMessages = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        uid: doc.id,
      }));
      // Update messages in state
      setMessages(updatedMessages);
    });

    return unsubscribe;
  }, []);

  return (
    <ul>
      {messages?.map(message => (
        <li key={message.uid}>{JSON.stringify(message)}</li>
      ))}
    </ul>
  );
};

export default Channel;
