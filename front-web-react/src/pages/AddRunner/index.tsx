import './styles.css';
import { Link } from 'react-router-dom';
import { ChangeEvent, useState } from 'react';
import api from 'Services/api';

interface IRunner {
  name: string;
  sexo: string;
  bodyTemperature: number;
  weight: number;
  height: number;
}

const AddRunner = () => {
  const [model, setModel] = useState<IRunner>({
    name: '',
    sexo: '',
    bodyTemperature: 0,
    weight: 0,
    height: 0,
  });

  function updateModel(e: ChangeEvent<HTMLInputElement>) {
    setModel({
      ...model,
      [e.target.name]: e.target.value,
    });
  }

  async function onSubmit (e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    const response = await api.post('/runners', model)

    console.log(response)
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center">Adicionar Competidor</h3>

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
                  <label htmlFor="ctrl-name">Nome:</label>
                  <input
                    id="ctrl-name"
                    placeholder="Nome"
                    name="name"
                    className="form-control"
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      updateModel(e)
                    }
                  />
                </div>

                <div>
                  <label htmlFor="ctrl-sexo">Sexo:</label>
                  <input
                    id="ctrl-sexo"
                    placeholder="Digite o Sexo"
                    name="sexo"
                    className="form-control"
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      updateModel(e)
                    }
                  />
                </div>
                

                <div>
                  <label htmlFor="ctrl-bodytemperature">
                    Temperatura Media do Corpo:
                  </label>
                  <input
                    id="ctrl-bodytemperature"
                    placeholder="Digite a Temperatura"
                    name="bodyTemperature"
                    className="form-control"
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      updateModel(e)
                    }
                  />
                </div>

                <div>
                  <label htmlFor="ctrl-weight">Peso:</label>
                  <input
                    id="ctrl-weight"
                    placeholder="Digite o Peso"
                    name="weight"
                    className="form-control"
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      updateModel(e)
                    }
                  />
                </div>

                <div className="input-weight">
                  <label htmlFor="ctrl-height">Altura:</label>
                  <input
                    id="ctrl-height"
                    placeholder="Digite a Altura"
                    name="height"
                    className="form-control"
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      updateModel(e)
                    }
                  />
                </div>

                <button type='submit' className="btn btn-secondary" >
                  Salvar
                </button>

                <Link
                  className="btn btn-secondary btn-cancel"
                  to="/competidores"
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

export default AddRunner;


/* 
<div>
                  <label htmlFor="ctrl-sexo">Sexo:</label>
                  <select
                    className="form-control"
                    name="sexo"
                    id="ctrl-sexo"
                    
                  >
                    <option selected>Escolha...</option>
                    <option value="1">Masculino</option>
                    <option value="2">Feminino</option>
                   
                  </select>
                </div>

*/