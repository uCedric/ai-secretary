import express, { json } from "express";

const app = express();

app.use(json());

app.get("/health", (req, res) => {
    console.info("alive")
});

app.all("*", (req) => {
    throw new NotFoundError(`This route "${req.path}" does not exist!!`);
});

// app.use(errorHandler);
 
export default app;