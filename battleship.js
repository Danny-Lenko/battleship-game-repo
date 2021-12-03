"use strict"

let view = {
   showMessage: function(msg) {
      document.querySelector('#messageArea').innerHTML = msg;
   },
   renderHit: function(location) {
      document.getElementById(location).setAttribute('class', 'hit');
      this.showMessage("HIT!");
   },
   renderMiss: function(location) {
      document.getElementById(location).setAttribute('class', 'miss');
      this.showMessage("You missed.");
   }
};

let model = {
   playgroundSize: 7,
   shipSize: 3,
   shipNumber: 3,
   guesses: 0,
   shipSunk: 0,
   ships: [
      { locations: ["34", "44", "54"], hits: ["", "", ""] },
      { locations: ["00", "01", "02"], hits: ["", "", ""] },
      { locations: ["53", "55", "56"], hits: ["", "", ""] }
   ],

   fire: function(guess) {
      this.guesses++;
      for (let i = 0; i < this.shipNumber; i++) {
         let ship = this.ships[i];
         for (let j = 0; j < this.shipSize; i++) {
            let location = ship.locations[j];
            if (guess === location) {
               ship.hits.push("hit");
               view.renderHit(guess);
               return true;
            } else {
               view.renderMiss(guess);
               return false;
            }
         }
      }
   }

};

model.fire("34");
model.fire("00");
model.fire("45");




