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

  //maybe future functionality
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
    let choice = this.state.choices[numChoice];
    console.log(choice);
    this.updateChoices(choice);
  };

  updateChoices = props => {
    let newChoices = [...this.state.choices].filter(choice => choice !== props);
    this.setState({
      choices: newChoices
    });
    console.log(this.state.choices);
  };

  handleClick = props => {
    if (props === "reset") {
      this.setState({
        choices: [...Array(36).keys()]
      });
    } else if (props === "random") {
      this.randomChoice();
    } else {
      this.updateChoices(props);
    }
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
