import React, { Component } from "react";

class Photo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: "",
            click:false,
        };
    }

    findImage(params) {
        fetch("https://picsum.photos/200").then((res) =>
            fetch(res.url).then((res2) => {
                this.setState({ img: res2.url });
            })
        );
    }
    componentDidMount() {
        this.findImage();
        this.interval = setInterval(() => this.findImage(), 4000);
    }
    changeClick(){
        if ((this.state.click = true)) {
            this.setState({ click: false });
            //this.interval = setInterval(() => this.findImage(), 4000);
        } else {
            this.setState({ click: true });
            clearInterval(this.interval);
        }
    }
    render() {
        return (
            <div className="box-reloj">
                <img src={this.state.img} onClick={this.changeClick()}/>
            </div>
        );
    }
}

export default Photo;
