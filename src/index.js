import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import 'tachyons'; //css styles



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// card is export default; only one item can be in root
// properties can be used multiple times (export from robots, that aren't default; need to destructure
// wrap in {} if JS within JSX

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// 
// 1st: create card for robo profile (Card.js)
// 2nd: add multiple cards
// 3rd: add properties to cards (to make dynamic)
// -> Export card in robots.js


// props - properties that keeps getting passed down (with pure functions/components) - never change
// state - description of app (object that describes application) and able to change (ex. search box, change what gets displayed)
// Props come from state. 
// Parent feeds state into child component (child becomes a property)
