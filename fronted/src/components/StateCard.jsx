function StateCard({ title, userName, productName, quantity }) {

  return (
    <>
      <div className="w-[30%] ">
        <h1 className="text-center">{title}</h1>
        <div className="w-full bg-orange-200 rounded-md">
          <p>El usuario {userName} ha solicitado</p>
          <p>{productName}</p>
          <p>Cantidad: {quantity}</p>
          <div>
            <button>A</button>
            <button>C</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default StateCard;
