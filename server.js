const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Allow a specific origin
const allowedOrigins = [
  "http://localhost:3000",
  "https://medigo-frontend.vercel.app",
];
const corsOptions = {
  origin: (origin, callback) => {
    // Allow requests with no origin (e.g., mobile apps or Postman)
    if (!origin) return callback(null, true);

    // Check if the origin is in the allowed list
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error("Not allowed by CORS"));
    }
  },
  methods: "GET,POST",
  allowedHeaders: "Content-Type,Authorization",
};
app.use(cors(corsOptions));

app.use((err, req, res, next) => {
  if (err.message === "Not allowed by CORS") {
    return res
      .status(403)
      .json({ error: "Access Denied, Not allowed by CORS" });
  }
  next(err);
});

// Set Content Security Policy headers
app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; font-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; connect-src 'self' https://app-w0ew.onrender.com https://gemini-doctor.vercel.app;"
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
