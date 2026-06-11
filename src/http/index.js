import express from "express";
import "dotenv/config";

export function server() {
  const app = express();
  const PORT = process.env.PORT;
  /*app.get("/", (req, res) => {
    res.send("Hello, your Express server is working!");
  });*/
  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
}
