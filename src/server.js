import express from "express";
import dotenv from "dotenv";
import { initDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

import transactionsRoute from "./routes/transactionsRoute.js";
import job from "./config/cron.js";

dotenv.config();

const app = express();

if (process.env.NODE_ENV !== "production") job.start();

// to parse JSON bodies
app.use(rateLimiter);

app.use(express.json()); 

//our custom middleware
// app.use((req, res, next) => {
//     console.log("Request received:", req.method, req.url);
//     next(); // Call next middleware or route handler
// });

const PORT = process.env.PORT || 5001;

app.get("/api/health", (req, res) => {
    res.status(200).json({ status: "OK" });
});

app.use("/api/transactions", transactionsRoute);

initDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server is running on port:", PORT);
    });
} );
