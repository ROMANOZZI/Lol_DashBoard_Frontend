import React from 'react'
import Player from '../models/player'
import PlayerTable from './PlayersTable'
export default function({team}) {
  return (
    <section>
        <h3 >
            team {`${team.number}`}

        </h3>
        
         <PlayerTable players={team.players.map(x=>Player.fromJson(x))}/>
            

        
        
    </section>
  )
}
