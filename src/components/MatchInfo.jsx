import React from 'react'

export default function MatchInfo({data}) {
  return (
     <section className='flex items-center w-full 
      my-6
      flex-col
     '>
        <h2 className='text-blue-950 text-4xl font-bold'>

            {data.gameMode +" Match" }
        </h2>
        <div className='flex  flex-col'>
        <h3 className='text-lg'>
            <span
            className='text-red-800 font-bold text-2xl'
            >Game:</span>{"   "+data.gameName}
        </h3>
             <h3 className='text-lg'>
            <span
            className='text-red-800 font-bold text-2xl'
            >Duration:</span>{"   "+data.gameDuration}
        </h3>
        <h3 className='text-lg'>
            <span
            className='text-red-800 font-bold text-2xl'
            >Created at:</span>{"   "+data.gameCreation}
        </h3>
        </div>

     </section>
  )
}
