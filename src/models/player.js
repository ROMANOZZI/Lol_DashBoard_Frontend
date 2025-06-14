class Player {
    constructor({
        id,
        name,
        championName,
        teamId,
        kills,
        deaths,
        assists,
        totalDamageDealtToChampions,
        killParticipation
    }) {
        this.id = id;
        this.name = name;
        this.championName = championName;
        this.teamId = teamId;
        this.kills = kills;
        this.deaths = deaths;
        this.assists = assists;
        this.totalDamageDealtToChampions = totalDamageDealtToChampions;
        this.killParticipation = killParticipation;
    }

    static fromJson(json) {
        return new Player(json);
    }

    toJson() {
        return {
            id: this.id,
            name: this.name,
            championName: this.championName,
            teamId: this.teamId,
            kills: this.kills,
            deaths: this.deaths,
            assists: this.assists,
            totalDamageDealtToChampions: this.totalDamageDealtToChampions,
            killParticipation: this.killParticipation
        };
    }   
}

export default Player;