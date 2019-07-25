/*document.addEventListener("DOMContentLoaded", function(event) {
	//onload_image();
  createDiv();
 
});

/*
function onload_image() {
    for(var defaultImage=1; defaultImage<=2; defaultImage++){
      var src = "./card-background.png";
      var img = document.getElementById("gallery_img" + defaultImage);
      img.src = src;
      
    }
  }
  

function createDiv() {
  var parentDiv = document.getElementById("gallery");
  for(let i=1; i<=2; i++){
  var div = document.createElement("div");
  div.setAttribute("class", ("galleryDivClass"));
  div.setAttribute("id", ("galleryItemId"+i));
  parentDiv.appendChild(div);
  createImg(i, div);
  }
}

function createImg(i, div) {
  for(let x=1; x<=2; x++){
  var img = document.createElement("img");
  div.appendChild(img);
  img.setAttribute("class", ("galleryImgClass"+x));
  img.setAttribute("id", ("galleryImgId"+x));
  if(x==1){
  img.src = "./card-background.png";
  }
  else {
    img.src = "./0.png";
  }
  //return img;
  }
}


var card = document.querySelector(".gallery");
card.addEventListener('click', function(){
  card.classList.toggle("flip");
});
*/

var card = document.getElementsByClassName('card');
for(let i=0; i<=1; i++){
card[i].addEventListener( 'click', function() {
  card[i].classList.toggle('is-flipped');
});
}