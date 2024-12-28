import React from 'react';
import ReactDOM from 'react-dom/client';
import { setupIonicReact } from '@ionic/react';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

setupIonicReact({
  mode: 'md'
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);

serviceWorkerRegistration.unregister();

reportWebVitals();