import React from 'react';
import PlayerTable from './PlayersTable'; // Adjust the import path as needed
import { useQuery } from '@tanstack/react-query';
import Player from '../models/player';
import MatchInfo from './MatchInfo';
const Match = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['matchData'],
    queryFn: () =>
      fetch('http://localhost:3000/match').then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      }),
  });

  if (isLoading) {
    return (
      <div style={styles.loaderContainer}>
        <div className="spinner" style={styles.spinner} />
        <p className='text-blue-950 text-5xl'>Loading match data...</p>

        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg);}
            100% { transform: rotate(360deg);}
          }
            color:red
        `}</style>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ color: 'red', textAlign: 'center', padding: '20px', fontSize:'40px', margin:'auto' }}>
        Error loading match data: {error}
      </div>
    );
  }

  return (
    <>
    <MatchInfo data={data}/>
    <div style={styles.matchContainer}>
      
      {data.teams.map((team, index) => (
        <div 
          key={index} 
          style={{
            ...styles.teamContainer,
            ...(team.winner ? styles.winnerHighlight : {}),
          }}
        >
          <h2 style={styles.teamHeader}>Team {index + 1} {team.winner ? '🏆' : ''}</h2>
          <PlayerTable players={team.players.map(x => Player.fromJson(x))} />
        </div>
      ))}
    </div>
    </>
  );
};

const styles = {
  matchContainer: {
    
    display: 'flex',
    gap: '40px',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: '40px',
   
    minHeight: '100vh',
  },
  teamContainer: {
    background: 'radial-gradient(circle, #2a2a72, #1a1a40)',
    borderRadius: '20px',
    boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
    padding: '20px',
    minWidth: '500px',
    transition: 'transform 0.3s',
  },
  teamHeader: {
    color: 'white',
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  winnerHighlight: {
    border: '3px solid gold',
    transform: 'scale(1.05)',
    boxShadow: '0 0 30px gold',
  },
  loaderContainer: {
    textAlign: 'center',
    padding: '60px',
    color: 'white',
  },
  spinner: {

    margin:'auto',
    marginTop:'40vh',
    width: '80px',
    height: '80px',
    border: '20px solid #011433',
    borderTop: '20px solid #8B0000',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  }
};

export default Match;
