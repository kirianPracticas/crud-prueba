import axios from "axios";
const endpoint = "http://localhost:3000/api/users";

async function addUser(user) {
  try {
    const response = await axios.post(`${endpoint}`, user);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
async function loginUser(email, password) {
  try {
    const response = await axios.post(`${endpoint}/login`, { email, password });
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
}
export default { addUser, loginUser };
