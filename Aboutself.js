var contents = document.getElementById('container');
var image = ['1','2','3'];

var i= image.length;

function nextpic(){
  if (i < image.length){

    i = i+1;
  } else {
    i= 1;
  }
    slide_content.innerHTML = "<img src= "+image[i-1]+".jpg>";
  }


function prevpic () {
  if (i < image.length - 1 && i > 1 ){

    i = i - 1;
  } else {
    i= image.length;
  }
    slide_content.innerHTML = "<img src= "+image[i-1]+".jpg>";
  }
