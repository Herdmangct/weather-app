import React from "react";

const WeatherIcon = props => {
  const { weatherIconID } = props;

  return (
    <div style={styles.weatherIconContainer}>
      <img
        src={`https://openweathermap.org/img/wn/${weatherIconID}@2x.png`}
        style={styles.image}
        alt="Temperature"
      />
    </div>
  );
};

const styles = {
  weatherIconContainer: { display: "flex", flex: 1 },
  image: { width: "100%", height: "100%" }
};

export default WeatherIcon;
