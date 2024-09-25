
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './assets/css/index.css'

createRoot(document.getElementById('root')).render(

    <App />

)

import React from 'react'

const Contact = () => {
  return (
    <div className='h-full w-full flex justify-center items-center text-black font-bold'>
      
      <h1 className='h-[100%] flex flex-col justify-center items-center'>
      Contact
        </h1></div>
  )
}

export default Contact