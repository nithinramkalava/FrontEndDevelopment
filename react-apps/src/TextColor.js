import React, { Component } from 'react';

class TextColor extends Component {
  constructor() {
    super();
    this.state = {
      textColor: 'black'
    };
  }

  changeColor = () => {
    const colors = ['red', 'blue', 'green', 'purple', 'orange'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    this.setState({ textColor: randomColor });
  };

  render() {
    const { textColor } = this.state;

    return (
      <div>
        <p style={{ color: textColor }}>Text Color Changer</p>
        <button onClick={this.changeColor}>Change Text Color</button>
      </div>
    );
  }
}

export default TextColor;
