import express from "express";
import MovieRoutes from "./Routes/movies.route.js";
import connectDb from "./lib/db.js";

const app = express();
const PORT = 6969;

// database connection
connectDb();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/movies", MovieRoutes);

app.listen(PORT, () => {
  console.log(`This server is running in the port ${PORT}`);
});
