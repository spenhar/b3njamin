// variables

var currentPosition = 0;

var photoCount = 20;

var slideshow = document.getElementsByClassName('slideshow')[0];
slideshow.style.width = "auto";
slideshow.style.height = "100%";
slideshow.style.border = "2px solid green";
slideshow.style.position = "relative";

// events
var arrowLeft = document.getElementsByClassName('arrow-left')[0];
var arrowRight = document.getElementsByClassName('arrow-right')[0];


arrowLeft.addEventListener('click', moveRight);
arrowRight.addEventListener('click', moveLeft);


function moveRight(){
	slideshow.style.left = currentPosition + "px";
	console.log('moveRight test');
	// what happens when they are clicked. 
}

function moveLeft(){
	slideshow.style.left = "-1000px";
	console.log('moveLeft test');
	// what happens when they are clicked. 
}

function createPhotos(){
	for (var i=0; i < photoCount; i++){
		var photo = document.createElement('div');
		photo.className = "photo";
		photo.innerHTML = i;
		slideshow.appendChild(photo);

		
		if(i===0){
			photo.className = "photo current"
		}
		else{
			photo.className = "photo"
		}

		photo.style.width = "1000px";
		photo.style.height = "500px";
		photo.style.left = i * 1002 + "px";
		photo.style.background = "blue";
		photo.style.margin = "2px";
		photo.style.position = "absolute";

		console.log(photo.style.width);

	}
}

createPhotos();

// give me width -- returns "500px" -- look up how to get just the number not the pixels. 



