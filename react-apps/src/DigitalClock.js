import React, { Component } from "react";

class DigitalClock extends Component {
    constructor(){
        super();
        this.state = {
            time: new Date()
        };
    }

    componentDidMount(){
        this.intervalID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount(){
        clearInterval(this.intervalID)
    }

    tick () {
        this.setState({
            time: new Date()
        });
    } 

    render(){
        const {time} = this.state
        const hrs = time.getHours().toString()
        const min = time.getMinutes().toString()
        const sec = time.getSeconds().toString()
        return <div>
            <h1>Digital Clock</h1>

            <div className="clock">
                {hrs}:{min}:{sec}
            </div>
        </div>
    }
}

export default DigitalClock;
