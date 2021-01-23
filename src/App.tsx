import { useState } from "react";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { client } from "./client";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
