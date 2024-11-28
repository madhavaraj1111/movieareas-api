import express from "express";
import {
  MoviesCreate,
  MoviesDelete,
  MoviesRead,
  MoviesUpdate,
} from "../Controllers/movies.controller.js";

const router = express.Router();

// Read
router.get("/", MoviesRead);

// Creation
router.post("/", MoviesCreate);

// updation
router.put("/:id", MoviesUpdate);

// deletion
router.delete("/:id", MoviesDelete);

export default router;
