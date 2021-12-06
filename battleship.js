"use strict"

let view = {
   displayMessage: function(msg) {
      document.querySelector('#messageArea').innerHTML = msg;
   },
   displayHit: function(location) {
      document.getElementById(location).setAttribute('class', 'hit');
      this.displayMessage("HIT!");
   },
   displayMiss: function(location) {
      document.getElementById(location).setAttribute('class', 'miss');
      this.displayMessage("You missed.");
   }
};

let model = {
   boardSize: 7,
   shipSize: 3,
   shipsNumber: 3,
   shipsSunk: 0,
   ships: [
      { locations: ['02', '03', '04'], hits: ['', '', ''] },
      { locations: ['50', '51', '52'], hits: ['', '', ''] },
      { locations: ['45', '55', '65'], hits: ['', '', ''] }
   ],

   fire: function(guess) {
      for (let i = 0; i < this.shipsNumber; i++) {
         let ship = this.ships[i];
         let index = ship.locations.indexOf(guess);
         if (index >= 0) {
            ship.hits[index] = 'hit';
            view.displayHit(guess);
            this.isSunk(ship);
            console.log(this.shipsSunk);
            return true;
         }
      }
      view.displayMiss(guess);
      return false;
   },

   isSunk: function(ship) {
      for (let i = 0; i < this.shipSize; i++) {
         if (ship.hits[i] !== 'hit') {
            return false;
         }
      }
      this.shipsSunk++;
      view.displayMessage("You sank my battleship!");
      return true;
   }
};

let controller = {
   guesses: 0,

   processGuess: function(guess) {

   }
}

