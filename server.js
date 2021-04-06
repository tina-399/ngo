const express = require("express");

// connecting to database
require("./config/dbConnect");

const app = express();

// using json format
app.use(express.json());

// app.use('/ngos', require("./router/ngoRouter"));

app.listen(4000, () => console.log("Server up and Running"));
