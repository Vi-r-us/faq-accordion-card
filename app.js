
// variables
let prev = null;
const questions = document.querySelectorAll(".question");
const main = document.querySelector("main");
const card = document.querySelector(".card");
const title = document.querySelector(".faq-container h1");
const platform = document.querySelector(".platform-img img");
const box = document.querySelector(".box-img img");
const platformShadow = document.querySelector(".platform-shadow-img img");

// FAQ question click event listener
questions.forEach((question) => {
  question.querySelector("p").addEventListener("click", e => {
    // if the same question clicked
    if (prev === question) {
      prev.classList.remove("active-question");
      prev = null;
      return;
    }

    // disable the previous one
    if (prev != null) {
      prev.classList.remove("active-question");
    }

    // activate the new one
    question.classList.add("active-question");
    prev = question;
  });
});


// 3D animation
main.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
main.addEventListener("touchstart", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Animate on Hover
main.addEventListener("mouseenter", (e) => {
  // Pop-out elements
  animateIn()
});
main.addEventListener("touchmove", (e) => {
  // Pop-out elements
  animateIn()
});

// Animate Out
main.addEventListener("mouseleave", (e) => {
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  animateOut();
});
main.addEventListener("touchend", (e) => {
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  animateOut();
});

function animateIn() {
  platform.classList.add("has-transform");
  box.classList.add("has-transform");
  platformShadow.classList.add("has-transform");
  title.classList.add("has-transform");
  questions.forEach((question) => {
    let ques = question.querySelector(".ques");
    let ans = question.querySelector(".hidden p");

    ques.classList.add("has-transform");
    ans.classList.add("has-transform");
  });
}
function animateOut() {
  platform.classList.remove("has-transform");
  box.classList.remove("has-transform");
  platformShadow.classList.remove("has-transform");
  title.classList.remove("has-transform");
  questions.forEach((question) => {
    let ques = question.querySelector(".ques");
    let ans = question.querySelector(".hidden p");

    ques.classList.remove("has-transform");
    ans.classList.remove("has-transform");
  });
}