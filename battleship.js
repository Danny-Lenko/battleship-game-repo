"use strict"

let view = {
   showMessage: function(msg) {
      document.querySelector('#messageArea').innerHTML = msg;
   },
   showHit: function(location) {
      document.getElementById(location).setAttribute('class', 'hit');
      this.showMessage("HIT!");
   },
   showMiss: function(location) {
      document.getElementById(location).setAttribute('class', 'miss');
      this.showMessage("You missed.");
   }
};

let model = {
   boardSize: 7,
   shipsNum: 3,
   shipsSize: 3,
   shipsSunk: 0,
   ships: [
      { locations: ['00', '01', '02'], hits: ['', '', ''] },
      { locations: ['10', '11', '12'], hits: ['', '', ''] },
      { locations: ['20', '21', '22'], hits: ['', '', ''] }
   ],

   fire: function(guess) {
      for (let i = 0; i < this.shipsNum; i++) {
         let ship = this.ships[i];
         let index = ship.locations.indexOf(guess);
         if (index >= 0) {
            ship.hits[index] = 'hit';
            view.showHit(guess);
            this.isSunk(ship);
            return true;
         }
      }
      view.showMiss(guess);
      return false;
   },

   isSunk: function(ship) {
      for (let i = 0; i < this.shipSize; i++) {
         if (ship.hits[i] !== 'hit') {
            return false;
         }
      }
      this.shipsSunk++;
      view.showMessage("You sank my battleship.");
      return true;
   }

};

model.fire('00');
model.fire('01');
// model.fire('02');

// model.fire('03');

