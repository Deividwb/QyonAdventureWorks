import './styles.css';

//import CardRunWay from 'components/CardRunWay';
import { ReactComponent as RunImg } from 'assets/images/run.svg';
import { Link } from 'react-router-dom';
import { RunWay } from 'types/runway';
import { useEffect, useState } from 'react';
import api from 'Services/api';
import { ReactComponent as UpdateImg } from 'assets/images/update.svg';
import { ReactComponent as TrashImg } from 'assets/images/trash.svg';
import { ReactComponent as ViewImg } from 'assets/images/view.svg';

const ListRunWay = () => {
  const [listRunway, setListRunway] = useState<RunWay[]>([]);

  useEffect(() => {
    loadRunways();
  }, []);

  async function loadRunways() {
    const response = await api.get('/runways');
    console.log(response.data);
    setListRunway(response.data);
  }

   async function deleteRunWay(id: number) {
    
    const response = await api.delete(`runways/${id}`);
    loadRunways()
  }

  return (
    <div >
      <h2 className="text-center">Lista Pistas de Corrida</h2>
      <div className="btn-img">
        <Link className="btn-img-link" to="/pista/adicionar">
          <RunImg />
        </Link>
        <label>
          <p>Crie Nova Pista</p>
        </label>
      </div>

      <div className="container my-4 main-container" >
        <div className="row">
        

          {listRunway.map((listRunways) => (

            <div className="col-sm-6 col-lg-4 col-xl-3">
           
              <div>
                <div className="base-card hiking-card">
                  <div className="card-top-container">
                    <img className='img-center' src={listRunways?.image} alt="imagem" />
                    <div className="card-description">
                      <h6>DESCRIÇÃO</h6>
                      <p>{listRunways?.description}</p>
                    </div>
                    <div className="card-button">
                      <Link to={`/pista/${listRunways?.id}`}>
                        <ViewImg />
                      </Link>

                      <Link to={`/pista/adicionar/${listRunways?.id}`}>
                        <UpdateImg />
                      </Link>

                      <button onClick={() => deleteRunWay(listRunways.id)} className="btn">
                        <TrashImg />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              </div>
          ))}


        </div>
      </div>
    </div>
  );
};

export default ListRunWay;
// {/* <CardRunWay key={listRunways.id}/> */}
