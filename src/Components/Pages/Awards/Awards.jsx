import React from "react";
import { Link } from "react-router-dom";

const Awards = () => {
  return (
    <div>
      <div className="header">
        <div className="title-awards">
          <Link to="/" style={{ textDecoration: "none" }}>
            <div className="icon-awards">
              <i className="fa-solid fa-angle-left"></i>
            </div>
          </Link>
          <p>¿A quién querés premiar?</p>
          <div className="options">
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="awards-container">
        <p className="awards-text">Nuevas cuentas</p>
        <div className="awards-recents">
          <div className="list">
            <Link to="/auth" style={{ textDecoration: "none" }}>
              <div className="agregar-cuenta">
                <div className="awards-icon">
                  <i className="fa-solid fa-user-plus"></i>
                </div>
                <label>Agregar cuenta</label>
              </div>
            </Link>
            <div className="agregar-cuenta">
              <div className="awards-icon">
                <i className="fa-solid fa-upload"></i>
              </div>
              <label>Subir archivo</label>
            </div>
          </div>
        </div>

        <form className="award-form">
          <div className="search">
            <div className="bar">
              <input type="text" placeholder="Buscar por nombre o email." />
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
          <div className="accounts">
            <p className="title-accounts">Tus cuentas</p>
            <div className="list-accounts">
              <div className="item-awards">
                <div class="client-frame">
                  <p>C1</p>
                </div>
                <div class="circle">
                  <div class="circle-frame"></div>
                </div>
                <p className="client-number">Cuenta 1</p>
                <p className="client-email">cuenta1@test.com.ar</p>
              </div>

              <div className="item-awards">
                <div class="client-frame">
                  <p>C1</p>
                </div>
                <div class="circle">
                  <div class="circle-frame"></div>
                </div>
                <p className="client-number">Cuenta 2</p>
                <p className="client-email">cuenta2@test.com.ar</p>
              </div>

              <div className="item-awards">
                <div class="client-frame">
                  <p>C1</p>
                </div>
                <div class="circle">
                  <div class="circle-frame"></div>
                </div>
                <p className="client-number">Cuenta 3</p>
                <p className="client-email">cuenta3@test.com.ar</p>
              </div>
              <div className="item-awards">
                <div class="client-frame">
                  <p>C1</p>
                </div>
                <div class="circle">
                  <div class="circle-frame"></div>
                </div>
                <p className="client-number">Cuenta 4</p>
                <p className="client-email">cuenta4@test.com.ar</p>
              </div>
              <div className="item-awards">
                <div class="client-frame">
                  <p>C1</p>
                </div>
                <div class="circle">
                  <div class="circle-frame"></div>
                </div>
                <p className="client-number">Cuenta 5</p>
                <p className="client-email">cuenta5@test.com.ar</p>
              </div>
              <div className="item-awards">
                <div class="client-frame">
                  <p>C1</p>
                </div>
                <div class="circle">
                  <div class="circle-frame"></div>
                </div>
                <p className="client-number">Cuenta 6</p>
                <p className="client-email">cuenta6@test.com.ar</p>
              </div>
              <div className="item-awards">
                <div class="client-frame">
                  <p>C1</p>
                </div>
                <div class="circle">
                  <div class="circle-frame"></div>
                </div>
                <p className="client-number">Cuenta 7</p>
                <p className="client-email">cuenta7@test.com.ar</p>
              </div>
            </div>
            <div class="awards-submit">
              <button>Continuar</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Awards;
