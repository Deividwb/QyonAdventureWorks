import Navbar from 'components/Navbar';
import AddRunner from 'pages/AddRunner';
import AddRunWay from 'pages/AddRunWay';
import Home from 'pages/Home';
import ListCompetitors from 'pages/ListCompetitors';
import ListRunWay from 'pages/ListRunWay';
import RunWayDetails from 'pages/RunWayDetails';
import UpdateCompetitor from 'pages/UpdateRunner';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Runner } from 'types/runner';


const Routes = () => {

const runner: Runner = {
  
    "id": 1,
    "name": "DeividW",
    "sexo": "Masculino",
    "bodyTemperature": 35,
    "weight": 81,
    "height": 1.72
  }


  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/competidores">
          <ListCompetitors runner={runner}/>
        </Route>

        <Route path="/pistas" exact>
          <ListRunWay />
        </Route>

        <Route path="/pistas/:id">
          <RunWayDetails />
        </Route>

        <Route path="/atualizar/:id">
          <UpdateCompetitor />
        </Route>

        <Route path="/adicionar/Competidor">
        <AddRunner />
        </Route>

        <Route path="/adicionar/pista">
          <AddRunWay />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
