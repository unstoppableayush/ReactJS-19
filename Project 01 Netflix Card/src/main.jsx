import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Profile from './Profile.jsx'
// import { Practices } from './Practices.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Practices/> */}
    <Profile/>
  </React.StrictMode>,
)
