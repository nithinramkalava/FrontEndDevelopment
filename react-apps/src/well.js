import React, {Component} from 'react'
class DigitalClock extends Component {
    constructor() {
      super();
      this.state = {
        time: new Date(),
      };
    }
  
    componentDidMount() {
      this.intervalID = setInterval(
        () => this.tick(),
        1000 // Update the clock every second
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.intervalID);
    }
  
    tick() {
      this.setState({
        time: new Date(),
      });
    }
  
    render() {
      const { time } = this.state;
      const hours = time.getHours().toString().padStart(2, "0");
      const minutes = time.getMinutes().toString().padStart(2, "0");
      const seconds = time.getSeconds().toString().padStart(2, "0");
  
      return (
        <div>
          <h1>Digital Clock</h1>
          <div className="clock">
            {hours}:{minutes}:{seconds}
          </div>
        </div>
      );
    }
  }
  
  export default DigitalClock;