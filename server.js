const express = require(`express`);
const morgan = require(`morgan`);
const path = require(`path`);

const app = express();

app.use(morgan("dev"));

app.use(`/public`, express.static(path.join(__dirname, `/public`)));

app.use(`/details`, require(`./routes/posts`));

app.get(`/`, (req, res) => res.redirect(`/details`));

const port = process.env.PORT || 2121;

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
