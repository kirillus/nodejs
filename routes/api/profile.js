const express = require('express');
const router = express.Router();

// @route   GET api/profile
// @desc    Test route
// @access  Private
router.get('/', (req, res) => {
  res.send('Profile Router');
});

module.exports = router;