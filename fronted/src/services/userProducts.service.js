import axios from "axios";
const endpoint = "http://localhost:3000/api/userProducts/request";
async function getAllUserProducts() {
  try {
    const response = await axios.get(`${endpoint}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
export default { getAllUserProducts };
