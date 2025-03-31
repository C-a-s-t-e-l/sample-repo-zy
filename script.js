const players = []; // Array to store created players

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayName = function() {
    console.log(this.name);
  };
}

let lastPlayer = null; // Keeps track of the most recent player

function createNewPlayer() {
  const name = prompt("Enter player name:");
  const marker = prompt("Enter player marker (X or O):");

  if (!name || !marker) {
    console.log("Invalid input. Player not created.");
    return;
  }

  const newPlayer = new Player(name, marker);
  players.push(newPlayer);
  lastPlayer = newPlayer; 
  console.log(`New player created: ${newPlayer.name} with marker ${newPlayer.marker}`);
}



