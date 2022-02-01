import Navbar from 'components/Navbar';
import AddRunner from 'pages/AddRunner';
import AddRunWay from 'pages/AddRunWay';
import Home from 'pages/Home';
import ListRunners from 'pages/ListRunners';
import ListRunWay from 'pages/ListRunWay';
import RunWayDetails from 'pages/RunWayDetails';
import UpdateRunner from 'pages/UpdateRunner';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Runner } from 'types/runner';
import RunWaysStorage from 'pages/RunWaysStorage';
import ListUsedTime from 'pages/ListUsedTime';
import ListNotRun from 'pages/ListNotRun';

const Routes = () => {
  const runner: Runner = {
    id: 1,
    name: 'DeividW',
    sexo: 'Masculino',
    bodyTemperature: 35,
    weight: 81,
    height: 1.72,
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/competidores">
          <ListRunners runner={runner} />
        </Route>

        <Route path="/pistas" exact>
          <ListRunWay />
        </Route>

        <Route path="/pistas/:id">
          <RunWayDetails />
        </Route>

        <Route path="/atualizar/:id">
          <UpdateRunner />
        </Route>

        <Route path="/adicionar/Competidor">
          <AddRunner />
        </Route>

        <Route path="/adicionar/pista">
          <AddRunWay />
        </Route>

        <Route path="/opcoes  <RunWaysStorage  />" exact>
         
        </Route>

        <Route path="/opcoes/historicocorrida <RunWaysStorage />">         
          
        </Route>

        <Route path="/opcoes/listapistas">
          <RunWayDetails />
        </Route>

        <Route path="/opcoes/tempomedio">
          <ListUsedTime />
        </Route>

        <Route path="/opcoes/corredorsemcorrida">
          <ListNotRun />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
