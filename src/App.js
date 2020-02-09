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
      chosen: null
    };
  }

  //add other templates for different group settings
  //make buttons or a drop down menu for choosing the different arrangements
  //add drag and drop to customize the arrangements too

  randomChoice = () => {
    let numChoice = Math.floor(Math.random() * this.state.choices.length);
    let choice = this.state.choices[numChoice];
    this.updateChoices(choice);
  };

  updateChoices = props => {
    let newChoices = [...this.state.choices].filter(item => item !== props);
    //passing callback to setState forces immediate update? -ish?
    this.setState(state => {
      return {
        choices: newChoices,
        chosen: props
      };
    });
  };

  emptySeat = props => {
    let newChoices = [...this.state.choices].filter(item => item !== props);
    this.setState(state => {
      return {
        choices: newChoices
      };
    });
  };

  handleClick = props => {
    if (props === "reset") {
      this.setState({
        choices: [...Array(36).keys()],
        chosen: null
      });
    } else if (props === "random") {
      this.randomChoice();
    } else {
      this.emptySeat(props);
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
