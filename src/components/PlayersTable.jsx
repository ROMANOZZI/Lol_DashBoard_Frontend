import React from 'react';

const PlayerTable = ({ players }) => {
  return (
    <div style={styles.container}>
      <table style={styles.table}>
        <thead>
          <tr>
           
            <th style={styles.header}>Name</th>
            <th style={styles.header}>Champion Name</th>
            <th style={styles.header}>Team ID</th>
            <th style={styles.header}>Kills</th>
            <th style={styles.header}>Deaths</th>
            <th style={styles.header}>Assists</th>
            <th style={styles.header}>Total Damage Dealt</th>
            <th style={styles.header}>Kill Participation</th>
          </tr>
        </thead>
        <tbody>
          {players.map(player => (
            <tr key={player.id} style={styles.row}>
            
              <td style={styles.cell}>{player.name}</td>
              <td style={styles.cell}>{player.championName}</td>
              <td style={styles.cell}>{player.teamId}</td>
              <td style={styles.cell}>{player.kills}</td>
              <td style={styles.cell}>{player.deaths}</td>
              <td style={styles.cell}>{player.assists}</td>
              <td style={styles.cell}>{player.totalDamageDealtToChampions}</td>
              <td style={styles.cell}>{player.killParticipation + '%'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    background: 'radial-gradient(circle, #2a2a72, #1a1a40)',
    borderRadius: '20px',
    boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
    overflowX: 'auto',
    maxWidth: '95%',
    margin: 'auto',
    marginTop: '40px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    color: 'white',
    fontFamily: 'Arial, sans-serif',
    fontSize: '16px',
  },
  header: {
    padding: '15px',
    backgroundColor: '#8B0000', // dark red
    border: '1px solid #ffffff33',
    borderRadius: '10px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
  },
  row: {
    background: 'rgba(255, 255, 255, 0.05)',
    transition: 'all 0.3s',
  },
  cell: {
    padding: '15px',
    textAlign: 'center',
    border: '1px solid #ffffff22',
  },
};

export default PlayerTable;
