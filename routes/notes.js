const router = require('express').Router();

router.get('/', (req,res) => {
    console.log(req.params);
})
router.post('/', (req,res) => {
    //Debugging
    console.log(req.body);
})
module.exports = router;