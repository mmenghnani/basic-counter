import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(){
    super();
    this.state = {
      count : 1
    }
  }
  render() {
    return (
      <section className="Counter">
        <h1>Count: {this.state.count}</h1>
        <button onClick={() => {
          this.setState({
            count : this.state.count + 1
          })
        }} className="full-width">Increment</button>
        <button onClick={() => {
          this.setState({
           count : this.state.count ? this.state.count - 1 : this.state.count
          })
        }} className="full-width">Decrement</button>
        <button onClick={() => { this.setState({
            count : 1
          })}} className="full-width">Reset</button>
      </section>
    );
  }
}
