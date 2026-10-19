const story1 = [
  { src: "Images/IMAGE1.jpg", caption: "Beginning: Thinking about a movie to watch." },
  { src: "Images/IMAGE2.jpg", caption: "Middle: Driving to the cinema." },
  { src: "Images/IMAGE3.jpg", caption: "End: Watching the movie." }
];

const story2 = [
  { src: "Images/IMAGE3.jpg", caption: "Beginning: Watching the movie." },
  { src: "Images/IMAGE2.jpg", caption: "Middle: Driving back home." },
  { src: "Images/IMAGE1.jpg", caption: "End: Thinking about the movie I just watched." }
];

let currentStory = story1;
let currentIndex = 0;

const storyImg = document.getElementById("storyImg");
const storyCaption = document.getElementById("storyCaption");
const storyTitle = document.getElementById("storyTitle");
const selectStory1 = document.getElementById("selectStory1");
const selectStory2 = document.getElementById("selectStory2");

function updateDisplay() {
  storyImg.src = currentStory[currentIndex].src;
  storyCaption.textContent = currentStory[currentIndex].caption;
}

function goNext() {
  currentIndex = (currentIndex + 1) % currentStory.length;
  updateDisplay();
}

function goPrev() {
  currentIndex = (currentIndex - 1 + currentStory.length) % currentStory.length;
  updateDisplay();
}

document.getElementById("nextBtn").addEventListener("click", goNext);
document.getElementById("prevBtn").addEventListener("click", goPrev);
storyImg.addEventListener("click", goNext);

selectStory1.addEventListener("click", () => {
  currentStory = story1;
  currentIndex = 0;
  storyTitle.textContent = "Story 1: Going to the Movies";
  selectStory1.classList.add("active");
  selectStory2.classList.remove("active");
  updateDisplay();
});

selectStory2.addEventListener("click", () => {
  currentStory = story2;
  currentIndex = 0;
  storyTitle.textContent = "Story 2: Coming Home from the Movies";
  selectStory2.classList.add("active");
  selectStory1.classList.remove("active");
  updateDisplay();
});