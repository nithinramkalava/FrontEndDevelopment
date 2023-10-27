import {Component} from 'react';

export default class Counter extends Component {

    constructor(){
        super()
        this.state = {count:0}
    }

    incr = () => {
        this.setState({count: this.state.count + 1})
    }
    
    decr = () => {
        this.setState({count: this.state.count - 1})
    }

    render() {
        return <div>
                <button onClick={this.decr}>-</button>
                <p>{this.state.count}</p>
                <button onClick={this.incr}>+</button>
            </div>;
    }
}