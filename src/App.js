import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/layout/Header";
<<<<<<< HEAD

=======
import Footer from './components/layout/Footer'
 
>>>>>>> 2ab5e6a9f271fd7f2b048959907a79137239928a
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import ShowPages from "./pages/ShowPage";

function App() {
<<<<<<< HEAD
	return (
		<BrowserRouter>
			<Header />

			<Switch>
				<Route path="/" exact component={HomePage} />
				<Route path="/search" component={SearchPage} />
				<Route path="/shows/:id" component={ShowPages} />
			</Switch>
		</BrowserRouter>
	);
=======
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
>>>>>>> 2ab5e6a9f271fd7f2b048959907a79137239928a
}

export default App;
