import React, { useState, useEffect } from "react";
import LoadingScreen from "./LoadingScreen/LoadingScreen";
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

  if (planets.length == planetsAPIs.length) {
    return (
      <div className="tableElement">
        <table>
          <thead>
            <tr>
              <th>
                Planet
                <br /> Name
                <button></button>
                <button></button>
              </th>
              <th>
                Rotation
                <br /> Period
                <button></button>
                <button></button>
              </th>
              <th>
                Orbital
                <br /> Period
                <button></button>
                <button></button>
              </th>
              <th>
                Diameter
                <button></button>
                <button></button>
              </th>
              <th>
                Climate
                <button></button>
                <button></button>
              </th>
              <th>
                Surface
                <br /> Water
                <button></button>
                <button></button>
              </th>
              <th>
                Population
                <button></button>
                <button></button>
              </th>
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
  } else {
    return <LoadingScreen />;
  }
};

export default TableElement;
