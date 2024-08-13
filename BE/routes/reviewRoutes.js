const express = require('express');
const { deleteReview } = require('../controllers/reviewController');

const router = express.Router();

router.delete('/:review', deleteReview); // DELETE /reviews/:review

module.exports = router;
