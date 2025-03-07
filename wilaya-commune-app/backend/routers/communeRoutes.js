const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.get("/communes/:wilaya_code", async (req, res) => {
  const wilayaCode = req.params.wilaya_code;
  console.log("Fetching communes for wilaya code:", wilayaCode);

  try {
    // Use the query without DISTINCT for debugging purposes
    const [communes] = await db.promise().query(
      "SELECT commune_name, commune_name_ascii FROM algeria_cities WHERE wilaya_code = ?",
      [wilayaCode]
    );
    
    console.log("Query result:", communes);
    
    if (!communes || communes.length === 0) {
      return res.status(404).json({ error: "No communes found" });
    }

    res.json(communes);
  } catch (error) {
    console.error("Error fetching communes:", error);
    res.status(500).json({ error: "Database error", details: error.message });
  }
});

module.exports = router;