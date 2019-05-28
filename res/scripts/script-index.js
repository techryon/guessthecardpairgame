//Initializing the required variables
var totalCard = 36;
var two = 2;

//AddEventListener to DOMContentLoaded, so the image waits to load
//after the page is loaded
document.addEventListener("DOMContentLoaded", function(event) {
 // onload_image();
  createDiv();
  listenToClick();
});

  //Function to create the div elements for the grid
  function createDiv() {
    var parentDiv = document.getElementById("container");
    
    //Loop to create the 36 div containers
    for(let index=1; index<=totalCard; index++){ 
    var div = document.createElement("div");
    div.setAttribute("class", "containerDivClass");
    div.setAttribute("id", ("containerDivId"+index));
    parentDiv.appendChild(div);
    
    //Calling the createImg function, passing the div values
    createImg(div);
    }
  }


  //Function to create the img element for the grid
  function createImg(div) {

    //Loop to create the two image inside each container
    for(let index=1; index<=two; index++){ 
      var img = document.createElement("img");
      div.appendChild(img);
      
    //Setting the src attribute separate  
    if(index==1){ 
      img.setAttribute("class", ("cellImgClass imgBack"));
      img.setAttribute("id", ("cellImgId imgBack"));
      img.setAttribute("src", "./res/images/card-background.png");
    }
    else {
      img.setAttribute("class", ("cellImgClass imgFront"));
      img.setAttribute("id", ("cellImgId imgFront"));
      img.setAttribute("src", "./res/images/0.png");
    }

    }
  }


function listenToClick(){  
  var card = document.getElementsByClassName('containerDivClass');
  for(let i=0; i<card.length; i++){
    card[i].addEventListener('click', function() {
    card[i].classList.toggle('is-flipped');
    });
  }
}