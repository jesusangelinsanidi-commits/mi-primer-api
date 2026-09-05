const express = require("express");
const app = express();

app.use(express.json());

// Endpoint de prueba
app.get("/api/hello", (req, res) => {
  res.json({ message: "¡Hola desde mi primera API en Vercel!" });
});

module.exports = app;
