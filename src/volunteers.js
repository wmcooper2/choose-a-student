"use strict";
let blue = "rgba(0, 92, 211, 0.8)";
let grey = "rgba(155, 155, 155, 0.9)";
let red = "rgba(255, 0, 0, 1.0)";
let white = "rgba(255, 255, 255, 1.0)";


//shuffle function taken from https://bost.ocks.org/mike/shuffle/
function shuffle(array) {
  var m = array.length, t, i;
  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);
    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}


function emptySeat(event){
  let sq = document.elementFromPoint(event.clientX, event.clientY);
  if (sq.value == "true"){
    sq.style.backgroundColor = grey;
    sq.setAttribute("value", "false");
  } else {
    sq.style.backgroundColor = white;
    sq.setAttribute("value", "true");
  }
}


// nums for seat ID's
let nums = [];
for (let i = 0; i < 36; i++){
  nums.push(i);
}


//add click listener and unique id to all squares
let squares = document.querySelectorAll(".seat");
for (let index of nums){
  squares[index].addEventListener("click", emptySeat);
  squares[index].setAttribute("id", "seat" + index);
}


function absentBtnClick(event){
  if (this.value == "true"){
    this.style.backgroundColor = grey;
    this.setAttribute("value", "false");
  } else {
    this.style.backgroundColor = blue;
    this.setAttribute("value", "true");
  }
}


function randomBtnClick(event){
  let numChoice = Math.floor(Math.random()*nums.length);
  let choice = document.getElementById("seat"+ nums[numChoice]);
  choice.focus();
  choice.style.backgroundColor = grey;
  nums = [...nums.slice(0, numChoice), ...nums.slice(numChoice+1, )];
  
}


function resetBtnClick(event){
//resetBtn.onclick = () => {
  for (let sq of squares){
    sq.setAttribute("value", "false");
    sq.style.backgroundColor = white;
  }
}


let absentBtn = document.getElementById("absentbtn");
absentBtn.addEventListener("click", absentBtnClick);
let resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", resetBtnClick);
let randomBtn = document.getElementById("random");
randomBtn.addEventListener("click", randomBtnClick);
