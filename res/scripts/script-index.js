//AddEventListener to DOMContentLoaded, so the image waits to load
//after the page is loaded
document.addEventListener("DOMContentLoaded", function(event) {
	onload_image();
 
});

//Function to load default images. Looping it so it loads the same image in 36cells
//This function gets the image using Id and adds the source attributes 
function onload_image() {
    for(var defaultImage=1; defaultImage<=36; defaultImage++){
      var src = "./res/images/card-background.png";
      var img = document.getElementById("cell__img" + defaultImage);
      img.src = src;
      
    }
  }
  