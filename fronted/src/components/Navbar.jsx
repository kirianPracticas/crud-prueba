import { useNavigate } from "react-router-dom";
function Navbar({ setSearchValue }) {
  const navigate = useNavigate();
  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);
  };

  return (
    <>
      <div className="bg-orange-200 w-full h-14 flex items-center justify-between">
        <img
          className="size-8 rounded-full mx-4"
          src="https://img.freepik.com/vector-premium/paquete-entrega-abierto-icono-caja-carton-vacia-aislado-sobre-fondo-blanco_53562-14296.jpg"
        ></img>
        <a className="mx-4 cursor-pointer" onClick={() => navigate("/home")}>
          Home
        </a>
        <a className="cursor-pointer" onClick={() => navigate("/management")}>Gestión</a>

        <input
          className="h-3/6 rounded-md mx-4 "
          type="search"
          onChange={handleInputChange}
        ></input>
      </div>
    </>
  );
}
export default Navbar;
