const express = require("express");
const planRoutes = require("./routes/api/plans");

const app = express();
const router = express.Router();

const PORT = process.env.PORT || "5000";

// Middleware - method to recognize the incoming Request Object as a JSON Object.
app.use(express.json({ extended: false }));

// Routes
app.use("/api/plans", planRoutes);
app.listen(PORT, () => console.log(`Connected on port : ${PORT}`));
