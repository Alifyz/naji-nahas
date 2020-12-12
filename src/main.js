const Koa = require('koa');
const app = new Koa();
const errorHandler = require('./midleware/error-handler');
const router = require('./midleware/router');
const logger = require('koa-logger');
const bodyParser = require('koa-body');
require('dotenv').config()


app.use(errorHandler.errorHandler);
app.use(bodyParser());
app.use(logger());

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(process.env.PORT || 5000);
