//AddEventListener to DOMContentLoaded, so the image waits to load
//after the page is loaded
document.addEventListener("DOMContentLoaded", function(event) {
 // onload_image();
  createDiv();
 
});

  //Function to create the div elements for the grid
  function createDiv() {
    var parentDiv = document.getElementById("container");
    for(let index=1; index<=36; index++){
    var div = document.createElement("div");
    div.setAttribute("class", "container__cell");
    div.setAttribute("id", ("container_cell"+index));
    parentDiv.appendChild(div);
    createImg(index, div);
    }
  }
  //Function to create the img element for the grid
  function createImg(index, div) {
    var img = document.createElement("img");
    div.appendChild(img);
    img.setAttribute("class", "cell__img");
    img.setAttribute("id", ("cell__img"+index));
    img.setAttribute("src", "./res/images/card-background.png")
  }
  