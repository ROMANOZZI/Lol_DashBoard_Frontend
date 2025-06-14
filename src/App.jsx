import { useState } from 'react'
import {
  QueryClient,
  QueryClientProvider,
  
} from '@tanstack/react-query'
import{Routes} from 'react-router';
import './App.css'
import AppBar from './components/AppBar.jsx'
import Match from './components/Match.jsx'
function App() {
  const queryClient = new QueryClient();
  return (
    
      <QueryClientProvider client={queryClient}>
         <AppBar />
          <Match />
      </QueryClientProvider>
     
  
  )
}


export default App
