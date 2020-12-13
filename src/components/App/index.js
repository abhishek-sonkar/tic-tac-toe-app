import React from 'react';
import './style.css';
import Header from '../Header';
import GridRow from '../GridRow';
import Footer from '../Footer';
export default class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      playerTurn: "X",
      boardState: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ],
    };
    this.playerClick = this.playerClick.bind(this);
  }

  playerClick(i, j) {
    if(this.state.boardState[i][j] === "") {
      const currBoardState = [...this.state.boardState]; //here making a copy of boardState to update original state
      currBoardState[i][j] = this.state.playerTurn;
      this.setState({
        boardState: currBoardState,
        playerTurn: this.state.playerTurn === "X" ? "O" : "X"
      });
    }
  }

  componentDidUpdate() {
    let won = true;
    
    //checking for rows
    for(let i=0; i<3; i++) {
      won = true;
      for(let j=1; j<3; j++) {
        if(this.state.boardState[i][j] !== this.state.boardState[i][j-1]) {
          won = false;
          break;
        }
      }
      if(won && this.state.boardState[i][0] !== "") {
        return this.alertWin(this.state.boardState[i][0]);
      }
    }
    
    //checking for columns
    for(let j=0; j<3; j++) {
      won = true;
      for(let i=1; i<3; i++) {
        if(this.state.boardState[i][j] !== this.state.boardState[i-1][j]) {
          won = false;
          break;
        }
      }
      if(won && this.state.boardState[0][j] !== "") {
        return this.alertWin(this.state.boardState[0][j]);
      }
    }
    
    //checking for digonal
    won = true;
    for(let i=1; i<3; i++) {
      if(this.state.boardState[i][i] !== this.state.boardState[i-1][i-1]) {
        won = false;
        break;
      }
    }
    if(won && this.state.boardState[0][0] !== "") {
      return this.alertWin(this.state.boardState[0][0]);
    }
    
    //checking for anti-digonal
    won = true;
    for(let i=1; i<3; i++) {
      if(this.state.boardState[i][2-i] !== this.state.boardState[i-1][2-i+1]) {
        won = false;
        break;
      }
    }
    if(won && this.state.boardState[2][0] !== "") {
      return this.alertWin(this.state.boardState[2][0]);
    }
    
    //checking for draw
    let draw = true;
    for(let i=0; i<3; i++) {
      for(let j=0; j<3; j++) {
        if(this.state.boardState[i][j] === "") {
          draw = false;
        }
      }
      if(draw === false) {
        break;
      }
    }
    if(draw) {
      return this.alertDraw();
    }
  }

  alertWin(playerWon) {
    if(playerWon === "X") {
      alert("Congratulations! Player1 Wins");
    }
    else {
      alert("Congratulations! Player2 Wins");
    }
    this.resetGame();
  }
  alertDraw() {
    alert("Draw!");
    this.resetGame();
  }

  resetGame() {
    this.setState({
      playerTurn: "X",
      boardState: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ],
    });
  }

  render() {
    return (
        <div className = "container">
        <Header/>
          <div id = "board">
            {this.state.boardState.map((boardRow, rowIdx) => (
              <GridRow
                key = {rowIdx}
                row = {boardRow}
                rowIdx = {rowIdx}
                playerClickCallBack = {this.playerClick}
              />
            ))}
          </div>
        <Footer turn = {this.state.playerTurn}/>
        </div>
    );
  }
}