import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { createMemoryHistory } from 'history';


const history = createMemoryHistory();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router location={history.location} navigator={history}>
        <App />
    </Router>
);


