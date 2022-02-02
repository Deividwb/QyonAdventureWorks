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
import ListUsedTime from 'pages/ListUsedTime';
import ListNotRun from 'pages/ListNotRun';
import { RunWayStorage } from 'types/runway-storage';
import RunWaysStorage from 'pages/RunWaysStorage';
import AddRunWaysStorage from 'pages/AddRunWaysStorage';
import UpdateRunWaysStorage from 'pages/UpdateRunWaysStorage';
import UpdateRunWay from 'pages/UpdateRunWay';

const Routes = () => {
  const runner: Runner = {
    id: 1,
    name: 'DeividW',
    sexo: 'Masculino',
    bodyTemperature: 35,
    weight: 81,
    height: 1.72,
  };

  const runWaysStorage: RunWayStorage = {
    id: 1,
    runner: 1,
    runway: 1,
    dateRunWay: '20/ 12/ 2020',
    usedTime: 20,
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

        <Route path="/competidor/adicionar" exact>
          <AddRunner />
        </Route>

         <Route path="/competidor/atualizar/:id">
          <UpdateRunner />
        </Route> 

        <Route path="/pistas">
          <ListRunWay />
        </Route>   

        <Route path="/pista/:id">
          <RunWayDetails />
        </Route>    

        <Route path="/pista/adicionar">
          <AddRunWay />
        </Route>  

        <Route path="/pista/atualizar/:id">
          <UpdateRunWay />
        </Route>                          
        
        <Route path="/opcoes" exact>
        <RunWaysStorage runWaysStorage={runWaysStorage} />
        </Route>

        <Route path="/opcoes/historicocorrida" exact>
        <RunWaysStorage runWaysStorage={runWaysStorage} />
        </Route>

        <Route path="/opcoes/historicocorrida/adicionar">
        <AddRunWaysStorage />
        </Route>

        <Route path="/opcoes/historicocorrida/atualizar/:id">
        <UpdateRunWaysStorage runWaysStorage={runWaysStorage} />
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
