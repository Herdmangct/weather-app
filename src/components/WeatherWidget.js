import React, { Component } from "react";

class WeatherWidget extends Component {
  render() {
    return (
      <div style={styles.weatherWidgetContainer}>
        <div id="card">
          <div>Title of widget</div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div>image</div>
            <div id="info" style={{ display: "flex", flexDirection: "column" }}>
              <div>Sydney</div>
              <div>26&#176;</div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div>Wind</div>
                <div>NE 24km/h</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  weatherWidgetContainer: {
    flex: 1,
    // width: "100%",
    // height: "100%",
    display: "flex",
    flexDirection: "row"
  }
};

export default WeatherWidget;
