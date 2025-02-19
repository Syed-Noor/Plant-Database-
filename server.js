// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const connectDB = require("./config/db");
// const plantRoutes = require("./routes/plantRoutes");

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// connectDB();



// app.get("/", (req, res) => {
//     res.send("<h1>Welcome to Plant Disease Database</h1><h2>The server is running!</h2>");
// });

// app.use("/plants", plantRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const connectDB = require("./config/db");
const plantRoutes = require("./routes/plantRoutes");
const authRoutes = require("./routes/authRoutes");

connectDB();

const app = express();


app.get("/", (req, res) => {
      res.send("<h1>Welcome to Plant Disease Database</h1><h2>The server is running!</h2>");
    });
app.use(cors());
app.use(express.json());

app.use("/api/plants", plantRoutes);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
