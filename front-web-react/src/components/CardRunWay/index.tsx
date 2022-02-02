import './styles.css';
import { RunWay } from 'types/runway';
import { ReactComponent as UpdateImg } from 'assets/images/update.svg';
import { ReactComponent as TrashImg } from 'assets/images/trash.svg';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';




const CardRunWay = () => {
 
  return (
    <div>
      <div className="base-card hiking-card">
        <div className="card-top-container">
          <img src={"runway?.image"} alt="imagem" />
          <div className="card-description">
            <h6>DESCRIÇÃO</h6>
            <p>{"runway?.description"}</p>
          </div>
          <div className="card-button">
            <Link
              to={`/pista/${"runway?.id"}`}
              className="btn btn-secondary delete-btn"
            >
              Detalhes
            </Link>

            <Link
              to={`/pista/atualizar/:id${"runway?.id"}"`}
              className="btn update-btn"
            >
              <UpdateImg />
            </Link>
            <button className="btn trash-btn">
              <TrashImg />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardRunWay;
