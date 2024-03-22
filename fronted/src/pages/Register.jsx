import { useState } from "react";
import userService from "../services/users.service.js";
import { useNavigate } from "react-router-dom";
function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  async function addUser(user) {
    if (user) {
      try {
        const response = await userService.addUser(user);
        const userData = {
          rol: response.message.rol,
          id: response.message._id
        };
        localStorage.setItem("userData", JSON.stringify(userData));
        navigate("/home");
      } catch (error) {
        console.log(error);
      }
    }
  }
  

  const handleSaveUser = () => {
    const user = {
      username: username,
      email: email,
      password: password,
      rol: false,
    };
    addUser(user);
  };

  return (
    <div className="bg-orange-200 size-96 m-auto flex justify-center rounded-md mt-64">
      <div className="flex flex-col items-center ">
        <h1 className="mt-8 text-5xl">Registro</h1>
        <input
          placeholder="Nombre de usuario"
          className="w-72 rounded-md mt-9 h-9"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="Correo electronico"
          className="w-72 rounded-md mt-6 h-9"
          type="text "
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Contraseña"
          className="w-72 rounded-md mt-6 h-9"
          type="text "
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleSaveUser}
          className="mt-6 p-2 bg-gray-400 rounded-md"
        >
          Registrarse
        </button>
      </div>
    </div>
  );
}

export default Register;
