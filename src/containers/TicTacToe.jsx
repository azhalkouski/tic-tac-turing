import React, { Component } from 'react';
import { Stage } from 'react-konva';
import { Board } from '../styled/StyledTicTacToe';

class TicTacToe extends Component {

  state = {
    rows: 3,
    gameState: new Array(9).fill(false),
    ownMark: 'X',
    otherMark: 'O',
    gameOver: false,
    yourTurn: true,
    winner: false,
    win: false,
  }

  componentDidMount() {
    const height = window.innerHeight;
    const width = window.innerWidth;
    const size = height < width ? height * .8 : width * .8;
    const rows = this.state.rows;
    const unit = size / rows;

    this.setState({
      size,
      unit,
    });
  }

  move = () => {
    // placeholder
  }

  makeAiMove = () => {
    // placeholder
  }

  turingTest = () => {}

  recordGame = () => {}

  render() {
    const { unit, rows, size } = this.state;
    return (
      <div>
        <Stage
          width={size}
          height={size}
        >
          <Board unit={unit} rows={rows} size={size} />
          {/* <Squares /> */}
        </Stage>
      </div>
    );
  }
}

export default TicTacToe;
