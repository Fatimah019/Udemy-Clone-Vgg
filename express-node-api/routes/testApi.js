var express = require('express');
var router = express.Router();

router.get('/', (req, res, next)=> {
    res.send("Been able to connect my react to nodejs yaay!!!");
});

module.exports = router;
