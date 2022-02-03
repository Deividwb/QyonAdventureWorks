import './styles.css';

import { Link, useParams } from 'react-router-dom';
import { ChangeEvent, useEffect, useState } from 'react';
import api from 'Services/api';

interface IRunWay {  
  image: string;
  description: string;
}


const AddRunWay = () => {

  const { id } = useParams<{ id: string }>();

  const [model, setModel] = useState<IRunWay>({
    image: '',
    description: '',
  });

  useEffect(() => {
    if (id !== undefined){
      findRunWays(id)}   
  },[id])

  function updateModel(e: ChangeEvent<HTMLInputElement>) {
    setModel({
      ...model,
      [e.target.name]: e.target.value,
    });
  }

  function updateModelTextArea(e: ChangeEvent<HTMLTextAreaElement>) {
    setModel({
      ...model,
      [e.target.name]: e.target.value,
    });
  }

  async function onSubmit (e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    if (id !== undefined){

      const response = await api.put(`runways/${id}`, model)
    }else {

    const response = await api.post('/runways', model)
    console.log(response)
  }
}


async function findRunWays (id: string) {
  const response = await api.get(`runways/${id}`)    
  setModel({
    image: response.data.image,
    description: response.data.description   
           
  })
  
}

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center">Adicionar Pista / Atualizar</h3>

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
                  <label htmlFor="ctrl-description">Descrição</label>
                  <textarea
                    className="form-control"
                    name="description"
                    id="ctrl-description"
                    placeholder="Digite seu texto aqui..."
                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                      updateModelTextArea(e)
                    }
                  ></textarea>
                </div>

                <div>
                  <label htmlFor="ctrl-image">Adicione Imagem da Pista</label>
                  <input
                    id="ctrl-image"
                    placeholder="Digite ou Cole a Url da sua imagem"
                    name="image"
                    className="form-control"
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      updateModel(e)
                    }
                  />
                </div>

                <button type='submit' className="btn btn-secondary" >
                  Salvar
                </button>

                <Link className="btn btn-secondary btn-cancel" to="/pistas">
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

export default AddRunWay;
