require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./routes/message");
const PORT = process.env.PORT || 5000;

var corsOptions = {
  origin: "*",
  allowedHeaders: ["Content-Type", "Authorization", "public-request"],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("Namo Chats !!"));
app.use("/api/message", router);

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT} 🚀`);
});
