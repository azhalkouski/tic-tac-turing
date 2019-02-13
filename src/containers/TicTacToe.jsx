import React, { Component } from 'react';
import { Stage } from 'react-konva';
import { Board, Squares } from '../styled/StyledTicTacToe';

const random = (min, max) => {
  const $min = Math.ceil(min);
  const $max = Math.floor(max);
  return Math.floor(Math.random() * ($max - $min)) + $min;
}

class TicTacToe extends Component {

  constructor(props) {
    super(props);

    this.combos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  }

  state = {
    rows: 3,
    unit: 0,
    size: 0,
    gameState: new Array(9).fill(false),
    ownMark: 'X',
    otherMark: 'O',
    gameOver: false,
    yourTurn: true,
    winner: false,
    win: false,
    coordinates: [],
  }

  componentDidMount() {
    const height = window.innerHeight;
    const width = window.innerWidth;
    const size = height < width ? height * .8 : width * .8;
    const rows = this.state.rows;
    const unit = size / rows;
    let coordinates = [];

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < rows; x++) {
        coordinates.push([x*unit, y*unit]);
      }
    }

    this.setState({
      size,
      unit,
      coordinates,
    });
  }

  move = (index, marker) => {
    // TODO: simplify this
    this.setState( (prevState, prop) => {
      let {gameState, yourTurn, gameOver, winner} = prevState;
      const aiTurn = !yourTurn
      gameState.splice(index, 1, marker);

      const foundWin = this.winChecker(gameState)
      if (foundWin) {
        winner = gameState[foundWin[0]]
      }
      if (foundWin || !gameState.includes(false)) {
        gameOver = true
      }
      if (!aiTurn && !gameOver) {
        this.makeAiMove(gameState)
      }
      return {
        gameState,
        yourTurn: aiTurn,
        gameOver,
        win: foundWin || false,
        winner
      }
    })
  }

  makeAiMove = (gameState) => {
    const { otherMark } = this.state;
    const openSquares = [];

    gameState.forEach((square, index) => {
      if (!square) {
        openSquares.push(index);
      }
    });

    const aiMove = openSquares[random(0, openSquares.length)];

    this.move(aiMove, otherMark);
  }

  winChecker = (gameState) => {
    const combos = this.combos;

    return combos.find((combo) => {
      const [a, b, c] = combo;
      return (gameState[a] && gameState[a] === gameState[b] && gameState[a] && gameState[c]);
    });
  }

  turingTest = () => {}

  recordGame = () => {}

  render() {
    const {
      unit,
      rows,
      size,
      coordinates,
      gameState,
      win,
      gameOver,
      yourTurn,
      ownMark,
    } = this.state;

    return (
      <div>
        <Stage
          width={size}
          height={size}
        >
          <Board unit={unit} rows={rows} size={size} />
          <Squares
            unit={unit}
            coordinates={coordinates}
            gameState={gameState}
            win={win}
            gameOver={gameOver}
            yourTurn={yourTurn}
            ownMark={ownMark}
            move={this.move}
          />
        </Stage>
      </div>
    );
  }
}

export default TicTacToe;
