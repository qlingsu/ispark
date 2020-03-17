module.exports = options => {

    return async function loginMiddleware(ctx, next) {
  
        let whiteUrls = options.whiteUrls || [];
        
        // 如果ctx.url在白名单中
        let isWhiteUrl = whiteUrls.some((whiteUrl)=> ctx.url.startsWith(whiteUrl));
        
        if (! isWhiteUrl) {
            console.log('authLogin');
            if (! ctx.session.token) {
                ctx.body = {
                    success:false,
                    code:"401",
                    msg:"UNAUTHORIZED!"
                };   // 让用户去登录
            }
            else {
                console.log('auth ok');
                await next();
            }
        } else {
            // 白名单
            console.log('white url');
            await next();
        }
    };
};