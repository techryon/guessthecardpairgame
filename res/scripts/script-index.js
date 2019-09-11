//The tutorial I followed
// https://youtu.be/ZniVgo8U7ek


//Creating a constant and capturing all the elements with the name .memory-card
const cards = document.querySelectorAll('.memory-card');
const restart = document.getElementById('restart'); //restart
const counting = document.querySelector('.counting'); //.counting



let hasFlippedCard = false; //to capture 1st card click
let lockBoard = false; //to lock the board when one set of cards are not matched
let firstCard, secondCard; //to differentiate between 1st and 2nd card
let countMove = 0; //to capture the counter of moves

//Function to toggle the classlist with flip and removing it of item being clicked
function flipCard() {
  if(lockBoard) return; //listening to lock board when two clicks are captured 
  if(this === firstCard) return; //avoiding clicking the same card
                                // if 2nd click also points to firstCard, we come out of function

  this.classList.toggle('flip');

  //Checking if hasFlippedCard is false
  if (!hasFlippedCard) {
    //first click
    hasFlippedCard = true; //setting it to true
    firstCard = this; //associating 'this' keyword to firstCard
    
    return;

  } 
      //second click
      // This line became invalid after adding the resetBoard function. hasFlippedCard = false; //setting it to false on 2nd click
      secondCard = this; //re-associating 'this' keyword to secondCard
  
      //function to call to check for cards match
      checkForMatch();

    

}

//function which checks if the turned cards are a match
function checkForMatch() {
  //updating the conditions to terenary operation
  //the old code is at the end for reference 
  let isMatch = firstCard.dataset.framework ===
    secondCard.dataset.framework;

    isMatch ? disableCards() :  unflipCards(); //terenary operator calling the functions when true or false
    
}


//function which disables the click event on the cards, when they are matched
function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true;
  //setting timeout so we can see the 2nd card as well before the classes were reset
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    
    resetBoard(); 
    countingMoves();
    }, 1500);
}

//function to count the moves
function countingMoves(){
  countMove++
  counting.innerHTML = countMove; //adding the counter value in the innerHTML

}


//function to reset the board when the same card is clicked twice
//Also following ES6 Destructuring assignment
function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

//function to shuffle the cards
//also execute it immediately - no calling and all
function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * cards.length);
    card.style.order = randomPos;
  });
};

//function to reset or restart the game anytime
function restartGame() {
  location.reload(); //Tried different ways but my other codes were buggy
                    // Simply reloading the page :(
  
}

/*Looping through each item in the cards array
by listening to the click event and calling flipCard function */
cards.forEach(card=> card.addEventListener('click', flipCard));
restart.addEventListener('click', restartGame);
document.body.onload = shuffle();


/* This whole block is changed to terinary operator
if (firstCard.dataset.framework ===
    secondCard.dataset.framework) {
    //function to call when the cards match
    disableCards();
  } else {
      //function to call when cards dont match
      unflipCards();
    }
    */