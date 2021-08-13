import { BrowserRouter, Switch, Route } from "react-router-dom";

import './App.css';
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import ShowPages from "./pages/ShowPages";

function App() {
  return (
        <BrowserRouter>
      {/* <Header /> */}
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/search" component={SearchPage} />
        <Route path="/shows/:id" component={ShowPages} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
