import { useState } from "react";

//onChange
//onSubmit

const Form = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [flag, setFlag] = useState(true);

  const handleChangeName = (e) => {
    setData({ ...data, email: e.target.value });
  };

  const validateUserName = (str) => {
    // " jorge" vs "jorge"
    const withoutSpaces = str.trim();

    if (withoutSpaces.length > 2 && str === withoutSpaces) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailIsValid = validateUserName(data.email);
    const passwordIsValid = true;

    if (!emailIsValid && !isPasword) {
      alert("los datos son incorrectos");
      return;
    }

    // LO ULTIMO
    alert(`su email es : ${data.email} y su contraseña: ${data.password} `);
  };

  const handleKeyDown = (e) => {
    if (e.key === " ") {
      e.preventDefault();
      alert("no se permiten espacion vacios");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="userMail"
          onChange={handleChangeName}
          //   onKeyDown={handleKeyDown}
        />
        <input
          type="text"
          name="userPassword"
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <button type="submit">Ingresar</button>
      </form>

      {
        // flag  ? <h1>Me muestro siempre</h1> : null
        flag && <h1>Me muestro siempre</h1>
      }
    </div>
  );
};

export default Form;