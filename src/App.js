import React from "react";
import "./App.css";
import Controls from "./components/controls";
import Row from "./components/rows";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      choices: [...Array(36).keys()]
    };
  }

  emptySeat = event => {
    let sq = document.elementFromPoint(event.clientX, event.clientY);
    if (sq.value === "true") {
      sq.style.backgroundColor = this.grey;
      sq.setAttribute("value", "false");
    } else {
      sq.style.backgroundColor = this.white;
      sq.setAttribute("value", "true");
    }
  };

  absentBtnClick = event => {
    if (this.value === "true") {
      this.style.backgroundColor = this.grey;
      this.setAttribute("value", "false");
    } else {
      this.style.backgroundColor = this.blue;
      this.setAttribute("value", "true");
    }
  };

  randomChoice = () => {
    let numChoice = Math.floor(Math.random() * this.state.choices.length);
    console.log("numChoice = " + numChoice);
    //    let choice = document.getElementById("seat"+ this.nums[numChoice]);
    //    choice.focus();
    //    choice.style.backgroundColor = this.grey;
    //    this.nums = [...this.nums.slice(0, numChoice), ...this.nums.slice(numChoice+1, )];
  };

  //  resetBtn.onclick = () => {
  //    for (let sq of squares){
  //      sq.setAttribute("value", "false");
  //      sq.style.backgroundColor = this.white;
  //    }
  //  }

  handleClick = props => {
    console.log("handleClick props = ", props);
    let newChoices = [...this.state.choices].filter(choice => choice !== props);
    console.log(newChoices);
    this.setState({
      choices: newChoices
    });

    //    console.log(props.target.id);
    /*
    if (props.target.id === "reset") {
      console.log("reset");
    } else if (props.target.id === "random") {
      this.randomChoice();
    } else {
      //      console.log(props.target.id);
      let name = document.getElementById(props.target.id);
      console.log("name = " + name);
      //      console.log(this.state.choices);
    }
    */
  };

  render() {
    return (
      <div className="container" id="classroom">
        <Row rowKey={0} props={this.state} handleClick={this.handleClick} />
        <Row rowKey={6} props={this.state} handleClick={this.handleClick} />
        <Row rowKey={12} props={this.state} handleClick={this.handleClick} />
        <Row rowKey={18} props={this.state} handleClick={this.handleClick} />
        <Row rowKey={24} props={this.state} handleClick={this.handleClick} />
        <Row rowKey={30} props={this.state} handleClick={this.handleClick} />
        <Controls handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
