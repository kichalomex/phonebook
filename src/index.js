import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/Apps';

const persons = [{ 'name': 'Arto Hellas', 'number': '040-1234567'}]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App persons={persons}/>
  </React.StrictMode>
);

