const router = require('express').Router();
//UUID
const { v4: uuidv4 } = require('uuid');
/*Using fs/promises to use readFile and writeFile as promises, 
without having to use utils to promisity */
const fs = require('fs/promises');
const dbFile = './db/db.json';

router.get('/', async (_,res) => {
    const data = await fs.readFile(dbFile, {encoding: 'utf-8'});
    res.json(JSON.parse(data));
});
router.post('/', async (req,res) => {
    //Parse request body into an object
    const {title, text} = req.body;
    const id = uuidv4();
    const pData = {id, title,text};
    //Get File and store values in array of objects
    const rawData = await fs.readFile(dbFile, {encoding: 'utf-8'});
    let newData = JSON.parse(rawData);
    //Push the body values into array
    newData.push(pData);
    //Debug Only
    //console.log(newData);
    //Write to JSON file
    await fs.writeFile(dbFile, JSON.stringify(newData));
    res.json(newData);
    
});
router.delete('/:id', async (req, res) => {
    console.log(req.params.id);
    //req.params.id contains the uuid of the item to be deleted
    //Get all of the db and convert to array
    const rawData = await fs.readFile(dbFile, {encoding: 'utf-8'});
    let primeData = JSON.parse(rawData);
    //find the selected id
    const selectedId = primeData.find(d => d.id === req.params.id);
    //delete the id 
    const index = primeData.indexOf(selectedId);
    primeData.splice(index,1);
    console.log(JSON.stringify(primeData));
    //write new db
    await fs.writeFile(dbFile, JSON.stringify(primeData));
    res.json(primeData);

});
module.exports = router;