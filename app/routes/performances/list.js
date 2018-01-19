const router = require('../router')();
const mongoose = require('mongoose');
const Performance = mongoose.model('Performance');

const logger = require('../../utilities/logger');

router.get('/', (req, res) => {
  Performance.find({})
  .limit(40)  
  //.populate()
  .exec((err, data) => {
    res.render('performances/list', {
      title: __('Performances'),
      data: data
    });
  });
});

module.exports = router;
