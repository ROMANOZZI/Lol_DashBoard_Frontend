import React from 'react';
import { useLocation } from 'react-router-dom';
export default function PlayerDetails() {
    const location = useLocation();
    const { player } = location.state;
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.playerName}>{player.name}</h1>
        <h3 style={styles.championName}>{player.championName}</h3>

        <div style={styles.statsGrid}>
          <StatItem label="Team ID" value={player.teamId} />
          <StatItem label="Kills" value={player.kills} />
          <StatItem label="Deaths" value={player.deaths} />
          <StatItem label="Assists" value={player.assists} />
          <StatItem label="K/D/A" value={`${player.kills}/${player.deaths}/${player.assists}`} />
          <StatItem label="Kill Participation" value={`${player.killParticipation}%`} />
          <StatItem label="Total Damage" value={player.totalDamageDealtToChampions} />
    
        </div>
      </div>
    </div>
  );
}

const StatItem = ({ label, value }) => (
  <div style={styles.statItem}>
    <div style={styles.label}>{label}</div>
    <div style={styles.value}>{value}</div>
  </div>
);

const styles = {
  container: {
    minHeight: '100vh',
    background: 'radial-gradient(circle, #1a1a40, #0a0a20)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px',
  },
  card: {
    background: 'radial-gradient(circle, #2a2a72, #1a1a40)',
    borderRadius: '20px',
    padding: '40px',
    boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
    maxWidth: '700px',
    width: '100%',
    color: 'white',
  },
  playerName: {
    fontSize: '32px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '10px',
  },
  championName: {
    fontSize: '22px',
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: '30px',
    color: '#ffcc00',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
  },
  statItem: {
    background: 'rgba(255, 255, 255, 0.05)',
    padding: '20px',
    borderRadius: '15px',
    boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
    textAlign: 'center',
  },
  label: {
    fontSize: '14px',
    color: '#cccccc',
    marginBottom: '10px',
  },
  value: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#ffffff',
  },
};
