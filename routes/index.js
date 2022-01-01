const router = require('express').Router()

router.get('/', (_, res) => {
    res.send('Hello World!')
});

module.exports = router;