import React from "react";

const HeaderBar = () => {
  return <div style={styles.headerBar}></div>;
};

const styles = {
  headerBar: {
    maxWidth: "760px",
    width: "100%",
    height: "4px",
    backgroundColor: "#1876d2",
    marginBottom: "10px",
    marginTop: "10px"
  }
};

export default HeaderBar;
