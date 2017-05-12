const express = require('express');
const bodyParser = require('body-parser');
const m1 = require('./middlewares/m1')
const logger = require('./middlewares/logger')
const logger2 = require('./middlewares/logger2')

const app = express();

app.use(m1);

app.use(bodyParser.json());

// el logger se usa después de que parseó el body
app.use(logger);

app.use('/foo', logger2);

app.get('/test', (req, res) => {
    res.json({ test: 'test' })
});

app.get('/logger', (req, res) => {
    res.json({ test: req.logger })
});

app.post('/test', (req, res) => {
    res.json({
        test: {
            m1: req.m1
        }
    });
});

app.post('/foo', (req, res) => {
    res.json({
        test: {
            m1: 'test foo'
        }
    });
});

app.listen(3000, () => (console.log("Listening port 3000")));
