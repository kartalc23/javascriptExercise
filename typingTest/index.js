const RANDOM_QUOTE_API_URL = "https://api.quotable.io/random";

const textDisplay = document.getElementById("quoteDisplay");
const textInput = document.getElementById("quoteInput");

function input() {
   const arrayText = textDisplay.querySelectorAll("span");
   arrayValue = textInput.value.split(" ");
   arrayText.forEach((word, index) => {
      const wordValue = arrayValue[index];
      if (wordValue == null) {
         word.classList.remove("correct");
         word.classList.remove("incorrect");
      } else if (wordValue === word.innerText) {
         word.classList.remove("incorrect");
         word.classList.add("correct");
      } else {
         word.classList.add("incorrect");
         word.classList.remove("correct");
      }
   });
}

function getRandomText() {
   return fetch(RANDOM_QUOTE_API_URL)
      .then((response) => response.json())
      .then((data) => data.content);
}

async function renderNewText() {
   const text = await getRandomText();
   textDisplay.innerHTML = "";
   text.split(" ").forEach(word => {
      const wordSpan = document.createElement("span");
      wordSpan.innerText = " " + word;
      textDisplay.appendChild(wordSpan);
   });
   textInput.value = null;
}
renderNewText();
