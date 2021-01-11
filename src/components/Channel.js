import React from 'react';
import firebase from 'firebase/app';
import { useFirestoreQuery } from '../hooks';

const Channel = () => {
  const messages = useFirestoreQuery(
    firebase.firestore().collection('messages')
  );

  return (
    <ul>
      {messages?.map(message => (
        <li key={message.uid}>{JSON.stringify(message)}</li>
      ))}
    </ul>
  );
};

export default Channel;
