var model = {
      boardSize: 7,
      numShips: 3,
      shipLength: 3,
      shipSunk: 0,

      ships: [
        { locations: [0,0,0], hits: ["","","",]},
        { locations: [0,0,0], hits: ["","","",]},
        { locations: [0,0,0], hits: ["","","",]}
      ],

      fire: function(guess) {
        for (var i=0; i < this.numShips; i++) {
              var ship = this.ships[i];
              var index = ship.locations.indexOf(guess);

              if (ship.hits[index] === "hit") {
                  view.displayMessage("you have already hit");
                  return true;
              }
              else if (index >= 0) {
                  ship.hits[index] = "hit";
                  view.displayHit(guess);
                  view.displayMessage("HIT");

                  if (this.isSunk(ship)) {
                      view.displayMessage("You sank my battleship!");
                      this.shipSunk++;
                  }
                  return true;
              }
        }
        view.displayMiss(guess);
        view.displayMessage("You Missed!");
        return dalse;
      },

      isSunk: function(ship) {
        for (var i=0; i < this.shipLength; i++){
            if (ship.hits[i] !== "hit"){
              return false;
            }
        }
        return true;
      },

    generateShipLocations: function() {
        var locations:

        for (var i=0; i < this.numShips; i++) {
            do {
              locations = this.generateShip();
            } while (this.collision(locations));
            this.ship[i].locations = locations;
        }
        console.log("ships array: ");
        console.log(this.ships);
    },

  generateShip: function() {
    var direction = Math.floor(Math.random() * 2);
    var row, col;

    if(direction === 1) {
      row = Math.floor(Math.random() * this.boardSize);
      col = Math.floor(Math.random() * (this.boardSize - this.shipLength + 1));
    } else {
      col = Math.floor(Math.random() * this.boardSize);
      row = Math.floor(Math.random() * (this.boardSize - this.shipLength + 1));

    }

    var newShipLocations = [];
    for (var i=0, i < this.shipLength; i++) {
        if (direction === 1){
            newShipLocations.push(row + "" + (col + i));
        } else {
            newShipLocations.push((row + i) + "" + col);
        }
    }
    return newShipLocations;
  },

  



}
