import './styles.css';
import { Link, useHistory, useParams } from 'react-router-dom';
import { ChangeEvent, useEffect, useState } from 'react';
import api from 'Services/api';
import ListRunners from 'pages/ListRunners';

interface IRunner {
  name: string;
  sexo: string;
  bodyTemperature: number;
  weight: number;
  height: number;
}

const AddRunner = () => {

  const history = useHistory;
  const { id } = useParams<{ id: string }>();

  const [model, setModel] = useState<IRunner>({
    name: '',
    sexo: '',
    bodyTemperature: 0,
    weight: 0,
    height: 0,
  });

  useEffect(() => {
    if (id !== undefined){
    findRunner(id)}  
  },[id])

  function updateModel(e: ChangeEvent<HTMLInputElement>) {
    setModel({
      ...model,
      [e.target.name]: e.target.value,
    });
  }

  async function onSubmit (e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    if (id !== undefined){

      const response = await api.put(`runners/${id}`, model)
    }else {

    const response = await api.post('/runners', model)
    //console.log(response)
  }
  back()
}

 function back() {
    return(
      <ListRunners />
    )
}

  async function findRunner (id: string) {
    const response = await api.get(`runners/${id}`)    
    setModel({
      name: response.data.name,
      sexo: response.data.sexo,
      bodyTemperature: response.data.bodyTemperature,
      weight: response.data.weight,
      height: response.data.height         
    })
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center">Adicionar Competidor/Atualizar</h3>

            <div className="card-body">
              <form onSubmit={onSubmit} >
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
                    value={model.name}
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
                    value={model.sexo}
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
                    value={model.bodyTemperature}
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
                    value={model.weight}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      updateModel(e)
                    }
                  />
                </div>

                <div className="input-height">
                  <label htmlFor="ctrl-height">Altura:</label>
                  <input
                    id="ctrl-height"
                    placeholder="Digite a Altura"
                    name="height"
                    className="form-control"
                    value={model.height}
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