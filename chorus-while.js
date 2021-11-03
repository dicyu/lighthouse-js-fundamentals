// Global Variables
const chorus = "Let's Dance";
let repeat = 0;

// Code
while (repeat < 10) {
  if (repeat === 5) {
    console.log("*change key*"); //adding a line when repeat = 5
  }
  console.log(chorus);
  repeat++;
}
console.log("Until the sun comes up");