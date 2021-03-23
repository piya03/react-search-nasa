import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./Component/HomePage/HomePage";
import ShowSearchResult from "./Component/SearchResult/ShowSearchResult";
function App() {
  return (
    <Router>
      <div></div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/search" component={ShowSearchResult} />
      </Switch>
    </Router>
  );
}

export default App;
