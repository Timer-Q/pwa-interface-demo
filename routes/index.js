const router = require("koa-router")();
const axios = require("axios");

router.get("/", async (ctx, next) => {
  await ctx.render("index", {
    title: "Hello Koa 2!"
  });
});

router.get("/movies", async (ctx, next) => {
  const { data } = await axios.get(
    "https://api.douban.com/v2/movie/in_theaters"
  );

  ctx.body = data;
});

router.post("/detail", async (ctx, next) => {
  console.log(ctx);
  const { id } = ctx.request.body;
  const { data } = await axios.get(
    `http://api.douban.com/v2/movie/subject/${id}`
  );
  console.log(data);
  ctx.body = data;
});

router.get("/json", async (ctx, next) => {
  ctx.body = {
    title: "koa2 json"
  };
});

module.exports = router;
