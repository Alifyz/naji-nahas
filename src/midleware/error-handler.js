async function errorHandler(ctx, next) {
    try {
        await next();
    } catch (error) {
        ctx.status = error.status || error.code;
        ctx.body = {
            success: false,
            message: error.message,
        };
    }
};

module.exports.errorHandler = errorHandler;