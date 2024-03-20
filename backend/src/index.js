import "./config/database.js";
import app from "./config/app.js";
import { PORT } from "./config/envConfig.js";

app.listen(PORT, () => {
  console.log("Server running in port", PORT);
});
