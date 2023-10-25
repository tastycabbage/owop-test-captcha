import express from "express";

const app = express();

app.use(express.json({
  type: ['application/json', 'text/plain']
}))

app.get("/", (req, res) => {
  res.send("1");
})

app.post("/captcha", (req, res) => {
  let token = req.body["TOKENTOKEN"];

  console.log(token);
})

app.listen(8080, () => console.log("server is on"));
