import {config} from "dotenv"
config();
export const PORT = process.env.PORT || 3001;
export const MONGODB_URI = process.env.MONGODB_URI;
console.log(MONGODB_URI)