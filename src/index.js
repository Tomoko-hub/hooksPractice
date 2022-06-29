import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const shareInfo = {
  name: "Tomoko",
  age: 42,
};

const ShareInfoContext = createContext(shareInfo);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ShareInfoContext.Provider value={shareInfo}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ShareInfoContext.Provider>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default ShareInfoContext;
