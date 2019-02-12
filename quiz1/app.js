const express = require('express');
const logger = require('morgan');
const app = express();

app.use(logger('dev'));

const PORT = 4545;
const HOST = 'localhost';
app.listen(PORT, HOST, () => {
	console.log(`The Server is ready: http://${HOST}:${PORT}`);
});