import React, {Component} from 'react'

export class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            time: new Date().toLocaleDateString(),
        }
    }

    componentDidMount() {
        this.intervalID = setInterval(() =>
        this.tick(),
        1000)
    }

    componentWillUnmount() {
        clearInterval(this.intervalID)
    }

    tick() {
        this.setState({
            time: new Date().toLocaleTimeString('en-GB', {timeStyle: 'short'}),
        })
    }

    render(){
        return (
            <h5>{this.state.time}</h5>
        )
    }
}