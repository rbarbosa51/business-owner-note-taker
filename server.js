const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3001;
const app = express();

//Middleware sets the static pages inside the public folder
app.use(express.static('public'));

//Notes route
app.get('/notes', (req,res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});
app.listen(PORT, () => console.log(`Listenining on port: ${PORT}`));