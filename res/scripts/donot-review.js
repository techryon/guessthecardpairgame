document.addEventListener("DOMContentLoaded", function(event) {
	onload_image();
  createDiv();
  //The array has been created so its available in the memory during the game
//  for (var faceCard=0; faceCard<=51; faceCard++){
 //   faceCardsArray[faceCard] = new Image(); //Every element of the array is defined as a new image
   // faceCardsArray[faceCard].src = "./res/images/face/" + faceCard + ".png"; //every element source has been set

  //}
 
});


function onload_image() {
    for(var defaultImage=1; defaultImage<=2; defaultImage++){
      var src = "./res/images/card-background.png";
      var img = document.getElementById("gallery_img" + defaultImage);
      img.src = src;
      
    }
  }
  
function createDiv() {
  var parentDiv = document.getElementById("gallery");
  for(i=1; i<=2; i++){
  var div = document.createElement("div");
  div.setAttribute("class", "gallery__item");
  div.setAttribute("id", ("gallery_item"+i));
  parentDiv.appendChild(div);
  var img = document.createElement("img");
  div.appendChild(img);
  img.setAttribute("class", "gallery__img");
  img.setAttribute("id", ("gallery_img"+i));
  }
}