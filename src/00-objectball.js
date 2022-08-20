//Building the object
function gameObject(){
    const objects= {
        home:{
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
              "Alan Anderson": {
                number: 0,
                shoe: 16,
                points: 22,
                rebounds: 12,
                assists: 12,
                steals: 3,
                blocks: 1,
                slamDunks: 1,
              },
              "Reggie Evens": {
                number: 30,
                shoe: 14,
                points: 12,
                rebounds: 12,
                assists: 12,
                steals: 12,
                blocks: 12,
                slamDunks: 7,
              },
              "Brook Lopez": {
                number: 11,
                shoe: 17,
                points: 17,
                rebounds: 19,
                assists: 10,
                steals: 3,
                blocks: 1,
                slamDunks: 15,
              },
              "Mason Plumlee": {
                number: 1,
                shoe: 19,
                points: 26,
                rebounds: 12,
                assists: 6,
                steals: 3,
                blocks: 8,
                slamDunks: 5,
              },
              "Jason Terry": {
                number: 31,
                shoe: 15,
                points: 19,
                rebounds: 2,
                assists: 2,
                steals: 4,
                blocks: 11,
                slamDunks: 1,
              },
            },
          },
          away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
              "Jeff Adrien": {
                number: 4,
                shoe: 18,
                points: 10,
                rebounds: 1,
                assists: 1,
                steals: 2,
                blocks: 7,
                slamDunks: 2,
              },
              "Bismack Biyombo": {
                number: 0,
                shoe: 16,
                points: 12,
                rebounds: 4,
                assists: 7,
                steals: 7,
                blocks: 15,
                slamDunks: 10,
              },
              "DeSagna Diop": {
                number: 2,
                shoe: 14,
                points: 24,
                rebounds: 12,
                assists: 12,
                steals: 4,
                blocks: 5,
                slamDunks: 5,
              },
              "Ben Gordon": {
                number: 8,
                shoe: 15,
                points: 33,
                rebounds: 3,
                assists: 2,
                steals: 1,
                blocks: 1,
                slamDunks: 0,
              },
              "Brendan Hayword": {
                number: 33,
                shoe: 15,
                points: 6,
                rebounds: 12,
                assists: 12,
                steals: 22,
                blocks: 5,
                slamDunks: 12,
              },
            },
        },
    };
        return objects;
}
console.log(gameObject());

//*******************/
function homeTeamName() {
    let object = gameObject()
    return object['home']['teamName']
  }

  console.log(homeTeamName())
//*******************/


//*******************/
let oo = { foo: 42, bar: 83, "key w/ spaces": true };
console.log(oo["foo"]);
console.log(oo["bar"]);
console.log(oo["key w/ spaces"]);

console.log(oo.foo);
console.log(oo.bar);

//*******************/

// let oo = { foo: 42, bar: 83, baz: 79 };
// for (let key in oo) {
//   let value = oo[key];
//   console.log("key:", key, "value:", value);
// }
//*******************/




//Function Building

function players(){
  game = gameObject();
  homePlayers = game.home.players;
  awayPlayers = game.away.players;

  // return Object.assign({}, homePlayers, awayPlayers);
  return Object.assign({}, homeTeam().players, awayTeam().players);
}
game = gameObject();
const teams = Object.values(game);
nameOfPlayer = game.home.players

function numPointsScored(nameOfPlayer) {
  for (const playerName in players()){
    if(playerName === nameOfPlayer){
      return players()[playerName].points;
  }
    // return players[nameOfPlayer].points;
  }
}
numPointsScored('Ben Gordon')

// debugger

function playersObject(){
  return Object.assign({}, homeTeam().players, awayTeam().players);
}

function homeTeam(){
  return gameObject().home
}

function awayTeam(){
  return gameObject().away;
}

function homeTeamColor(){
  return homeTeam().colors;
}

function awayTeamColor(){
  return homeTeam().colors;
}

function team(teamName){
  return findByTeamName(teamName).assists;
}

function findByTeamName(teamName){
  return teams.find(function(team){
    teamName === team.teamName
  })
}

function teamNames(){
  return teams.map(function(team){
    team.teamName
  })
}

// console.log(teamColors('Charlotte Hornets'))
nameOfPlayer = game.home.players

function shoeSize(nameOfPlayer) {
    return players[nameOfPlayer].shoe;
  }
function playerNumbers(nameOfPlayer){
  return players[nameOfPlayer].number;
}

function playerStats(nameOfPlayer) {
    return players[nameOfPlayer];
  }


  function bigShoeRebounds() {
  const shoeRebounds = Object.values(players).sort((sortA, sortB) => {
    if (sortA.shoe > sortB.shoe) {
      return -1;
    }else if (sortA.shoe < sortB.shoe) {
      return 1;
    }else if (sortA.shoe == sortB.shoe) {
      return 0;
    }else{
      return "none"
    }
  })[0];
  return shoeRebounds.rebounds;
}

function mostPointsScored() {
  const sorted = Object.entries(players).sort((sortA, sortB) => {
    if (sortA[1].points > sortB[1].points){
      return -1;
    }else if (sortA[1].points < sortB[1].points) {
      return 1;
    }else if (sortA[1].points == sortB[1].points) {
      return 0;
    }else{
      return "none";
    }
  });
  return sorted[0][0];
}

function winningTeam() {
  let homeStatistics = Object.values(game.home.players);
  let awayStatistics = Object.values(game.away.players);
  let homeScore = homeStatistics.reduce(function(total, stats) {
    total + stats.points, 0
  });
  let awayScore = awayStatistics.reduce(function(total, stats){
    total + stats.points, 0
  });
  if (homeScore > awayScore) {
    return game.home.teamName;
  } else if (awayScore > homeScore) {
    return game.away.teamName;
  } else {
    return "Try another season!";
  }
}

function playerWithLongestName() {
  return Object.keys(players).sort(
    (sortA, sortB) => {
    if (sortA.length > sortB.length) {
      return -1;
    }else if (sortA.length < sortB.length) {
      return 1;
    }else if (sortA.length == sortB.length){
      return 0;
    }else{
      return "none"
    }

  })[0];
}

function doesLongNameStealATon() {
  const totalStats = Object.values(players);
  const maximumSteals = Math.max(totalStats.map((s) => s.steals));
  const lNameSteals = playerStats(playerWithLongestName()).steals;
  return lNameSteals === maximumSteals;
}

debugger;
