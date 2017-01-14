const Koa = require("koa");
const app = new Koa();
app.use(async(ctx)=>{
	await next();
	ctx.reponse.type="text/html";
	ctx.reponse.body="<h1>hello , koa2";

});
app.listen(3000);
console.log("app started at port 3000");