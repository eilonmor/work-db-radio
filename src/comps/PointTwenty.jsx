// src/Points.js
import React, { useState, useEffect } from 'react';
import { Stage, Layer, Circle, Line, Text } from 'react-konva';
import scenarios from '../fiveSites.json';
import '../Point.css';

const pointCoordinates = [
    { x: 500, y: 125, nameCoordinate: "A" },
    { x: 615, y: 150, nameCoordinate: "B" },
    { x: 710, y: 200, nameCoordinate: "C" },
    { x: 770, y: 275, nameCoordinate: "D" },
    { x: 800, y: 370, nameCoordinate: "E" },
    { x: 770, y: 465, nameCoordinate: "F" },
    { x: 710, y: 540, nameCoordinate: "G" },
    { x: 615, y: 590, nameCoordinate: "H" },
    { x: 500, y: 570, nameCoordinate: "I" },
    { x: 385, y: 590, nameCoordinate: "J" },
    { x: 290, y: 540, nameCoordinate: "K" },
    { x: 230, y: 465, nameCoordinate: "L" },
    { x: 200, y: 370, nameCoordinate: "M" },
    { x: 230, y: 275, nameCoordinate: "N" },
    { x: 290, y: 200, nameCoordinate: "O" },
    { x: 385, y: 150, nameCoordinate: "P" },
    { x: 500, y: 125, nameCoordinate: "Q" },
    { x: 615, y: 150, nameCoordinate: "R" },
    { x: 710, y: 200, nameCoordinate: "S" },
    { x: 770, y: 275, nameCoordinate: "T" }
  ];  

const PointsTwenty = () => {
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [points, setPoints] = useState(scenarios[0]);

  useEffect(() => {
    setPoints(scenarios[scenarioIndex]);
    console.log('Scenario updated:', scenarios[scenarioIndex]);
  }, [scenarioIndex]);

  const handleInputChange = (e) => {
    const index = parseInt(e.target.value, 10);
    if (index >= 0 && index < scenarios.length) {
      setScenarioIndex(index);
    }
  };

  const lines = [];
  Object.keys(points).forEach((key) => {
    const startPoint = pointCoordinates[key - 1];
    points[key].forEach((endKey) => {
      const endPoint = pointCoordinates[endKey - 1];
      lines.push(
        <Line
          key={`${key}-${endKey}`}
          points={[startPoint.x, startPoint.y, endPoint.x, endPoint.y]}
          stroke="black"
        />
      );
    });
  });

  return (
    <div className="main-content">
      <div className="container">
        <Stage width={window.innerWidth * 1} height={window.innerHeight * 1}>
          <Layer>
            {pointCoordinates.map((point, index) => (
              <React.Fragment key={index + 1}>
                <Circle x={point.x} y={point.y} radius={15} fill="red" />
                <Text
                  x={point.x - 5}
                  y={point.y - 8}
                  text={point.nameCoordinate}
                  fontSize={25}
                  fill="white"
                  fontStyle="bold"
                />
              </React.Fragment>
            ))}
            {lines}
          </Layer>
        </Stage>
      </div>
      <div className="input-container">
        <label htmlFor="scenarioInput">Enter Scenario Index: 
          <input
            type="number"
            id="scenarioInput"
            value={scenarioIndex}
            onChange={handleInputChange}
            min="0"
            max={scenarios.length - 1}
          />
        </label>
      </div>
    </div>
  );
};

export default PointsTwenty;
