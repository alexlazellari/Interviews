import express from "express";
import cors from "cors";
import todoRouter from "./routes/todo.router";

const app = express();
const port = process.env.PORT || 8080;

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());

app.use("/todos", todoRouter);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
