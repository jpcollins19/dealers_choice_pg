module.exports = (arr) => {
  return `
    <html>
    <head>
      <title>Actors</title>
      <link rel="stylesheet" href="/public/css.css" />
    </head>
    <body>
      <div id="header">
        <h1>Famous Actors</h1>
      </div>
      <div id="home-actor-container">
        ${arr
          .map(
            (obj) => `
        <div class='single-home-actor-container'>   
          <div class='home-name'>
            <a href="/details/${obj.id}">${obj.name}</a>
          </div>
          <div class='home-pic'>
            <img src="../public/${obj.name}.jpg" />
          </div>
        </div>
          `
          )
          .join("")}
      </div>
    </body>
  </html>`;
};
