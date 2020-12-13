import React from 'react';
import './style.css';
export default class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    getText(playerTurn) {
        if(playerTurn === "X") {
            return "Player 1's Turn";
        }
        if(playerTurn === "O") {
            return "Player 2's Turn";
        }
    }

    render () {
    return (<div className = "turn">{this.getText(this.props.turn)}</div>);
    }
}