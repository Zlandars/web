"use strict"; // Запуск при загрузке страницы.
// function runScript() {
//     var inputWithNumber1 = document.getElementById("//id")
//     //or
//     var number1 = getNumberFromHtml("//id")
//     var sum = getElementByTagName("")
// }
// window.onload = runScript;

/* Установите ширину боковой навигации 250 пикселей, и левое поле содержимого страницы - 250 пикселей и добавьте черный цвет фона к телу. */

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginRight = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  document.getElementsByClassName("closewin").style.position = "fixed";
}
/* Установите ширину боковой навигации равной 0, и левое поле содержимого страницы - 0, и цвет фона тела - белым. */


function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginRight = "0";
  document.getElementsByClassName("closewin").style.position = "absolute";
  document.body.style.backgroundColor = "white";
}