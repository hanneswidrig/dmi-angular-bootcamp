import cors from 'cors';
import express from 'express';

import { db, initializeDatabase } from './initialize-db';

await initializeDatabase();

const port = 3000;
const app = express();
app.use(cors());

app.get('/summary', async (req, res) => {
    await db.read();

    if (db.data) {
        res.json(db.data.weatherSummary);
    }

    res.status(404).json({ statusCode: 404, message: 'Not Found' });
});

app.get('/forecast/:guid', async (req, res) => {
    await db.read();

    const cityData = db.data?.weatherDetails.find(({ guid }) => guid === req.params.guid);
    if (cityData) {
        res.json(cityData);
    }

    res.status(404).json({ statusCode: 404, message: 'Not Found' });
});

app.listen(port, () => {
    console.log(`[server]: Server is running at https://localhost:${port}`);
});
