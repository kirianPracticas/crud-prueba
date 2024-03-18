function Card(info) {
  return (
    <>
      <div className="bg-orange-200 h-fit w-fit rounded-md flex flex-col items-center justify-center max-w-28 min-w-60  ">
        <h1 >{info.title}</h1>
        <p className="m-2">{info.description}</p>
        <p>{info.status}</p>
      </div>
    </>
  );
}
export default Card;
