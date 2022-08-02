const NUMBER_of_WORD = 6;
const NUMBER_of_CHAR = 5;

let words = document.getElementById("container");

for (let i = 0; i < NUMBER_of_WORD; i++) {
  let singeleWord = document.createElement("div");
  singeleWord.className = "word";
  for (let j = 0; j < NUMBER_of_CHAR; j++) {
    let singeleChar = document.createElement("div");
    singeleChar.className = "char";
    singeleWord.appendChild(singeleChar);
  }
  words.appendChild(singeleWord);
}
let curntwORD = 0;
let curntChar = 0;
document.addEventListener("keydown", function (event) {
  if (event.key === "Backspace") {
    if (curntChar > 0) {
      let wordDiv = words.children[curntwORD];
      let charToDelete = wordDiv.children[curntChar - 1];
      charToDelete.innerHTML = "";
      curntChar--;
      animateCSS(wordDiv, "jello");
    }
  } else {
    if (event.key === "Enter") {
      if (curntChar === 5) {
        let wordDiv = words.children[curntwORD];
        animateCSS(wordDiv, "shakeX");
        curntwORD++;
        curntChar = 0;
      }
    } else if (curntChar < 5 && isletter(event.key)) {
      let wordDiv = words.children[curntwORD];
      let charDiv = wordDiv.children[curntChar];
      charDiv.innerHTML = event.key.toUpperCase();
      curntChar++;
    }
  }
  if (event.key === "x") {
    document.getElementById("charDiv").style.background = "green";
  }
});
const animateCSS = (element, animation, prefix = "animate__") =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    //const node = document.querySelector(element);

    element.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      element.classList.remove(`${prefix}animated`, animationName);
      resolve("Animation ended");
    }

    element.addEventListener("animationend", handleAnimationEnd, {
      once: true,
    });
  });
function isletter(str) {
  return str.length === 1 && str.match(/[a-z]/i);
}
