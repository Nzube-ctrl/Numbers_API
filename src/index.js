require(`dotenv`).config();
const express = require(`express`);
const cors = require(`cors`);
const axios = require(`axios`);
const PORT = process.env.PORT || 8000;
const app = express();
const apiRoute = require(`./routes/api.routes.js`);

app.use(cors());
app.use(`/api`, apiRoute);

app.get(`/`, (req, res) => {
  res.json({ message: `Numbers API` });
});

app.all(`*`, (req, res) => {
  res.status(404).json({ message: `Page Not Found` });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
