import Navbar from "../components/Navbar";
import Card from "../components/Card";
import productsService from "../services/products.service";
import { useEffect, useState } from "react";
import Form from "../components/Form.jsx";

function Management() {
  const [info, setInfo] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [idDelete, setIdDelete] = useState(null);
  const [editinProduct, setEditinProduct] = useState({});
  const [visibility, setVisibility] = useState(false);
  const addButtonLabel = visibility ? "Cerrar formulario" : "Abrir formulario";

  async function addProduct(product) {
    if (product) {
      const response = await productsService.addProduct(product);
      getInfo();
    }
  }

  async function deleteProduct(idToDelete) {
    if (idToDelete) {
      const response = await productsService.deleteOneProduct(idToDelete);
      getInfo();
    }
  }

  async function editProduct(editinProduct) {
    const data = {
      title: editinProduct.title,
      description: editinProduct.description,
      status: editinProduct.status,
    };
    const id = editinProduct.id;
    if (data && id) {
      const response = await productsService.editProduct(id, data);
      getInfo();
    }
  }

  async function getInfo() {
    const response = await productsService.getAllProducts();
    setInfo(response);
  }

  useEffect(() => {
    getInfo();
  }, []);

  const handleDelete = (_id) => {
    setIdDelete(_id);
  };

  const handleEdit = (editingProduct) => {
    setEditinProduct(editingProduct);
  };

  const handleSave = (product) => {
    addProduct(product);
  };

  const handleChangeFormVisibility = () => {
    setVisibility(!visibility);
  };

  useEffect(() => {
    deleteProduct(idDelete);
  }, [idDelete]);

  useEffect(() => {
    editProduct(editinProduct);
  }, [editinProduct]);

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
      <section>
        <Form setVisible={visibility} savedProduct={handleSave} />
      </section>
      <button className="w-full bg-gray-400"  onClick={handleChangeFormVisibility}>{addButtonLabel}</button>
      <section className="my-12 mx-6 flex flex-wrap gap-5 items-start justify-center">
        {filteredInfo.map((information) => (
          <div key={information._id}>
            <Card
              title={information.title}
              description={information.description}
              status={information.status}
              _id={information._id}
              IdDelete={handleDelete}
              editinProduct={handleEdit}
            />
          </div>
        ))}
      </section>
    </>
  );
}

export default Management;
