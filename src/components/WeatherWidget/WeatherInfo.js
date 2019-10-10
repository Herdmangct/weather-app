import React from "react";

const WeatherInfo = props => {
  const {
    locality,
    temperature,
    temperatureUnit,
    windDirection,
    windSpeed,
    wind
  } = props;

  const celsiusToFahrenheit = degreesCelsius => {
    return (degreesCelsius * 1.8 + 32).toFixed(0);
  };

  return (
    <div style={styles.weatherInfoContainer}>
      <div style={styles.locality}>{locality}</div>
      <div style={styles.temperature}>
        {temperature && temperatureUnit === "Degrees"
          ? temperature
          : celsiusToFahrenheit(temperature)}
        &#176;
      </div>
      <div
        style={{
          ...styles.windContainer,
          visibility: wind === "On" ? "initial" : "hidden"
        }}
      >
        <span style={styles.wind}>Wind &nbsp;</span>
        <span style={styles.windSpeed}>
          {windDirection && windDirection} {windSpeed && windSpeed}km/h
        </span>
      </div>
    </div>
  );
};

const styles = {
  weatherInfoContainer: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    justifyContent: "space-around",
    marginLeft: "20px"
  },
  locality: { fontSize: "18px" },
  temperature: { fontSize: "50px", fontWeight: "bold" },
  windContainer: {
    display: "flex",
    flexDirection: "row"
  },
  wind: { fontSize: "14px", fontWeight: "bold" },
  windSpeed: { fontSize: "14px" }
};

export default WeatherInfo;
