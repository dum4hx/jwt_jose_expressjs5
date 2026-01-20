import express, {} from "express";
import error_logger from "./middleware/error_logger.js";
// Get env variables
const PORT = process.env.PORT || 8080;
const app = express();
app.get("/", (req, res, next) => {
    throw new Error("Unexpected error");
});
// Use error middleware
app.use(error_logger);
app.listen(PORT, () => console.log(`Server running on port ${PORT}. http://localhost:${PORT}/`));
//# sourceMappingURL=server.js.map