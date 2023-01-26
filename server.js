const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

//Middleware sets the static pages inside the public folder
app.use(express.static('public'));

app.listen(PORT, () => console.log(`Listenining on port: ${PORT}`));