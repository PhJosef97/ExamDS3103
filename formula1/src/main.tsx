import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

// Henter inn bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './bootstrap-with-modifed-colors.scss'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') !).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)