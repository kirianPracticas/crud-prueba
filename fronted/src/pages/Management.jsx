import Navbar from "../components/Navbar";
import userProductService from "../services/userProducts.service";
import { useEffect, useState } from "react";
import StateCard from "../components/StateCard";

function Management() {
  const [searchValue, setSearchValue] = useState("");

  const [request, setRequest] = useState([]);
  async function getRequest() {
    try {
      const response = await userProductService.getAllUserProducts();
      setRequest(response);
      console.log(response);
      
    } catch (error) {
      console.log(error);
    }
    
  }



  useEffect(() => {
    getRequest();
  }, []);


  return (
    <>
      <header>
        <Navbar setSearchValue={setSearchValue} />
      </header>
      <section>
        {request.map((requestInfo) => (
          <StateCard
          key={requestInfo._id} // Asegúrate de proporcionar una clave única para cada componente en la lista
          userName={requestInfo.user_id.username} // Accede al campo username del objeto user_id
          productName={requestInfo.product_id.title} // Accede al campo title del objeto product_id
          quantity={requestInfo.quantity}
          />
        ))}
      </section>
    </>
  );
}

export default Management;
