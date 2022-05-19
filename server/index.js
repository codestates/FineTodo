require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();

const controllers = require("./controllers");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ["http://localhost:3001"],
    credentials: true,
    methods: ["GET", "POST", "OPTIONS"],
  })
);
app.use(cookieParser());
app.get("/login", controllers.login);
app.get("/signup", controllers.signup);
app.post("/signup", controllers.signup);
app.post("/signout", controllers.signout);


const PORT = process.env.PORT || 4001;

app.get("/", (req, res) => {
  res.json({ message: "Hello from server!" });
});
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});