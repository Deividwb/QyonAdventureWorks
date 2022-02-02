import './styles.css';

import CardRunWay from 'components/CardRunWay';
import { ReactComponent as RunImg } from 'assets/images/run.svg';
import { Link } from 'react-router-dom';
/*import { useEffect, useState } from 'react';
import { SpringPage } from 'types/vendor/spring';
import { RunWay } from 'types/runway';
import { AxiosParams } from 'types/vendor/axios';
import { BASE_URL } from 'util/request';
import axios from 'axios';*/

const ListRunWay = () => {
  //const [page, setPage] = useState<SpringPage<RunWay>>();

 /*useEffect(() => {
    const params: AxiosParams = {
      method: 'GET',
      url: `${BASE_URL}/runways`,
    };

    axios(params).then((response) => {
      setPage(response.data);
      console.log(response.data);
    });
  }, []);*/

  return (
    <div>
      <h2 className="text-center">Pistas de Corrida</h2>
      <div className="btn-img">
        <Link className="btn-img-link" to="/pista/adicionar">
          <RunImg />
        </Link>
        <label>
          <p>Crie Nova Pista</p>
        </label>
      </div>

      <div className="container my-4">
        <div className="row">
        

          <div className="col-sm-6 col-lg-4 col-xl-3">
            <CardRunWay />
          </div>

        </div>
      </div>
    </div>
  );
};

export default ListRunWay;
/*
  {page?.content.map((runway) => (
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <CardRunWay />
            </div>
          ))}
*/