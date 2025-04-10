/* Reikalavimai:
● KMI yra apskaičiuojamas paspaudus compute bmi mygtuką
● Turi būti išvedamas KMI įvertis (antsvoris, normalus, viršsvoris, nutukimas)
● Papildomai: padarykite pranešimą, jei įvestas svoris ar ūgis yra nerealistiškas (pvz neigiamas skaičius)
*/

const btnDOM = document.getElementById("btn");
const heightDOM = document.querySelector(".input");
const weightDOM = document.getElementById("weight");
const resultDOM = document.getElementById("bmi-result");
const conditionDOM = document.getElementById("weight-condition");

btnDOM.addEventListener("click", () => {
  resultDOM.value = 20;
  conditionDOM.innerText = "storas";
});
