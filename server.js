const express = require("express");
const path = require("path");
const api = require("./routes/index.js");

const PORT = process.env.PORT || 3001;
const app = express();

//Middleware needed for API calls
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", api);

//Middleware sets the static pages inside the public folder
app.use(express.static("public"));

//Notes route
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});
//* (All Other) Routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

//Listen
app.listen(PORT, () => console.log(`Listenining on port: ${PORT}`));
