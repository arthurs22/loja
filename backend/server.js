import express from 'express';
import data from './data.js';

const app = express();

app.get('/api/products', (req, res) => {
    res.send(data.product);
});

app.get('/', (req, res) => {
    res.send('Server is ready') 
});

app.listen(5000, () => {
    console.log('server at http://localhost:5000');
});