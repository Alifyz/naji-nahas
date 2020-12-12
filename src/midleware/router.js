const KoaRouter = require('koa-router');
const router = new KoaRouter();
const controller = require('../controllers/cei-controller');

router.get('/', async ctx => {
    ctx.body = 'Hello World';
});

router.post('/connect-cei', controller.fetch);

module.exports = router;
