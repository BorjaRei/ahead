import React, { Component } from "react";

class TimeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { time: new Date().toLocaleTimeString() };
    }
    componentDidMount() {
        this.interval = setInterval(
            () => this.setState({ time: new Date().toLocaleTimeString() }),
            1000
        );
    }
    render() {
        return (
            <div className="box-reloj">
                <h1> {this.state.time}</h1>
            </div>
        );
    }
}

export default TimeComponent;
