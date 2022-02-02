import './styles.css';
import { Link } from 'react-router-dom';

const AddRunWaysStorage = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center">Adicionar Histórico de Corrida</h3>

            <div className="card-body">
              <form action="/competidores">
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
                

                <Link className="btn btn-secondary" to="/opcoes/historicocorrida">
                  Salvar
                </Link>

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
