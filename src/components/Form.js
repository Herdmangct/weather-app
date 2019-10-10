import React, { Component } from "react";

// Semantic UI
import { Input } from "semantic-ui-react";
import { Radio } from "semantic-ui-react";

class Form extends Component {
  constructor() {
    super();
    this.state = { title: "", temperatureUnit: "Degrees", wind: "On" };
    this.handleInput = this.handleInput.bind(this);
    this.preventSubmit = this.preventSubmit.bind(this);
    this.handleTemperatureChange = this.handleTemperatureChange.bind(this);
    this.handleWindChange = this.handleWindChange.bind(this);
  }
  handleInput(event) {
    this.setState({ title: event.target.value });
    this.props.getTitle(event.target.value);
  }

  handleTemperatureChange(event, { value }) {
    this.setState({ temperatureUnit: value });
    this.props.getTemperatureUnit(value);
  }

  handleWindChange(event, { value }) {
    this.setState({ wind: value });
    this.props.getWindState(value);
  }

  preventSubmit(event) {
    /* Prevent submission of the form */
    event.preventDefault();
  }

  render() {
    return (
      <div style={styles.formContainer}>
        <form style={styles.form} onSubmit={this.preventSubmit}>
          <div style={styles.formItem}>
            <label style={styles.label}>Title</label>
            <Input
              type="text"
              placeholder="Title of widget"
              value={this.state.title}
              onInput={this.handleInput}
            />
          </div>
          <div style={styles.formItem}>
            <label style={styles.label}>Temperature</label>
            <div style={styles.radioButtonContainer}>
              <Radio
                label="&#176;C"
                value="Degrees"
                checked={this.state.temperatureUnit === "Degrees"}
                onChange={this.handleTemperatureChange}
                style={styles.radioButton}
              />
              <Radio
                label="&#176;F"
                value="Fahrenheit"
                checked={this.state.temperatureUnit === "Fahrenheit"}
                onChange={this.handleTemperatureChange}
                style={styles.radioButton}
              />
            </div>
          </div>
          <div style={styles.formItem}>
            <label style={styles.label}>Wind</label>
            <div style={styles.radioButtonContainer}>
              <Radio
                label="On"
                value="On"
                checked={this.state.wind === "On"}
                onChange={this.handleWindChange}
                style={styles.radioButton}
              />
              <Radio
                label="Off"
                value="Off"
                checked={this.state.wind === "Off"}
                onChange={this.handleWindChange}
                style={styles.radioButton}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const styles = {
  formContainer: {
    flex: 1,
    display: "flex"
  },
  form: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "column"
  },
  formItem: {
    display: "flex",
    flexDirection: "column"
  },
  label: {
    marginBottom: "5px"
  },
  radioButtonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    justifyItems: "center",
    marginTop: "5px",
    marginRight: "40%"
  },
  radioButton: {
    fontSize: "17px"
  }
};

export default Form;
