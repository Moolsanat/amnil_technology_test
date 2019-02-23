const express = require('express');
const router = express.Router();

module.exports = router;

const showController = require('./controllers/shows.controller');

router.get('/api/shows', showController.getShows);
router.get('/shows', showController.getCalendar);