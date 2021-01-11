// Firebase deps
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
// Components
import Channel from './components/Channel';

firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_AUTH_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
});

function App() {
  return (
    <div className="flex flex-col h-full">
      <header
        className="flex-shrink-0 text-center border-b border-b-700"
        style={{ height: 'var(--topbar-height)' }}
      >
        <h1
          className="font-semibold text-lg truncate"
          style={{ lineHeight: 'var(--topbar-height)' }}
        >
          React FireChat by AlterClass
        </h1>
      </header>
      <main
        className="flex-1 flex flex-col"
        style={{ maxHeight: 'calc(100% - var(--topbar-height))' }}
      >
        <Channel />
      </main>
    </div>
  );
}

export default App;
