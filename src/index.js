import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/Apps';

const persons = [{ 'name': 'Arto Hellas'}]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App persons={persons}/>
  </React.StrictMode>
);

