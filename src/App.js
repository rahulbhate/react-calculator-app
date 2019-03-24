import React, { Component } from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import ClearButton from "./components/ClearButton";

class App extends Component {
  state = {
    input: "",
    previousNumber: "",
    currentNumber: "",
    operator: ""
  }

  addToInput = val => {
    this.setState( prevState => ({
      input : prevState.input + val
    }))
  };

 

  addDecimal = val => {
    // only add decimal if there is no current decimal point present in the input area
    if (this.state.input.indexOf(".") === -1) {
      this.setState( prevState => ({
        input : prevState.input + val
      }))
    }
  };

  addZeroToInput = val => {
    // if this.state.input is not empty then add zero
    if (this.state.input !== "") {
      this.setState( prevState => ({
        input : prevState.input + val
      }))
    }
  };

  clearInput = () => {
    this.setState({ input: "" });
  };

  add = () => {
    this.setState({ previousNumber: this.state.input });
    this.setState({ input: "" });
    this.setState({ operator: "plus" });
  };

  subtract = () => {
    this.setState({ previousNumber: this.state.input });
    this.setState({ input: "" });
    this.setState({ operator: "subtract" });
  };
  
  multiply = () => {
    this.setState({ previousNumber: this.state.input });
    this.setState({ input: "" });
    this.setState({ operator: "multiply" });
  };

  divide = () => {
    this.setState({ previousNumber: this.state.input });
    this.setState({ input: "" });
    this.setState({ operator: "divide" });
  };

  evaluate = () => {
    this.state.currentNumber = this.state.input;
    if (this.state.operator === "plus") {
      this.setState({
        input:
          parseFloat(this.state.previousNumber) +
          parseFloat(this.state.currentNumber)
      });
    } else if (this.state.operator === "subtract") {
      this.setState({
        input:
          parseFloat(this.state.previousNumber) -
          parseFloat(this.state.currentNumber)
      });
    } else if (this.state.operator === "multiply") {
      this.setState({
        input:
          parseFloat(this.state.previousNumber) *
          parseFloat(this.state.currentNumber)
      });
    } else if (this.state.operator === "divide") {
      this.setState({
        input:
          parseFloat(this.state.previousNumber) /
          parseFloat(this.state.currentNumber)
      });
    }
  };

  render() {
    return (
      <div className="App">
        <div className="calc-wrapper">
          <div className="row">
            <Input>{this.state.input}</Input>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.divide}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.multiply}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.add}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addDecimal}>.</Button>
            <Button handleClick={this.addZeroToInput}>0</Button>
            <Button handleClick={this.evaluate}>=</Button>
            <Button handleClick={this.subtract}>-</Button>
          </div>
          <div className="row">
            <ClearButton handleClear={this.clearInput}>Clear</ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
