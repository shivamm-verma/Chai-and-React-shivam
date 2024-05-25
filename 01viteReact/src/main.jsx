import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ShivamDamn from './Shivam.jsx'

// day3
const reactElement = React.createElement (
  "a",
  {href: "https://www.youtube.com", target:"_blank"},
  "Click to go to  YouTube"
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <ShivamDamn/>
    <reactElement/>
  </React.StrictMode>,
)
