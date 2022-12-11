const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname+"/views"+"/index.html")
  console.log("html file it rendered");
});

app.get('/stylesheets/style.css', (req, res) => {
    const stylesheetName = req.params.stylesheetName;
     res.sendFile(__dirname+"/public"+"/stylesheets"+"/style.css");
     console.log("stylesheet is rendered");
  });

  app.get('public/images/illustration-hero.svg', (req, res) => {
    const imageName = req.params.imageName;
    console.log(`Received request for image: ${imageName}`);
    res.sendFile(__dirname+"/public"+"/images"+"/illustration-hero.svg");
  });

app.listen(3000, () => {
  console.log('Server listening on port 3000');
  console.log(__dirname);
});
