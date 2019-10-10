import React from "react";

// Semantic UI Components
import { Loader } from "semantic-ui-react";

// My Components
import WeatherIcon from "./WeatherIcon";
import WeatherInfo from "./WeatherInfo";

const WeatherWidget = props => {
  const {
    title,
    weatherIconID,
    locality,
    temperature,
    temperatureUnit,
    windDirection,
    windSpeed,
    wind
  } = props;

  return (
    <div style={styles.weatherWidgetContainer}>
      <h3 style={styles.title}>{title ? title : "TITLE OF WIDGET"}</h3>
      {weatherIconID ? (
        <div style={styles.contentContainer}>
          <WeatherIcon weatherIconID={weatherIconID} />
          <WeatherInfo
            locality={locality}
            temperature={temperature}
            temperatureUnit={temperatureUnit}
            windDirection={windDirection}
            windSpeed={windSpeed}
            wind={wind}
          />
        </div>
      ) : (
        <Loader active inline="centered" />
      )}
    </div>
  );
};

const styles = {
  weatherWidgetContainer: {
    width: "100%",
    maxWidth: "302.14px",
    backgroundColor: "white",

    flex: 1,
    display: "flex",
    flexDirection: "column",

    padding: "30px",
    marginTop: "20px",
    marginBottom: "20px",

    borderRadius: "5px",

    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
  },
  title: {
    marginBottom: "30px"
  },
  contentContainer: { display: "flex", flexDirection: "row" }
};

export default WeatherWidget;
