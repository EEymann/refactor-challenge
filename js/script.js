let html = '';

//A function that generates a number from 0-255. In RGB, that is the allowable values for red, green, or blue value.
const randomValue = () => Math.floor(Math.random() * 256);

//A reusable function that creates the RGB value. Inside the variable color, insert a random red, green or blue value by calling the randomValue function.
function randomRGB() {
  const color = `rgb( ${randomValue()}, ${randomValue()}, ${randomValue()} )`;
  return color;

}


//Inside the template literal assigned to the html variable, call the randomRGB function.
for (let i = 1; i <= 10; i++ ) {
  html += `<div style="background-color: ${randomRGB()}">${i}</div>`;
}
document.querySelector('main').innerHTML = html;
