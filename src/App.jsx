import React from "react";
import "./App.css"
import Intro from "./pages/Intro";

function App() {
  return (
    <div className="outer-wrapper">
      <div className="wrapper">

      <section className="first">
        <Intro />
      </section>
      <section className="second">
        <Intro />
      </section>
      <section className="third">
        <Intro />
      </section>
      <section className="fourth">
        <Intro />
      </section>
      </div>
    </div>
  );
}

export default App;
