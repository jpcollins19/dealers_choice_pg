const pg = require(`pg`);
const client = new pg.Client(`postgres://localhost/dealers_choice_actors`);

client.connect();

module.exports = client;
