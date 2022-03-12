var express = require('express');
var router = express.Router();
var ctrlReviews = require('./controllers/review.controller')

//include routes for REST API Example
router.get('/reviews', ctrlReviews.readReviewsAll)
router.get('/reviews/:reviewid', ctrlReviews.reviewsReadOne)
router.get('/QueryExample', ctrlReviews.queryPage)
router.get('/sortRatingAscending', ctrlReviews.reviewSortAscending)
router.get('/sortRatingDescending', ctrlReviews.reviewSortDescending)
router.post('/reviews', ctrlReviews.reviewCreate)
router.put('/reviews/:reviewid', ctrlReviews.reviewUpdateOne)
router.delete('/reviews/:reviewid', ctrlReviews.reviewDeleteOne)


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
