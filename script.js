// ===============================
// ELEMENT REFERENCES
// ===============================
const tapScreen = document.getElementById("tap-to-start");

const intro1 = document.getElementById("intro-video-1");
const intro2 = document.getElementById("intro-video-2");
const nameVideo = document.getElementById("name-video");
const bgVideo = document.getElementById("bg-video");

const overlay = document.querySelector(".overlay");
const content = document.getElementById("content");

const screenName = document.getElementById("screen-name");
const screenStory = document.getElementById("screen-story");
const screenQuestion = document.getElementById("screen-question");
const screenSuccess = document.getElementById("screen-success");
const screenFail = document.getElementById("screen-fail");

const usernameInput = document.getElementById("username");
const storyText = document.getElementById("story-text");
const questionText = document.getElementById("question-text");
const answerInput = document.getElementById("answer");

// ===============================
// QUESTION BANK
// ===============================
const questions = [
  { q: "Swiftly said, it sounds like a hiss, a helping hand you should not miss.", a: "STUDENT SUPPORT SERVICES" },
  { q: "The ocean is deeper than you think. decode this hint to find an academic programme at iit bombay.", a: "CDEEP" },
  { q: "The people here know how to help you to find yourself.", a: "ID CARD OFFICE" },
  { q: "I stand tall with branches that never bloom.", a: "THE KNOWLEDGE TREE" },
  { q: "Dusro ki galtiyo se sikhna..", a: "GRADING STATISTICS" },
  { q: "Lost track, probably confused. send assistance.", a: "LTPCSA" },
];

// ===============================
// TAP TO START (REQUIRED)
// ===============================
tapScreen.addEventListener("click", () => {
  tapScreen.style.display = "none";
  playIntro1();
});

// ===============================
// INTRO VIDEO FLOW
// ===============================
function playIntro1() {
  intro1.play();
  intro1.onended = playIntro2;
}

function playIntro2() {
  intro1.classList.add("hidden");
  intro2.classList.remove("hidden");

  intro2.play();
  intro2.onended = showNameScreen;
}

function showNameScreen() {
  intro2.classList.add("hidden");

  // show background3
  nameVideo.classList.remove("hidden");
  overlay.classList.remove("hidden");

  // NOW reveal content for the first time
  content.style.visibility = "visible";
  screenName.classList.remove("hidden");

  nameVideo.play();
}


// function showNameScreen() {
//   intro2.classList.add("hidden");

//   nameVideo.classList.remove("hidden");
//   overlay.classList.remove("hidden");
//   content.classList.remove("hidden");

//   nameVideo.play();
// }

// ===============================
// START MAIN EXPERIENCE
// ===============================
function startSignal() {
  const name = usernameInput.value.trim();
  if (!name) return;

  nameVideo.pause();
  nameVideo.classList.add("hidden");

  bgVideo.classList.remove("hidden");
  bgVideo.play();

  screenName.classList.add("hidden");
  screenStory.classList.remove("hidden");

  storyText.innerText =
`HI ${name},

SOMETHING IS WRONG AT INSTI.
SIGNALS ARE BLEEDING THROUGH.
THIS IS WHERE IT BEGINS.`;
}

// ===============================
// START QUESTION
// ===============================
function startTest() {
  screenStory.classList.add("hidden");
  screenQuestion.classList.remove("hidden");

  const random = questions[Math.floor(Math.random() * questions.length)];
  localStorage.setItem("correctAnswer", random.a);

  questionText.innerText = random.q;
}

// ===============================
// CHECK ANSWER
// ===============================
function submitAnswer() {
  const userAnswer = answerInput.value.trim().toUpperCase();
  const correctAnswer = localStorage.getItem("correctAnswer");

  screenQuestion.classList.add("hidden");

  if (userAnswer === correctAnswer) {
    screenSuccess.classList.remove("hidden");
  } else {
    screenFail.classList.remove("hidden");
  }
}
