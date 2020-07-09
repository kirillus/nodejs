const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');


// @route   GET api/profile
// @desc    All profiles
// @access  Public
router.get('/', (req, res) => {
  res.send('Personal profile router');
});


// @route   GET api/profile/me
// @desc    My profile
// @access  Private
router.get('/me', (req, res) => {
  res.send('Personal profile router');
});


// @route   GET api/profile/[user]
// @desc    My profile
// @access  Private
router.get('/[user]', (req, res) => {
  res.send('Personal profile router');
});




module.exports = router;