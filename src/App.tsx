import { SearchPage } from "./pages/Search";
// import { Login } from "./pages/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { client } from "./client";

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          {/* <Route path="/login" exact>
            <Login />
          </Route> */}
          <Route path="/search" exact>
            <SearchPage />
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
