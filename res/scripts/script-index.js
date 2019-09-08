
//Creating a constant and capturing all the elements with the name .memory-card
const cards = document.querySelectorAll('.memory-card');

//Function to toggle the classlist with flip and removing it of item being clicked
function flipCard() {
  this.classList.toggle('flip');
}

/*Looping through each item in the cards array
by listening to the click event and calling flipCard function */
cards.forEach(card=> card.addEventListener('click', flipCard));





