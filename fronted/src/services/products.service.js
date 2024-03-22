import axios from "axios";

const endpoint = "http://localhost:3000/api/products/";


async function addProduct( product) {
  try {
    const response = await axios.post(`${endpoint}`, product);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

async function getAllProducts() {
  try {
    const response = await axios.get(`${endpoint}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

async function deleteOneProduct(id) {
  try {
    const response = await axios.delete(`${endpoint}${id}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

async function editProduct(id, product) {
  try {
    const response = await axios.put(`${endpoint}${id}`, product);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
export default {addProduct, getAllProducts, deleteOneProduct, editProduct };
