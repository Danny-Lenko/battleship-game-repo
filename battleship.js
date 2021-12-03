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

   fire: function() {

   }

};




