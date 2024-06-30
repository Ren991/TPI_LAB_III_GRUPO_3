import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { AuthProvider } from './Components/Context/AuthContext';
import { UserProvider } from './Components/AuthContext/AuthContext.jsx';
import { MoviesProvider } from './Components/MovieContext/MovieContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    
    <App />
  </React.StrictMode>


)
