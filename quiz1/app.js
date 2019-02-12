const express = require('express');
const logger = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(logger('dev'));
app.use(cookieParser());

const baseRouter = require('./routes/baseRouter.js');
app.use('/', baseRouter);

const PORT = 4545;
const HOST = 'localhost';
app.listen(PORT, HOST, () => {
	console.log(`The Server is ready: http://${HOST}:${PORT}`);
});