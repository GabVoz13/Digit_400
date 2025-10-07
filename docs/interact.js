/*
  This JavaScript file controls the movement of the pink box on my webpage.
  When I click the “Move Box” button, the box slides 20 pixels to the right.
  When I click the “Reset Box” button, the box goes back to its starting position.
  I’m using event listeners so that the buttons respond to user actions.
*/
window.addEventListener("DOMContentLoaded", function() {
  const box = document.getElementById("box");
  const moveBtn = document.getElementById("moveBtn");
  const resetBtn = document.getElementById("resetBtn");

  let position = 0; // keeps track of box position

  moveBtn.addEventListener("click", function() {
    position += 20;
    box.style.left = position + "px";
  });

  resetBtn.addEventListener("click", function() {
    position = 0;
    box.style.left = "0px";
  });
});
