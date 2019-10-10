import React, { Component } from "react";

// My Components
import WidgetEditor from "./components/WidgetEditor";
import HeaderBar from "./components/GeneralComponents/HeaderBar";

class App extends Component {
  render() {
    return (
      <div style={styles.appContainer}>
        <HeaderBar />
        <WidgetEditor />
      </div>
    );
  }
}

const styles = {
  appContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
};

export default App;
