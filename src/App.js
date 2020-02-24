import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./components/header";
import MainContainer from "./components/main/index";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <MainContainer />
      </div>
    </Provider>
  );
}

export default App;
