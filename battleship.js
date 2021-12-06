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
   shipsNumber: 3,
   shipsSunk: 0,
   ships: [
      { locations: ["", "", ""], hits: ["", "", ""] },
      { locations: ["", "", ""], hits: ["", "", ""] },
      { locations: ["", "", ""], hits: ["", "", ""] }
   ],

   fire: function(guess) {

      for (let i = 0; i < this.shipsNumber; i++) {
         let ship = this.ships[i];
         let index = ship.locations.indexOf(guess);

         if (index >= 0) {
            ship.hits[index] = "hit";
            view.renderHit(guess);

            if (this.isSunk(ship)) {
               view.showMessage("You sank my battleship!");
               this.shipsSunk++;
            }
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
   },

   generateShipLocations: function() {
      let locations;
      for (let i = 0; i < this.shipsNumber; i++) {
         do {
            locations = this.generateShip;
         } while (this.collision(locations));
         this.ships[i].locations = locations;
      }

   },

   generateShip: function() {
      let direction = Math.floor(Math.random() * 2);
      let row, col;
      let newShipLocations = [];

      if (direction === 1) {
         row = Math.floor( Math.random() * this.playgroundSize );
         col = Math.floor( Math.random() * (this.playgroundSize - 3) );
      } else {
         row = Math.floor( Math.random() * (this.playgroundSize - 3) );
         col = Math.floor( Math.random() * this.playgroundSize );
      }

      for (let i = 0; i < this.shipSize; i++) {
         if (direction === 1) {
            newShipLocations.push(row + '' + (col + i));
         } else {
            newShipLocations.push((row + i) + '' + col);
         }
      }
      return newShipLocations;
   },

   collision: function() {

   }


};

let controller = {
   guesses: 0,

   processGuess: function(guess) {
      let location = parseGuess(guess);
      if (location) {
         this.guesses++;
         let hit = model.fire(location);
         if (hit && model.shipsSunk === model.shipsNumber) {
            view.showMessage("You've sunk all my battleships in " + this.guesses + " guesses");
         }
      }
   }
};

function parseGuess(guess) {
   let lettersArr = ["A", "B", "C", "D", "E", "F", "G"];

   if (guess === null || guess.length !== 2) {
      alert("Oops, please enter a letter and a number on the board");
   } else {
      const firstChar = guess.charAt(0);
      const row = lettersArr.indexOf(firstChar);
      const column = guess.charAt(1);

      if ( isNaN(row) || isNaN(column) ) {
         alert("Oops, that is not on the board");
      } else if (row < 0 || row >= model.playgroundSize 
                 || column < 0 || column >= model.playgroundSize) {
         alert("Oops, that's off the board!");
      } else {
         return row + column;
      }
   }
   return null;
}

function init() {
   const fireButton = document.querySelector('#fireButton');
   const guessInput = document.querySelector('#guessInput');
   fireButton.onclick = processFireBtn;
   guessInput.onkeypress = processEnterKey;

}
window.onload = init();

function processFireBtn() {
   const guessInput = document.querySelector('#guessInput');
   let guess = guessInput.value
   controller.processGuess(guess);
   guessInput.value = "";
}

function processEnterKey(e) {
   const guessInput = document.querySelector('#guessInput');
   let guess = guessInput.value
   if (e.key === "Enter") {
      controller.processGuess(guess);
      guessInput.value = "";
   }
}









