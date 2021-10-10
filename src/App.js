import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from './components/layout/Footer'
 
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import ShowPages from "./pages/ShowPage";

function App() {
  return (
    <BrowserRouter>

      <Header />

      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/search" component={SearchPage} />
        <Route path="/shows/:id" component={ShowPages} />
        
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
