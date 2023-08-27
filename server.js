const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const mongoose = require("mongoose");

const app = express();
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
  console.error("Failed to connect to MongoDB", err);
});

// Define a Mongoose schema for the contact data
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

// Create a Mongoose model using the schema
const Contact = mongoose.model("Contact", contactSchema);

app.use(cors());
app.use(bodyParser.json());

// Create an API endpoint for saving contact form data
app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Create a new contact document and save it in the database
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    res.json({ status: "OK", message: "Contact saved" });
  } catch (error) {
    console.error("Failed to save contact:", error);
    res
      .status(500)
      .json({ status: "ERROR", message: "Failed to save contact" });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
