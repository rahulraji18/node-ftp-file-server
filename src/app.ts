import express from 'express';
import dotenv from 'dotenv';
import serveIndex from 'serve-index';

dotenv.config();

const app = express();

app.use('/', express.static('public/shared'), serveIndex('public/shared', { icons: true }))

const PORT = process.env.PORT ?? 4000;

app.listen(PORT!, () => console.log(`Server running on ${PORT}`));