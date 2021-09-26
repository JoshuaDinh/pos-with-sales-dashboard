const express = require("express");
const planRoutes = require("./routes/api/plans");
const employeeRoutes = require("./routes/api/employees");
const invoiceRoutes = require("./routes/api/invoices");

const app = express();

const PORT = process.env.PORT || "5000";

// Middleware - method to recognize the incoming Request Object as a JSON Object.
app.use(express.json({ extended: false }));

// Routes
app.use("/api/plans", planRoutes);
app.use("/api/employees", employeeRoutes);
app.use("/api/invoices", invoiceRoutes);

app.listen(PORT, () => console.log(`Connected on port : ${PORT}`));
