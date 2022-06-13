const changeBtn = document.getElementById("changeColor");
const color = document.getElementById("color");
const body = document.body;

changeBtn.addEventListener("click", changeBG);

function changeBG() {
   const col1 = getRandomColor();
   const col2 = getRandomColor();
   const col3 = getRandomColor();

   const colorString = `rgb(${col1}, ${col2}, ${col3})`;

   body.style.backgroundColor = colorString;
   color.innerHTML = colorString;
}

function getRandomColor() {
   return Math.floor(Math.random() * 256);
}
