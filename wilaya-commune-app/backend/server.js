require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const wilayaRoutes = require("./routers/wilayaRoutes");
const communeRoutes = require("./routers/communeRoutes");

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors({ origin: "http://localhost:3000" })); 
app.use(bodyParser.json());


app.get("/", (req, res) => {
  res.send("API is running...");
});


app.use("/api/wilayas", wilayaRoutes);
app.use("/api/communes", communeRoutes);
console.log("Wilaya routes should be available at: http://localhost:" + PORT + "/api/communes/");

app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});
