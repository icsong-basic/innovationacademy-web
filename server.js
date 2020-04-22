const express = require('express');
const path = require('path');
const app = express();
const fs = require("fs");
const metaTags = require("./src/metaTags")
const setupProxy = require("./src/setupProxy");
const indexHtml = fs.readFileSync(path.join(__dirname, 'build', 'index.html'), 'utf8');

const routes = [
  { path: "/", exact: true },
  { path: "/about", exact: true },
  { path: "/project", exact: true },
  { path: "/notice", exact: false },
  { path: "/news", exact: true },
  { path: "/contact", exact: true }
]

for (let i = 0; i < routes.length; i++) {
  const route = routes[i]
  app.get(route.exact ? route.path : [route.path, `${route.path}/*`], (req, res) => (responseIndexHtml(200, route, req, res)))
}

setupProxy(app);
app.use(express.static(path.join(__dirname, 'build')));
app.get('/time', function (req, res) {
  res.set('Content-Type', 'application/json'); res.send(JSON.stringify({ time: Date.now() }))
})

app.get('*', (req, res) => (responseIndexHtml(404, null, req, res)))

app.listen(process.env.PORT || 3000);

function responseIndexHtml(code, route, req, res) {
  const metaTag = route ? (metaTags.find(item => route.path === item.path) || metaTags[0]) : metaTags[0];
  if (!metaTag) {
    return res.send(code, indexHtml);
  }
  const title = metaTag.title;
  const description = metaTag.description;
  const ogTitle = metaTag["og:title"] || title;
  const ogDescription = metaTag["og:description"] || description;
  const twitterTitle = metaTag["twitter:title"] || title;
  const twitterDescription = metaTag["twitter:description"] || description;

  const responseHtml = indexHtml
    .replace(/%META_TITLE%/gi, title)
    .replace(/%META_DESCRIPTION%/gi, description)
    .replace(/%META_OG_TITLE%/gi, ogTitle)
    .replace(/%META_OG_DESCRIPTION%/gi, ogDescription)
    .replace(/%META_TWITTER_TITLE%/gi, twitterTitle)
    .replace(/%META_TWITTER_DESCRIPTION%/gi, twitterDescription)
  return res.send(code, responseHtml)
}