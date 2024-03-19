import Navbar from "../components/Navbar";
import Card from "../components/Card";
import getAllProducts from "../services/info.service";
import { useEffect, useState } from "react";
function Home() {
  const [info, setInfo] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  async function getInfo() {
    const response = await getAllProducts();
    const data = await response.json();
    setInfo(data);
  }
  useEffect(() => {
    getInfo();
  }, []);

  const filteredInfo = searchValue
    ? info.filter((information) =>
        information.title.toLowerCase().includes(searchValue.toLowerCase())
      )
    : info;

  return (
    <>
      <header>
        <Navbar setSearchValue={setSearchValue} />
      </header>
      <section className="my-12 mx-6 flex flex-wrap gap-5 items-start  justify-center">
        {filteredInfo.map((information) => (
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
