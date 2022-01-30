import Navbar from 'components/Navbar';
import AddRunner from 'pages/AddRunner';
import AddHiking from 'pages/AddHiking';
import Home from 'pages/Home';
import ListCompetitors from 'pages/ListCompetitors';
import ListHiking from 'pages/ListHiking';
import UpdateCompetitor from 'pages/UpdateRunner';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Routes = () => {
  return (
    <BrowserRouter>
      <Navbar />
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

        <Route path="/atualizar">
          <UpdateCompetitor />
        </Route>

        <Route path="/adicionar/Competidor">
          <AddRunner />
        </Route>

        <Route path="/adicionar/pista">
          <AddHiking />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
