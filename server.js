const express = require('express');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.send('shepp');
})

app.listen(process.env.PORT, function () {
    console.log(`Listening on port ${process.env.PORT}`);
});
