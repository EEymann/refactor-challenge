let html = '';

//A function that generates a number from 0-255. In RGB, that is the allowable values for red, green, or blue value.
const randomValue = () => Math.floor(Math.random() * 256);

//A reusable function that creates the RGB value. Inside the variable color, insert a random red, green or blue value by calling the randomValue function.
//Add a paremter named value to the randomRGB function.
//Replace each randomValue function call with a call to value.
function randomRGB(value) {
  const color = `rgb( ${value()}, ${value()}, ${value()} )`;
  return color;

}


//Inside the template literal assigned to the html variable, call the randomRGB function.
//The randomRGB function now expects a value passed to it when called, and that value is a function.
//Now randomValue gets assigned to randomRGB's value parameter, and it's executed three times inside the function to generate the randomRGB value.
for (let i = 1; i <= 10; i++ ) {
  html += `<div style="background-color: ${randomRGB(randomValue)}">${i}</div>`;
}
document.querySelector('main').innerHTML = html;
