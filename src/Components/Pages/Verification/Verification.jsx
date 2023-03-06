import React from "react";

const Verification = () => {
  return (
    <div>
      <div className="header"></div>
      <div className="home-verification">
        <div className="body-verification">
          <form className="form-verification" action="">
            <div className="">
              <p className="correo">Te acabamos de enviar un correo a</p>
              <p className="test">test@test.com.ar</p>
              <p className="digitos">Ingresa el código de 6 dígitos recibido</p>
            </div>
            <div className="code">
              <div className="frame">
                <input type="number" maxlength="1" />
              </div>
              <div className="frame">
                <input type="number" maxlength="1" />
              </div>
              <div className="frame">
                <input type="number" maxlength="1" />
              </div>
              <div className="frame">
                <input type="number" maxlength="1" />
              </div>
              <div className="frame">
                <input type="number" maxlength="1" />
              </div>
              <div className="frame">
                <input type="number" maxlength="1" />
              </div>
            </div>
            <div className="submit-verification">
              <button> Reenviar código</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Verification;
