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
                  ship.hits(index)
              }
        }

      }
}
