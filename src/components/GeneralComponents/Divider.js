import React from "react";

const Divider = () => {
  return <div style={styles.divider}></div>;
};

const styles = {
  divider: {
    width: "2px",
    borderLeft: "1px solid ",
    borderLeftColor: "#c9c9c9",
    margin: "30px",
    marginTop: "40px",
    marginBottom: "40px",
    boxShadow: "0 0 1px 0 white inset, 0 0 1px 0 white"
  }
};

export default Divider;
