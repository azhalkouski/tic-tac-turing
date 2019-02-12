import React, { Component } from 'react';
import { Stage } from 'react-konva';
import { Board, Squares } from '../styled/StyledTicTacToe';

class TicTacToe extends Component {

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

  move = (marker, index) => {
    console.log('Move made ', marker, index);
    // placeholder
  }

  makeAiMove = () => {
    // placeholder
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
