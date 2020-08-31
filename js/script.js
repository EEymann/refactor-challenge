let html = '';
let red;
let green;
let blue;
let randomRGB;
//Create a function that generates a number from 0-255. In RGB, that is the allowable values for red, green, or blue value.
const randomValue = () => Math.floor(Math.random() * 256);

//Call the function randomValue three times within the for loop to generate three random numbers that will later be used to turn out three random RGB colors.
for (let i = 1; i <= 10; i++ ) {
  red = randomValue();
  green = randomValue();
  blue = randomValue();
  randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
  html += `<div style="background-color: ${randomRGB}">${i}</div>`;
}
document.querySelector('main').innerHTML = html;
