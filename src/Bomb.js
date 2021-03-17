// your Bomb code here!
import React, { Component } from 'react';

export default class Bomb extends Component {

    state = {
        secondsLeft: this.props.initialCount
    }

    timeLeft = () => {
        if (this.state.secondsLeft == 0) {
            return <p>Boom!</p>
        }
        else {
            return <p>{this.state.secondsLeft} seconds left before I go boom!</p>
        }
    }

    render() {
        return (
            <p>{this.timeLeft()}</p>
        )
    }

}