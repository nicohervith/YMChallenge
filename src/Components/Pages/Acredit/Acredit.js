import React from "react";
import { Link } from "react-router-dom";

const Acredit = () => {
  return (
    <div>
      <div className="header">
        <div className="title-acredit">
          <Link to="/" style={{ textDecoration: "none" }}>
            <div className="icon-acredit">
              <i className="fa-solid fa-angle-left"></i>
            </div>
          </Link>
          <p>¿Cuánto querés ingresar?</p>
        </div>
      </div>
      <form
        className="form-acredit"
        action="
      "
      >
        <div className="recents">
          <p>Saldo</p>
          <div class="frame-acredit">
            <p className="price">$</p>
            <p className="number-acredit">0</p>
          </div>
        </div>
        <div class="button-acredit">
          <button>Continuar</button>
        </div>
      </form>
    </div>
  );
};

export default Acredit;
