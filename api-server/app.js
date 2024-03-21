import express, { json } from "express";

const app = express();

app.use(json());

app.all("*", (req) => {
    throw new NotFoundError(`This route "${req.path}" does not exist!!`);
});

export default app;