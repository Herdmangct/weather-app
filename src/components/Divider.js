import React, { Component } from "react";

class Divider extends Component {
  render() {
    return <div style={styles.divider}></div>;
  }
}

const styles = {
  divider: {
    width: "1px",
    borderLeft: "1px solid ",
    borderLeftColor: "#c9c9c9",
    // backgroundColor: "#d1d1d1",
    margin: "20px",
    boxShadow: "0 0 1px 0 white inset, 0 0 1px 0 white"
  }
};

export default Divider;
