import React from "react";
import Controls from "./components/controls";
import Row from "./components/rows";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      choices: [...Array(36).keys()],
      chosen: null,
      useNumbers: false,
    };
    this.randomChoice = this.randomChoice.bind(this);
    this.updateChoices = this.updateChoices.bind(this);
    this.toggleSeat = this.toggleSeat.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  //add other templates for different group settings
  //make buttons or a drop down menu for choosing the different arrangements
  //add drag and drop to customize the arrangements too

  randomChoice = () => {
    let numChoice = Math.floor(Math.random() * this.state.choices.length);
    let choice = this.state.choices[numChoice];
    this.updateChoices(choice);
  };

  updateChoices = (props) => {
    let newChoices = [...this.state.choices].filter((item) => item !== props);
    this.setState(() => {
      return {
        choices: newChoices,
        chosen: props,
      };
    });
  };

  toggleSeat = (props) => {
    if (this.state.choices.includes(props)) {
      let newChoices = [...this.state.choices].filter((item) => item !== props);
      this.setState((state) => {
        return {
          choices: newChoices,
        };
      });
    } else {
      let newChoices = [...this.state.choices];
      newChoices.push(props);
      this.setState((state) => {
        return {
          choices: newChoices,
        };
      });
    }
  };

  handleClick = (props) => {
    if (props === "Reset") {
      this.setState(() => {
        return {
          choices: [...Array(36).keys()],
          chosen: null,
        };
      });
    } else if (props === "Random") {
      this.randomChoice();
    } else if (props === "Use Numbers") {
      this.setState(() => {
        return {
          useNumbers: !this.state.useNumbers,
        };
      });
    } else {
      this.toggleSeat(props);
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="teachers-desk">Front of class</div>
        <Row rowKey={0} handleClick={this.handleClick} {...this.state} />
        <Row rowKey={6} handleClick={this.handleClick} {...this.state} />
        <Row rowKey={12} handleClick={this.handleClick} {...this.state} />
        <Row rowKey={18} handleClick={this.handleClick} {...this.state} />
        <Row rowKey={24} handleClick={this.handleClick} {...this.state} />
        <Row rowKey={30} handleClick={this.handleClick} {...this.state} />
        <Controls handleClick={this.handleClick} />
        <p className="instructions">
          Click a seat to remove it from the random selection.
        </p>
      </React.Fragment>
    );
  }
}

export default App;
