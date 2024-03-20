import axios from "axios";

const endpoint = "http://localhost:3000/api";


async function addProduct( product) {
  try {
    const response = await axios.post(`${endpoint}/products`, product);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

async function getAllProducts() {
  try {
    const response = await axios.get(`${endpoint}/products`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

async function deleteOneProduct(id) {
  try {
    const response = await axios.delete(`${endpoint}/products/${id}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

async function editProduct(id, product) {
  try {
    const response = await axios.put(`${endpoint}/products/${id}`, product);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
export default {addProduct, getAllProducts, deleteOneProduct, editProduct };
