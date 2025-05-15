const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Set Content Security Policy headers
app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; font-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; connect-src 'self' https://app-w0ew.onrender.com; connect-src 'self' https://gemini-doctor.vercel.app;"
  );
  next();
});

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

// Serve index.html for the root route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "login.html"));
});

app.get("/receptionist-dashboard", (req, res) => {
  res.sendFile(path.join(__dirname, "receptionist-dashboard.html"));
});

app.get("/update-patient", (req, res) => {
  res.sendFile(path.join(__dirname, "update-patient.html"));
});

app.get("/patient-report", (req, res) => {
  res.sendFile(path.join(__dirname, "patient-report.html"));
});

app.get("/doctor-dashboard", (req, res) => {
  res.sendFile(path.join(__dirname, "doctor-dashboard.html"));
});

app.get("/doctor-diagnose", (req, res) => {
  res.sendFile(path.join(__dirname, "doctor-diagnose.html"));
});

app.get("/create-patient", (req, res) => {
  res.sendFile(path.join(__dirname, "create-patient.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
