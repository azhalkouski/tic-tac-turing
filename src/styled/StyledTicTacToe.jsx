import React from 'react';
import { Layer, Line } from 'react-konva';

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
