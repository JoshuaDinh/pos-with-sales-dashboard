const express = require("express");
const path = require("path");
const subscriptionRoutes = require("./routes/api/subscriptions");
const employeeRoutes = require("./routes/api/employees");
const invoiceRoutes = require("./routes/api/invoices");
const salesRoutes = require("./routes/api/salesData");

const app = express();

const PORT = process.env.PORT || "5000";

// Middleware - method to recognize the incoming Request Object as a JSON Object.
app.use(express.json({ extended: false }));

// Routes
app.use("/api/subscriptions", subscriptionRoutes);
app.use("/api/employees", employeeRoutes);
app.use("/api/invoices", invoiceRoutes);
app.use("/api/sales", salesRoutes);
// Static assets - production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => console.log(`app is running on ${PORT}`));
