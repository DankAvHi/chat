import express from "express";
import { startupLogger } from "./helpers/startupLogger";

const app = express();

export const startApp = () => app.listen(8000, startupLogger(8000));
