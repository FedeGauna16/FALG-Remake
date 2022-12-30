import { useState } from "react";
import { useEffect } from "react";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: "",
    country: "",
    birthDate: "",
  });

  //hacer validaciones
  const handler = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const validarDatos = (e) => {
    e.preventDefault();
    Object.values(formData).forEach((x) => {
      if (!x) return alert("maricon");
    });
  };
  return (
    <div className="register">
      <h1>Registro</h1>
      <form className="form" onSubmit={(e) => validarDatos(e)}>
        <div className="row">
          <div className="wrapper">
            <label className="form__label">Nombre</label>
            <input
              className="form__input"
              type="text"
              onChange={handler}
              name="name"
            ></input>
          </div>
          <div className="wrapper">
            <label className="form__label">Contraseña</label>
            <input
              className="form__input"
              type="password"
              onChange={handler}
              name="password"
            ></input>
          </div>
        </div>
        <div className="row wrapper--email">
          <label className="form__label">Email</label>
          <input
            className="form__input"
            type="email"
            onChange={handler}
            name="email"
          ></input>
        </div>
        <div className="row">
          <div className="wrapper">
            <label className="form__label">País</label>
            <input
              className="form__input"
              type="text"
              onChange={handler}
              name="country"
            ></input>
          </div>
          <div className="wrapper">
            <label className="form__label">Género</label>
            <select>
              <option>Hombre</option>
              <option>Mujer</option>
              <option>Otro</option>
            </select>
          </div>
          <div className="wrapper">
            <label className="form__label">Fecha de Nacimiento</label>
            <input
              className="form__input"
              type="date"
              onChange={handler}
              name="birthDate"
            ></input>
          </div>
        </div>
        <button type="submit">Registrarse</button>
      </form>
      <div className="wrapper">
        <span>¿Ya tienes una cuenta?</span>
        <a href="">Iniciar Sesion</a>
      </div>
    </div>
  );
}
