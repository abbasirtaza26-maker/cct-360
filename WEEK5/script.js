let player = document.getElementById("player");
let scene = document.getElementById("scene");
let message = document.getElementById("message");

let images = ["images/image1.jpg", "images/image2.jpg", "images/image3.jpg"];
let colours = ["#101820", "#3a1f2b", "#1f3a2b"];
let starts = [0, 25, 50];
let imageNumber = 0;
let volumeLevel = 10;


function showImage(number) {
  imageNumber = number;
  scene.style.backgroundImage = "url('" + images[imageNumber] + "')";
  document.body.style.backgroundColor = colours[imageNumber];
  updateMessage();
}


function playAudio() {
  player.play();
}

function pauseAudio() {
  player.pause();
}

function stopAudio() {
  player.pause();
  player.currentTime = 0;
  showImage(0);
}

function volumeUp() {
  if (volumeLevel < 10) {
    volumeLevel = volumeLevel + 1;
  }
  player.volume = volumeLevel / 10;
  updateMessage();
}

function volumeDown() {
  if (volumeLevel > 0) {
    volumeLevel = volumeLevel - 1;
  }
  player.volume = volumeLevel / 10;
  updateMessage();
}


function updateMessage() {
  message.innerHTML = "Picture " + (imageNumber + 1) + " of 3 | Volume: " + volumeLevel + "/10";
}


function playerProgressed() {
  let t = player.currentTime;
  if (t >= starts[2]) {
    showImage(2);
  } else if (t >= starts[1]) {
    showImage(1);
  } else {
    showImage(0);
  }
}

function playerEnded() {
  message.innerHTML = "The soundscape has ended.";
}

player.addEventListener("timeupdate", playerProgressed);
player.addEventListener("ended", playerEnded);


function nextImage() {
  let next = imageNumber + 1;
  if (next >= images.length) {
    next = 0;
  }
  showImage(next);
  player.currentTime = starts[next];
}

showImage(0);