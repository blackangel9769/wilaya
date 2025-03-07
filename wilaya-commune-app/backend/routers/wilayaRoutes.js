const express = require("express");
const router = express.Router();
const db = require("../config/db");

// Get all Wilayas
router.get("/", async (req, res) => {
  try {
    const [wilayas] = await db.query("SELECT DISTINCT wilaya_code, wilaya_name_ascii FROM algeria_cities"); 
    res.json(wilayas);
  } catch (err) {
    console.error(" Database Error:", err);
    res.status(500).json({ error: "Failed to fetch wilayas", details: err.message });
  }
});

module.exports = router;
