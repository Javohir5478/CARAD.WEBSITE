import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "antd/dist/reset.css"
import StoreProvider from './reducer/store/index.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <StoreProvider >
    <App />
    </StoreProvider>
  </React.StrictMode>,
)
