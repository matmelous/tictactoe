import React from "react";
import "./App.css";
import Game from "./views/Game";
import { Provider as ReduxProvider } from "react-redux";
import store from "./state/store";

function App() {
  return (
    <ReduxProvider store={store}>
      <div className="App">
        <Game />
      </div>
    </ReduxProvider>
  );
}

export default App;
