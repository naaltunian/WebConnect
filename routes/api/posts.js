const express = require('express');
const router = express.Router();

// /api/posts
router.get('/test', (req, res) => {
    res.json({msg: 'test'});
})

module.exports = router;