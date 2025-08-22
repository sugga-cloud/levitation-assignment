const express = require("express");
const { generateBill } = require("../controllers/billController.js");
const { authMiddleware } = require('../middleware/authMiddleware.js');

const router = express.Router();

// POST /api/bills/generate

router.post("/generate", authMiddleware, generateBill);

module.exports = router;
