import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';
import reportWebVitals from './reportWebVitals';
import Message from './Message/Message';
import Counter from './Counter/Counter';
import Apple from './Apple/Apple';
import PetProcessing from './PetProcessing/PetProcessing';
import DogCard from './DogCard/DogCard';
import DataComponent from './DataComponent/DataComponent';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  //<React.StrictMode>
    <>
      <DataComponent />
      <Apple />
      <App />
      <Message />
      <Counter />
      <PetProcessing />
      <DogCard/>
    </>
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
