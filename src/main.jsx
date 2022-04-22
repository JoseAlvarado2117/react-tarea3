import React from 'react'
import ReactDOM from 'react-dom/client'

// añadnimos Bootstrap a nuetro proyecto
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

// ! Importante los estulos propios deben ir debajo de bootstrap
import './index.css'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
