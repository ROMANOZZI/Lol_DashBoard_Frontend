import { useState } from 'react'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import AppBar from './components/AppBar.jsx'
import Match from './components/Match.jsx'
 import PlayerDetails from './components/PlayerDetails.jsx';
function App() {
  const queryClient = new QueryClient();
  return (
    
      <QueryClientProvider client={queryClient}>
         <AppBar />
          
          <Routes>
            <Route path="/" element={<Match />} />
             <Route path="/MVP" element={<PlayerDetails/>} />
          </Routes>
      </QueryClientProvider>
     
  
  )
}


export default App
