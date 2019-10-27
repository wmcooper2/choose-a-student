import React from 'react';
//import logo from './logo.svg';
import './App.css';
import './volunteers.css';


//add click listener and unique id to all squares
//let squares = document.querySelectorAll(".seat");
//for (let index of nums){
//  squares[index].addEventListener("click", emptySeat);
//  squares[index].setAttribute("id", "seat" + index);
//}
//
//

//
class Sidebar extends React.Component {
  render(){
    return (
      <div id="sidebar">
        <button value="false" id="absentbtn" onClick={this.props.onClick}>Absent</button>
        <button id="reset" onClick={this.props.onClick}>Reset</button>
        <button id="random" onClick={this.props.onClick}>Random</button>
      </div>
    );
  }
}

class Seat extends React.Component {
  render(){
    return (
      <button class="seat" value="true" onClick={this.props.handleClick}></button>
    );
  }
}


class App extends React.Component {
  constructor(props){
    super(props);
    this.click = this.click.bind(this);
    this.emptySeat = this.emptySeat.bind(this);
    this.absentBtnClick = this.absentBtnClick.bind(this);
    this.randomBtnClick = this.randomBtnClick.bind(this);
    this.resetBtnClick = this.resetBtnClick.bind(this);
  }

  blue = "rgba(0, 92, 211, 0.8)";
  grey = "rgba(155, 155, 155, 0.9)";
  white = "rgba(255, 255, 255, 1.0)";

  emptySeat(event){
    let sq = document.elementFromPoint(event.clientX, event.clientY);
    if (sq.value === "true"){
      sq.style.backgroundColor = this.grey;
      sq.setAttribute("value", "false");
    } else {
      sq.style.backgroundColor = this.white;
      sq.setAttribute("value", "true");
    }
  }

  nums = [];

  // nums for seat ID's
//  let nums = [];
//  for (let i = 0; i < 36; i++){
//    nums.push(i);
//  }



  absentBtnClick(event){
    if (this.value === "true"){
      this.style.backgroundColor = this.grey;
      this.setAttribute("value", "false");
    } else {
      this.style.backgroundColor = this.blue;
      this.setAttribute("value", "true");
    }
  }


  randomBtnClick(event){
    let numChoice = Math.floor(Math.random()*this.nums.length);
    let choice = document.getElementById("seat"+ this.nums[numChoice]);
    choice.focus();
    choice.style.backgroundColor = this.grey;
    this.nums = [...this.nums.slice(0, numChoice), ...this.nums.slice(numChoice+1, )];
    
  }


  resetBtnClick(event){
    console.log("cliced reset");
  //resetBtn.onclick = () => {
//    for (let sq of squares){
//      sq.setAttribute("value", "false");
//      sq.style.backgroundColor = this.white;
//    }
  }


  click(event){
  //need a single handleClick that handles these
    if (event.target.id === "absentBtn"){
      console.log("absent");
    } else if (event.target.id === "reset"){
      console.log("reset");
    } else if (event.target.id === "random"){
      console.log("random");
    }
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">

          <div id="classroom">
            <div class="row">
              <button class="seat" value="true"></button>
              <button class="seat" value="true"></button>
              <button class="seat" value="true"></button>
              <button class="seat" value="true"></button>
              <button class="seat" value="true"></button>
            </div>
          </div>
          <Sidebar onClick={this.click} />

        </header>
      </div>
    );
  }
}

export default App;
