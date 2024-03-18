import Navbar from "../components/Navbar";
import Card from "../components/Card";
import getAllProducts from "../services/info.service";
import { useEffect, useState } from "react";
function Home() {
  const [info, setInfo] = useState([]);
  const [infoSearch, setInfoSearch] = useState([]);
  // function getSearchInfo (searchInfo){
  //   if

  // }
  async function getInfo() {
    const response = await getAllProducts();
    const data = await response.json();
    setInfo(data);
  }
  useEffect(() => {
    getInfo();
  }, []);

  return (
    <>
      <header>
        <Navbar />
      </header>
      <section className="my-12 mx-6 flex flex-wrap gap-5 items-start  justify-center">
        {info.map((information) => (
          <div key={information.id}>
            <Card
              title={information.title}
              description={information.description}
              status={information.status}
            />
          </div>
        ))}
      </section>
    </>
  );
}
export default Home;
