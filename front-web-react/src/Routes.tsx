import Navbar from "components/Navbar";
import Home from "pages/Home";
import ListCompetitors from "pages/ListCompetitors";
import ListHiking from "pages/ListHiking";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Routes = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route> 

        <Route path="/competidores">
          <ListCompetitors />
        </Route> 

        <Route path="/pistas">
          <ListHiking />
        </Route>        
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
