const cors = require("cors");
const express = require("express");
require("dotenv").config();

// importing Routers
const CategoriesRouter = require("./routers/categoriesRouter");
const SightingsRouter = require("./routers/sightingsRouter");

// importing Controllers
const CategoriesController = require("./controllers/categoriesController");
const SightingsController = require("./controllers/sightingsController");

// importing DB
const db = require("./db/models/index");
const { category, comment, sighting } = db;

// initializing Controllers -> note the lowercase for the first word
const categoriesController = new CategoriesController(category);
const sightingsController = new SightingsController(
  sighting,
  category,
  comment
);

// initializing Routers
const categoriesRouter = new CategoriesRouter(categoriesController).routes();
const sightingRouter = new SightingsRouter(sightingsController).routes();

const PORT = process.env.PORT;
const app = express();

// Enable CORS access to this server
app.use(cors());

app.use(express.json());

// using the routers
app.use("/categories", categoriesRouter);

app.use("/sightings", sightingRouter);

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
