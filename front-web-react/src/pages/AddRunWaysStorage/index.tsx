import './styles.css';
import { Link, useParams } from 'react-router-dom';
import { ChangeEvent, useEffect, useState } from 'react';
import api from 'Services/api';


interface IAddRunWaysStorage {
  id: number;
  runner: number;
  runway: number;
  dateRunWay: string;
  usedTime: number;
}

const AddRunWaysStorage = () => {

  const { id } = useParams<{ id: string }>();

  const [model, setModel] = useState<IAddRunWaysStorage>({
    id: 0,
    runner: 0,
    runway: 0,
    dateRunWay: '',
    usedTime: 0,
  });

  useEffect(() => {
    loadAddRunWaysStorage();
  }, []);

  async function loadAddRunWaysStorage() {
    const response = await api.get('/runways-storage');
    //console.log(response.data);
    setModel(response.data);
  }

  ////////
  useEffect(() => {
    if (id !== undefined) {
      findAddRunWayStorage(id);
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

  async function findAddRunWayStorage(id: string) {
    const response = await api.get(`runways-storage/${id}`);
    setModel({
      id: response.data.id,
      runner: response.data.runner,
      runway: response.data.runway,
      dateRunWay: response.data.dateRunWay,
      usedTime: response.data.usedTime,
    });
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center">Adicionar Histórico de Corrida</h3>

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
                  <label htmlFor="ctrl-runner">Competidor:</label>
                  <input
                    id="ctrl-runner"
                    placeholder="Adicione Competidor"
                    name="runner"
                    className="form-control"
                  />
                </div>

                <div>
                  <label htmlFor="ctrl-runwaydetail">Pista Utilizada:</label>
                  <input
                    id="ctrl-runwaydetail"
                    placeholder="Digite a Pista Utilizada"
                    name="runwaydetail"
                    className="form-control"
                  />
                </div>

                <div>
                  <label htmlFor="ctrl-datetime">Data Corrida:</label>
                  <input
                    id="ctrl-datetime"
                    type="date"
                    name="datetime"
                    placeholder="Digite a Data Corrida"
                    className="form-control"
                  />
                </div>

                <div className="input-usedtime">
                  <label htmlFor="ctrl-height">Tempo Gasto:</label>
                  <input
                    id="ctrl-usedtime"
                    placeholder="Digite o tempo da corrida"
                    name="usedtime"

                    className="form-control"
                  />
                </div>
                

                <button  type='submit' className="btn btn-secondary" >
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRunWaysStorage;
