import express, { type Request } from "express";

// Get env variables
const PORT = process.env.PORT || 8080;

const app = express();

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}. http://localhost:${PORT}/`)
);
