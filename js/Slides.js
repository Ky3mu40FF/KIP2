var Image = document.getElementById("image");
var index = 1;
var imagesNum = 6; /*”станавливаем вручную количество картинок!!!*/


function SlideImage(isForward) {
    if (isForward) {
        index++;
    }
    else {
        index--;
    }
    if (index > imagesNum) {
        index = 1;
    }
    if (index < 1) {
        index = imagesNum;
    }
    document.getElementById("image").src = "Slides/" + index + ".jpg";
   
}

function StartTest() {
    document.getElementById("image").hidden = true;
}