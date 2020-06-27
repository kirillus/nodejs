const express = require('express');
const router = express.Router();

// @route   GET api/users
// @desc    Register user
// @access  Public
router.post('/', (req, res) => {
  const {username, password, firstname} = req.body;


  res.send('User Router');
});

module.exports = router;