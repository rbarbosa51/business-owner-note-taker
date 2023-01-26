const router = require('express').Router();
/*Using fs/promises to use readFile as a promise, 
without having to use utils to promisity */
const fs = require('fs/promises');


router.get('/', async (req,res) => {
    const data = await fs.readFile('./db/db.json', {encoding: 'utf-8'});
    console.log(data);
    res.json(JSON.parse(data));
})
router.post('/', (req,res) => {
    //Debugging
    console.log(req.body);
})
module.exports = router;