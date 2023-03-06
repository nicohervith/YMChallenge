import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="main-container">
      <div className="home-container">
        <div className="header">
          <div className="title">
            <h4>¡Hola test!</h4>
          </div>
        </div>
        <div className="home">
          <div className="box">
            <div className="saldo">
              <p>Mi saldo:</p>
              <label className="saldo-num">$10.000</label>
            </div>
            <div className="action">
              <p>Mi acción:</p>
              <label className="text-action">
                Nombre de acción
                <i className="fa-solid fa-chevron-down"></i>
              </label>
            </div>
          </div>

          <div className="action-section">
            <div className="title-action">
              <p>Acciones</p>
            </div>
            <div className="container-actions">
              <Link to="/acredit" style={{ textDecoration: "none" }}>
                <div className="action-icons saldo-action">
                  <div className="icon">
                    <i className="fa-solid fa-money-bill-transfer"></i>
                  </div>
                  <label for=""> Cargar saldo</label>
                </div>
              </Link>
              <Link to="/awards" style={{ textDecoration: "none" }}>
                <div className="action-icons premio">
                  <div className="icon">
                    <i className="fa-solid fa-gift"></i>
                  </div>
                  <label for=""> Enviar Premios</label>
                </div>
              </Link>
              <div className="action-icons historial">
                <div className="icon">
                  <i className="fa-solid fa-clock-rotate-left"></i>
                </div>
                <label for="">Movimientos</label>
              </div>
              <div className="action-icons settings">
                <div className="icon">
                  <i className="fa-solid fa-gear"></i>
                </div>
                <label for=""> Ajustes</label>
              </div>
            </div>
          </div>
          <div className="last-movements">
            <div className="title-action">
              <p>Últimos Movimientos</p>
            </div>
            <div className="last-moments-box">
              <div className="item">
                <div className="arrow-up">
                  <i className="fa-solid fa-arrow-up"></i>
                </div>
                <div className="title-movement">
                  <p> Carga de Saldo</p>
                </div>
                <div className="monto">
                  <p>+$10.000,00</p>
                  <p>21/01</p>
                </div>
              </div>
              <div className="item">
                <div className="arrow-down">
                  <i className="fa-solid fa-arrow-down"></i>
                </div>
                <div className="title-movement">
                  <p> Envío de Premio</p>
                </div>
                <div className="monto">
                  <p>-$2.500,00</p>
                  <p>19/01</p>
                </div>
              </div>
              <div className="item">
                <div className="arrow-down">
                  <i className="fa-solid fa-arrow-down"></i>
                </div>
                <div className="title-movement">
                  <p> Envío de Premio</p>
                </div>
                <div className="monto">
                  <p>-$2.500,00</p>
                  <p>18/01</p>
                </div>
              </div>
              <div className="item">
                <div className="arrow-down">
                  <i className="fa-solid fa-arrow-down"></i>
                </div>
                <div className="title-movement">
                  <p> Envío de Premio</p>
                </div>
                <div className="monto">
                  <p>-$2.500,00</p>
                  <p>18/01</p>
                </div>
              </div>
              <div className="item">
                <div className="arrow-up">
                  <i className="fa-solid fa-arrow-up"></i>
                </div>
                <div className="title-movement">
                  <p> Carga de Saldo</p>
                </div>
                <div className="monto">
                  <p>+$7.500,00</p>
                  <p>17/01</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
