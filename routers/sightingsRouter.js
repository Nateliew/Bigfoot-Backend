const express = require("express");
const router = express.Router();

class SightingsRouter {
  constructor(controller) {
    this.controller = controller;
  }
  routes() {
    router.get("/sightings", this.controller.getAll.bind(this.controller));
    router.post("/", this.controller.insertOne.bind(this.controller));
    router.get("/:sightingId", this.controller.getOne.bind(this.controller));
    return router;
  }
}

module.exports = SightingsRouter;
