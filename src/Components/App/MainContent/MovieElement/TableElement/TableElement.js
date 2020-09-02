import React, { useState, useEffect } from "react";
import "./TableElement.scss";

const TableElement = (props) => {
  const [planetsAPIs, setPlanetsAPIs] = useState(props.planets);
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    planetsAPIs.forEach((planetAPI) => {
      fetch(planetAPI)
        .then((resp) => resp.json())
        .then((data) =>
          setPlanets((prevState) => {
            return [...prevState, data];
          })
        );
    });
  }, []);

  return (
    <div className="tableElement">
      <table>
        <thead>
          <tr>
            <th>
              Planet
              <br /> Name
            </th>
            <th>
              Rotation
              <br /> Period
            </th>
            <th>
              Orbital
              <br /> Period
            </th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>
              Surface
              <br /> Water
            </th>
            <th>Population</th>
          </tr>
        </thead>
        <tbody>
          {planets.map((planet, index) => {
            return (
              <tr key={index}>
                <td>{planet.name}</td>
                <td>{planet.rotation_period}</td>
                <td>{planet.orbital_period}</td>
                <td>{planet.diameter}</td>
                <td>{planet.climate}</td>
                <td>{planet.surface_water}</td>
                <td>{planet.population}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableElement;
