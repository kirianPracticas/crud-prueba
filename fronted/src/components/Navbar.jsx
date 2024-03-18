function Navbar() {
  return (
    <>
      <div className="bg-orange-200 w-full h-14 flex items-center justify-between">
        <img
          className="size-8 rounded-full mx-4"
          src="https://img.freepik.com/vector-premium/paquete-entrega-abierto-icono-caja-carton-vacia-aislado-sobre-fondo-blanco_53562-14296.jpg"
        ></img>
        <a className="mx-4">Home</a>
        <a>Gestión</a>
        <input className="h-3/6 rounded-md mx-4" type="search"></input>
      </div>
    </>
  );
}
export default Navbar;
