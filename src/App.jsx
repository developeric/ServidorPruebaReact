import { useEffect } from "react";
import { useForm } from "./Hook/useForm.js";

function App() {
  const { formState, handleChange } = useForm({
    username: "",
    password: "",
  });

  const { username, password } = formState;

  const getFetch = () => {
    console.log("Obteniendo Datos de la API");
    console.log("Cargando...");
    console.log("Cambios Aplicados");
  };

  useEffect(() => {
    getFetch(), [];
  });

  useEffect(() => {
    console.log({ username });
  }, [username]);
  useEffect(() => {
    console.log({ password });
  }, [password]);

  return (
    <>
      <h1>¡¡¡Listar Mis Tareas!!!</h1>

      <h2>Tareas</h2>

      <form>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={username}
          onChange={handleChange}
        />
        <input
          type="text"
          name="password"
          placeholder="password"
          value={password}
          onChange={handleChange}
        />
      </form>
    </>
  );
}

export default App;
