//The tutorial I followed
// https://youtu.be/ZniVgo8U7ek


//Creating a constant and capturing all the elements with the name .memory-card
const cards = document.querySelectorAll('.memory-card');


let hasFlippedCard = false; //to capture 1st card click
let firstCard, secondCard; //to differentiate between 1st and 2nd card

//Function to toggle the classlist with flip and removing it of item being clicked
function flipCard() {
  this.classList.toggle('flip');

  //Checking if hasFlippedCard is false
  if (!hasFlippedCard) {
    //first click
    hasFlippedCard = true; //setting it to true
    firstCard = this; //associating 'this' keyword to firstCard
    
  } else {
      //second click
      hasFlippedCard = false; //setting it to false on 2nd click
      secondCard = this; //re-associating 'this' keyword to secondCard
  
      //do cards match
      if(firstCard.dataset.framework === 
        secondCard.dataset.framework) {
        //if the cards match
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
      
      } else {
          //not a match
          setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
          }, 1500);
          
      }

    }

}

/*Looping through each item in the cards array
by listening to the click event and calling flipCard function */
cards.forEach(card=> card.addEventListener('click', flipCard));





