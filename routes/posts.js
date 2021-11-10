const app = require(`express`).Router();
const client = require("../db");
const home = require(`../views/home`);
const actorDetails = require(`../views/actor-details`);

module.exports = app;

app.get(`/`, async (req, res, next) => {
  try {
    const data = await client.query(`select * from details`);
    res.send(home(data.rows));
  } catch (err) {
    next(err);
  }
});

app.get(`/:id`, async (req, res, next) => {
  try {
    const data = await client.query(`select * from details where id = $1`, [
      req.params.id,
    ]);
    res.send(actorDetails(data.rows[0]));
  } catch (err) {
    next(err);
  }
});
