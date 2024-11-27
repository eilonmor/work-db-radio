// src/Points.js
import React, { useState, useEffect } from 'react';
import { Stage, Layer, Circle, Line, Text } from 'react-konva';
import scenarios from '../fiveSites.json';
import '../Point.css';


const pointCoordinates = [
  { x: 25, y: 300, nameCoordinate:"a" },
  { x: 250, y: 450, nameCoordinate:"b" },
  { x: 500, y: 300, nameCoordinate:"c"},
  { x: 90, y: 180, nameCoordinate:"d" },
  { x: 350, y: 150, nameCoordinate:"e" }
];

const Points = () => {
  const scenarios2 = scenarios.filter((scenario)=>{
    return true 
  })
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [points, setPoints] = useState(scenarios2[0]);

  useEffect(() => {
    setPoints(scenarios2[scenarioIndex]);
    console.log('Scenario updated:', scenarios2[scenarioIndex] + "\noriginal: ", scenarios.indexOf(scenarios2[scenarioIndex]))
  }, [scenarioIndex]);

  const handleInputChange = (e) => {
    const index = parseInt(e.target.value, 10);
    if (index >= 0 && index < scenarios2.length) {
      setScenarioIndex(index);
      console.log(scenarios.indexOf(scenarios2[index]))
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
        <Stage width={window.innerWidth * 0.95} height={window.innerHeight * 0.95}>
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
            max={scenarios2.length - 1}
          />
        </label>
      </div>
    </div>
  );
};

export default Points;
