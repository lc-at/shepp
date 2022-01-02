const express = require('express');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

app.use(express.static(__dirname + '/public'));
app.use(express.json());

app.use('/api/', require('./routes/index'));

app.listen(process.env.PORT, function () {
    console.log(`Listening on port ${process.env.PORT}`);
});
