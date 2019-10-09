import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <div style={styles.formContainer}>
        <form
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column"
          }}
        >
          <label>Title</label>
          <input type="text" placeholder="Title of widget"></input>
          <label>Temperature</label>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              justifyItems: "center"
            }}
          >
            <label>
              &#176;C
              <input
                type="radio"
                value="option1"
                checked={true}
                onChange={() => {}}
              ></input>
            </label>
            <label>
              &#176;F
              <input
                type="radio"
                value="option1"
                checked={false}
                onChange={() => {}}
              ></input>
            </label>
          </div>
          <label>Wind</label>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              justifyItems: "center"
            }}
          >
            <label>
              On
              <input
                type="radio"
                value="option1"
                checked={true}
                onChange={() => {}}
              ></input>
            </label>
            <label>
              Off
              <input
                type="radio"
                value="option1"
                checked={false}
                onChange={() => {}}
              ></input>
            </label>
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
  }
};

export default Form;
