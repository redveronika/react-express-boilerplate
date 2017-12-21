require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
// const MongoClient = require('mongodb').MongoClient;

const app = express();
const webpackDevHelper = require('./server.dev');

const isDev = process.env.NODE_ENV !== 'production';

app.use(bodyParser.urlencoded({ extended: true }));

if (isDev) {
    webpackDevHelper.useWebpackMiddleware(app);
} else {
    app.use(express.static('dist'));
}


app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/dist/index.html`);
});

// MongoClient.connect(process.env.MONGO_DB_URI_COMPETITIONS_ASSISTANT, (err, database) => {
app.listen(3000, () => {
    console.log('listening on 3000');

});
// });
