import React, { Component } from "react";

// My Components
import WeatherWidget from "./WeatherWidget/WeatherWidget";
import Form from "./Form";
import Divider from "./GeneralComponents/Divider";

// External Libraries
import axios from "axios";

// API Key
import { API_KEY } from "../API/weatherAPI";

class WidgetEditor extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      weatherIconID: "",
      locality: "",
      temperatureUnit: "Degrees",
      temperature: "",
      wind: "On",
      windDirection: "",
      windSpeed: ""
    };
    this.getTitle = this.getTitle.bind(this);
    this.getTemperatureUnit = this.getTemperatureUnit.bind(this);
    this.getWindState = this.getWindState.bind(this);
  }

  componentDidMount() {
    this.fetchWeatherConditions();
  }

  getTitle(title) {
    this.setState({ title: title && title.toUpperCase().substring(0, 16) });
  }

  getTemperatureUnit(temperatureUnit) {
    this.setState({ temperatureUnit: temperatureUnit });
  }

  getWindState(wind) {
    this.setState({ wind: wind });
  }

  windDegreesToCardinalDirection = windDegrees => {
    /* Turns wind direction in degrees into one of the 8 cardinal wind directions */
    const cardinalDirections = [
      "N",
      "NE",
      "E",
      "SE",
      "S",
      "SW",
      "W",
      "NW",
      "N"
    ];
    const compassIndex = Math.round((windDegrees % 360) / 45);
    return cardinalDirections[compassIndex];
  };

  async fetchWeatherConditions() {
    // Check if navigator.geolocation is present because some browsers do not have this capability
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;

          axios
            .get(
              `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
            )
            .then(({ data }) => {
              const { name, main, wind, weather } = data;
              this.setState({
                locality: name,
                weatherIconID: weather && weather[0].icon,
                temperature: main.temp.toFixed(0),
                windSpeed: wind.speed.toFixed(0),
                windDirection: this.windDegreesToCardinalDirection(wind.deg)
              });
            });
        },
        error => {
          switch (error.code) {
            case error.PERMISSION_DENIED:
              alert("User denied the request for Geolocation.");
              break;
            case error.POSITION_UNAVAILABLE:
              alert("Location information is unavailable.");
              break;
            case error.TIMEOUT:
              alert("The request to get user location timed out.");
              break;
            default:
              alert("An unknown error occurred.");
              break;
          }
        }
      );
    }
  }

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.weatherWidgetContainer}>
          <Form
            getTitle={this.getTitle}
            getTemperatureUnit={this.getTemperatureUnit}
            getWindState={this.getWindState}
          />
          <Divider />
          <WeatherWidget
            title={this.state.title}
            weatherIconID={this.state.weatherIconID}
            locality={this.state.locality}
            temperature={this.state.temperature}
            temperatureUnit={this.state.temperatureUnit}
            windDirection={this.state.windDirection}
            windSpeed={this.state.windSpeed}
            wind={this.state.wind}
          />
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    justifyItems: "center"
  },
  weatherWidgetContainer: {
    width: "760px",
    height: "380px",
    backgroundColor: "#f5f5f5",

    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    justifyItems: "center",

    padding: "55px",

    border: "1px solid",
    borderColor: "#c9c9c9",
    borderBottomLeftRadius: "10px",
    borderBottomRightRadius: "10px"
  },
  contentContainer: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    margin: "40px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    justifyItems: "center"
  }
};

export default WidgetEditor;
