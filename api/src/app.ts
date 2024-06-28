import express, { Express } from 'express';
import corsMiddleware from './middlewares/cors';
import cookieParser from 'cookie-parser';

const app: Express = express();

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(corsMiddleware);
app.use(cookieParser());
export default app;
