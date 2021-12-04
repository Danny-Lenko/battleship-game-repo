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
         let index = ship.locations.indexOf(guess);
         if (index >= 0) {
            ship.hits[index] = "hit";
            if (this.isSunk) {
               view.showMessage("You sank my battleship!");
               this.shipSunk++;
            }
            view.renderHit(guess);
            return true;
         }
      }
      view.renderMiss(guess);
      return false;
   },

   isSunk: function(ship) {
      for (let i = 0; i < this.shipSize; i++) {
         if (ship.hits[i] !== "hit") {
            return false;
         }
      }
      return true;
   }

};

let controller = {
   guesses: 0,

   processGuess: function(guess) {
      guess.[0]
   }

};

function parseGuess(guess) {
   let lettersArr = ["A", "B", "C", "D", "E", "F", "G"];

   if (guess === null || guess.length !== 2) {
      alert("Oops, please enter a letter and a number on the board");
   } else {
      let firstChar = guess.charAt(0);
      let row = lettersArr.indexOf(firstChar);
      let column = guess.charAt(1);

      if ( isNaN(row) || isNaN(column) ) {
         alert("Oops, that is not on the board");
      } else if (row < 0 || row >= model.playgroundSize 
                 || column < 0 || column >= model.playgroundSize) {
         alert("Oops, that's off the board!");
      }
   }
   
}

function init() {
   const fireButton = document.querySelector('#fireButton');
   fireButton.addEventListener('click', function() {
      console.log("btnClicked");
   });

}






model.fire("34");
model.fire("02");
model.fire("45");
model.fire("56");




