const express = require(`express`);
const apiRoute = express.Router();
const classifyNumber = require(`../controllers/api.controller.js`);

apiRoute.get(`/classify-number`, classifyNumber);

module.exports = apiRoute;
