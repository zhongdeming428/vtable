let ctx = require.context('../src', true)
ctx.keys().forEach(ctx);

ctx = require.context('./specs', true)
ctx.keys().forEach(ctx)