"use strict";

const tontonGifs = [
  "https://media.tenor.com/TUVAE2M_wz4AAAAi/chubby-tonton.gif",
  "https://media.tenor.com/pZk_U5JVWzUAAAAi/tonton-friends-tonton.gif",
  "https://media.tenor.com/Jkha__Yjf0oAAAAi/sad-depression.gif",
  "https://media.tenor.com/U0OPHZokzkUAAAAi/what-seriously.gif",
  "https://media.tenor.com/WKXMmSk3JJsAAAAi/chubby-tonton.gif",
  "https://media.tenor.com/ZHWV13jliTAAAAAi/chubby-tonton.gif",
];

const title = document.querySelector(".title");
const btnContainer = document.querySelector(".buttons");
const รักBtn = document.querySelector(".btn-รัก");
const ไม่รักBtn = document.querySelector(".btn-ไม่รัก");
const img = document.querySelector(".img");

const MAX_IMAGES = 5;
let play = true;
let noCount = 0;
let noButtonSize = 1;
let yesButtonSize = 1;

yesBtn.addEventListener("click", () => {
  title.innerHTML = "เย้ๆๆ รักคนดีนะค่าบ 🧡";
  btnContainer.classList.add("hidden");
  changeImage("รัก");
});

noBtn.addEventListener("click", () => {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    shrinkNoButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) play = false;
  }
});

function resizeYesButton() {
  รักButtonSize *= 1.2;
  รักBtn.style.transform = `scale(${รักButtonSize})`;
}

function shrinkไม่รักButton() {
  ไม่รักButtonSize *= 0.90;
  ไม่รักBtn.style.transform = `scale(${ไม่รักButtonSize})`;
}

function generateMessage(noCount) {
  const messages = [
    "ไม่ 😔",
    "ตัวจะกดตรงนี้จริงๆหรอ? 🥺",
    "คนดีค่าบบบบบบบ  🥹",
    "ไม่เอา ไม่กดอันนี้สิ 😭",
    "อย่าใจร้ายกับโบ้สิค่าบ 💔",
    "เสียใจจจจจ... 😭💔",
  ];
  return messages[Math.min(noCount, messages.length - 1)];
}

function changeImage(image) {
  img.src =
    image === "รัก🧡"
      ? "https://media.tenor.com/ACi1vdjNbpIAAAAi/%EC%9C%A0%ED%83%80-%ED%86%A4%ED%86%A4%ED%94%84%EB%A0%8C%EC%A6%88.gif"
      : tontonGifs[image];
}

function updateNoButtonText() {
  ไม่รักBtn.innerHTML = generateMessage(noCount);
}
