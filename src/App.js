import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Note from "./Components/Note";
import EditNote from "./Components/EditNote";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Note} />
            <Route exact path="/edit/:id" component={EditNote} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
