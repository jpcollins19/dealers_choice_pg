module.exports = (obj) => {
  return `
      <html>
      <head>
        <title>Actors</title>
        <link rel="stylesheet" href="../public/css.css" />
      </head>
      <body>
        <div id="header">
          <h1>Famous Actors</h1>
        </div>
        <div class='actor-info-home-link'>
          <a href="/">Home</a>
        </div>
        <div class='actor-info-container'>
          <div>
            <img src="../public/${obj.name}-tp.jpg"/>
          </div>
          <div class='actor-info-box'>
            <h1>${obj.name}</h1>
            <img src="../public/${obj.name}-movie.jpg" />
            <h3>Date of Birth: ${obj["dob"]}</h3>
            <h3>Place of Birth: ${obj["pob"]}</h3>
            <h3>Known For: ${obj["kf"]}</h3>
          </div>
          <div>
            <img src="../public/${obj.name}-tp.jpg"/>
          </div>
        </div>
      </body>
    </html>`;
};
