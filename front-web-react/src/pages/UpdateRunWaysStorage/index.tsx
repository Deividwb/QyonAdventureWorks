import './styles.css';

import { Link, useParams } from 'react-router-dom';
import { ReactComponent as RunImg } from 'assets/images/run.svg';
import { ReactComponent as SaveImg } from 'assets/images/save.svg';
import { ChangeEvent, useEffect, useState } from 'react';
import api from 'Services/api';

interface IUpdateRunWaysStorage {
  id: number;
  runner: number;
  runway: number;
  dateRunWay: string;
  usedTime: number;
}

const UpdateRunWaysStorage = () => {
  
  const { id } = useParams<{ id: string }>();

  const [model, setModel] = useState<IUpdateRunWaysStorage>({
    id: 0,
    runner: 0,
    runway: 0,
    dateRunWay: '',
    usedTime: 0,
  });

  useEffect(() => {
    loadUpdateRunWaysStorage();
  }, []);

  async function loadUpdateRunWaysStorage() {
    const response = await api.get('/runways-storage');
    //console.log(response.data);
    setModel(response.data);
  }

  ////////
  useEffect(() => {
    if (id !== undefined) {
      findRunWayStorage(id);
    }
  }, [id]);

  function updateModel(e: ChangeEvent<HTMLInputElement>) {
    setModel({
      ...model,
      [e.target.name]: e.target.value,
    });
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (id !== undefined) {
      const response = await api.put(`runways-storage/${id}`, model);
    } else {
      const response = await api.post('/runways-storage', model);
    }
  }

  async function findRunWayStorage(id: string) {
    const response = await api.get(`runways-storage/${id}`);
    setModel({
      id: response.data.id,
      runner: response.data.runner,
      runway: response.data.runway,
      dateRunWay: response.data.dateRunWay,
      usedTime: response.data.usedTime,
    });
  }

  //////

  return (
    <div>
      <div>
        <h2 className="text-center">Atualizar Histórico da Corrida</h2>

        <div className="btn-img">
          <Link className="btn-img-link" to="/opcoes/historicocorrida">
            <RunImg />
          </Link>
          <label>
            <p>Voltar</p>
          </label>
        </div>

        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3"></div>

            <div className="card-body">
              <form onSubmit={onSubmit}>
                <div className="btn-reset">
                  <input
                    className="btn-secondary"
                    type="reset"
                    value="Limpar Campos"
                  />
                </div>

                <div>
                  <label htmlFor="ctrl-runner">Id Competidor:</label>
                  <input
                    id="ctrl-runner"
                    placeholder="Numero do Competidor"
                    name="runner"
                    className="form-control"
                    value={model.runner}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      updateModel(e)
                    }
                  />
                </div>

                <div>
                  <label htmlFor="ctrl-runway">Id Pista:</label>
                  <input
                    id="ctrl-runway"
                    placeholder="Digite a Pista"
                    name="runway"
                    className="form-control"
                    value={model.runway}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      updateModel(e)
                    }
                  />
                </div>

                <div>
                  <label htmlFor="ctrl-date">Data da Corrida:
                  </label>
                  <input
                    id="ctrl-date"
                    placeholder="Digite a Data Corrida"
                    name="date"
                    className="form-control"
                    value={model.dateRunWay}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      updateModel(e)
                    }
                  />
                </div>

                <div>
                  <label htmlFor="ctrl-usedtime">Tempo Gasto:</label>
                  <input
                    id="ctrl-usedtime"
                    placeholder="Digite o tempo da Corrida"
                    name="usedtime"
                    className="form-control"
                    value={model.usedTime}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      updateModel(e)
                    }
                  />
                </div>

                <button type="submit" className="btn btn-secondary">
                  Salvar
                </button>

                <Link
                  className="btn btn-secondary btn-cancel"
                  to="/opcoes/historicocorrida"
                >
                  Cancelar
                </Link>
              </form>
            </div>

            <div />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateRunWaysStorage;
