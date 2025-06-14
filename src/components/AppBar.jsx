import React from 'react'

export default function AppBar() {
  return (
    <nav className="bg-white text-black px-10 py-4  flex items-center justify-between shadow-2xl  rounded-b-xl
   
    w-full
    mb-2
    ">
      <div className="flex items-center items-end">
      <h1 className="text-3xl text-red-500 font-bold  ">
        <img src="https://arabhardware.net/theme-assets/images/logo.svg" alt="Logo" className="inline-block mr-2 h-22" />

  
      </h1>
      <span className="text-2xl  text-blue-950 font-bold align-bottoms">
        Esports
      </span>
      </div>
    </nav>
  )
}
