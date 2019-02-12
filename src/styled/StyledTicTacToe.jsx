import React from 'react';
import { Layer, Line, Text } from 'react-konva';

export const Board = ({ unit, size, rows }) => {
  let grid = [];
  const strokeColor = 'grey';
  const strokeWidth = 10;

  for (let i = 1; i < rows; i++) {
    const position = unit * i;

    // create vertical line
    grid.push(
      <Line
        points={[ position, 0, position, size ]}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        key={i+'v'}
      />
    );

    // create horizontal line
    grid.push(
      <Line
        points={[ 0, position, size, position ]}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        key={i+'h'}
      />
    );
  }

  return (
    <Layer>
      {grid}
    </Layer>
  );
};

export const Squares = ({
  unit,
  coordinates,
  gameState,
  win,
  gameOver,
  yourTurn,
  ownMark,
  move,
}) => {
  const squares = coordinates.map((position, index) => {
    let makeMove= move;
    const mark = gameState[index];
    let fill = 'black';
    if (win && win.includes(index)) {
      fill = 'lightgreen';
    }
    if (gameOver || !yourTurn || mark) {
      makeMove = () => console.log('Nope!');
    }

    return (
      <Text
        key={index}
        index={index}
        x={position[0]}
        y={position[1]}
        fontSize={unit}
        width={unit}
        text={mark}
        fill={fill}
        fontFamily={'Helvetica'}
        align={'center'}
        onClick={(e) => {
          const index = e.target.index;
          console.log('onClick');
          makeMove(index, ownMark);
        }}
      />
    );
  });

  return (
    <Layer>
      {squares}
    </Layer>
  );
};
