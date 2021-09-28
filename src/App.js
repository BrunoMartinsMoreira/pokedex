import React from "react";
import List from "./Pokemon/List/List";
import View from "./Pokemon/View/View";
import AppProvider from "./AppContext/Provider";
import AppContext from "./AppContext/Context";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <AppProvider>
        <Router>
          <h1>
            <Link to="/pokemons/list">Pokedex capenga</Link>
          </h1>

          <AppContext.Consumer>
            {({ user }) => (
              <p className="user">
                <span> Nome: {user && user.name} </span>{" "}
                <span>
                  Total de pokemons visualizados:{" "}
                  {Object.keys(user.pokedex).length}
                </span>
              </p>
            )}
          </AppContext.Consumer>

          <Switch>
            <Route path="/pokemons/list" component={List} />
            <Route path="/pokemons/:name" component={View} />
            <Route path="/" exact>
              <Redirect to="/pokemons/list" />
            </Route>
          </Switch>
        </Router>
      </AppProvider>
    </div>
  );
}
