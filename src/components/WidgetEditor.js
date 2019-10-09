import React, { Component } from "react";

// My Components
import WeatherWidget from "./WeatherWidget";
import Form from "./Form";
import Divider from "./Divider";

class WidgetEditor extends Component {
  render() {
    return (
      <div style={styles.contentContainer}>
        <div style={styles.weatherWidgetContainer}>
          <Form />
          <Divider />
          <WeatherWidget />
        </div>
      </div>
    );
  }
}

const styles = {
  contentContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    justifyItems: "center"
  },
  weatherWidgetContainer: {
    width: "100%",
    height: "100%",
    maxWidth: "686px", // equals 800px in browser...
    maxHeight: "287px", // equals 400px in browser...
    backgroundColor: "#f5f5f5",

    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    justifyItems: "center",

    margin: "10px",
    padding: "3%",

    border: "1px solid",
    borderColor: "#c9c9c9",
    borderBottomLeftRadius: "10px",
    borderBottomRightRadius: "10px"
  }
};

export default WidgetEditor;
