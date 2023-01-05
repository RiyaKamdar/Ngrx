import express, { Request, Response, Router } from "express";

const app = express();
const api = require('./api')
const bodyParser = require('body-parser')
var cors = require('cors')

app.use(bodyParser.json())
app.use(cors())
app.use('/api', api)

app.get('/', (req: Request, res: Response) => {
    res.send('Application works!');
});

app.listen(3000, () => {
    console.log('Application started on port 3000!');
});