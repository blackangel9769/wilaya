const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const wilayaRoutes = require("./routes/wilayaRoutes");
const communeRoutes = require("./routes/communeRoutes");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/wilayas", wilayaRoutes);
app.use("/api/communes", communeRoutes);

// Start Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
