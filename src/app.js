import React from "react";
import ReactDom from "react-dom";
import styles from "./app.css";

const App = () => {
  return (
    <div>
      <h1 className={styles.red}>Hello World</h1>
    </div>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
