const router = require('express').Router();
/*Using fs/promises to use readFile and writeFile as promises, 
without having to use utils to promisity */
const fs = require('fs/promises');
const dbFile = './db/db.json';

router.get('/', async (_,res) => {
    const data = await fs.readFile(dbFile, {encoding: 'utf-8'});
    //console.log(data);
    res.json(JSON.parse(data));
});
router.post('/', async (req,res) => {
    //Get File and store values in array
    const rawData = await fs.readFile(dbFile, {encoding: 'utf-8'});
    let newData = JSON.parse(rawData);
    //Push the body values into array
    newData.push(req.body);
    //Debug
    console.log(newData);
    //Write to JSON file
    await fs.writeFile(dbFile, JSON.stringify(newData));
    res.json(newData);
    
    
});
router.delete('/', (req, res) => {
    console.log(req);
});
module.exports = router;