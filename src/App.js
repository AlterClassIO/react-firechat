import React, { useState } from 'react';
// Firebase deps
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
// Components
import Channel from './components/Channel';
import ThemeIcon from './components/ThemeIcon';

firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_AUTH_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
});

function App() {
  const [user, setUser] = useState(null);

  const signInWithGoogle = async () => {
    // Retrieve Google provider object
    const provider = new firebase.auth.GoogleAuthProvider();
    // Set language to the default browser preference
    firebase.auth().useDeviceLanguage();
    // Start sign in process
    try {
      const result = await firebase.auth().signInWithPopup(provider);
      setUser(result.user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex flex-col h-full bg-white dark:bg-coolDark-500 dark:text-white transition-colors">
      <header
        className="flex-shrink-0 flex items-center justify-between px-8 shadow-md"
        style={{ height: 'var(--topbar-height)' }}
      >
        <h1
          className="font-medium text-lg truncate"
          style={{ lineHeight: 'var(--topbar-height)' }}
        >
          React FireChat
        </h1>
        <ThemeIcon />
      </header>
      <main
        className="flex-1 flex flex-col"
        style={{ maxHeight: 'calc(100% - var(--topbar-height))' }}
      >
        {user ? (
          <Channel user={user} />
        ) : (
          <button onClick={signInWithGoogle} className="rounded-md">
            Sign in
          </button>
        )}
      </main>
    </div>
  );
}

export default App;
