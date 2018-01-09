const router = require('./router')();

const mongoose = require('mongoose');
const Event = mongoose.model('Event');
const User = mongoose.model('User');
const Performance = mongoose.model('Performance');
//const i18n = require('../plugins/i18n');

const logger = require('../utilities/logger');

router.get('/', (req, res) => {
    logger.debug('DETAIL');
    //logger.debug(req);

    Event.findOne({})
    .populate([{
        path: 'teaserImage',
        model: 'Asset'
    }])
    .exec((err, event) => {
        User.find({})
        .populate([{
        path: 'image',
        model: 'Asset'
        }])
        .limit(40)
        .exec((err, performers) => {
            Performance.find({})
            .populate([{
                path: 'image',
                model: 'Asset'
            }])
            .limit(40)
            .exec((err, performances) => {
                logger.debug('Welcome global.getLocale: '+global.getLocale());
                logger.debug('Welcome global.getLocale: '+__('Welcome to AVnode network'));

                res.render('home', {
                    title: __('Welcome to AVnode network'),
                    subtitle: __('AVnode is an international network of artists and professionals organising activities in the field of audio visual performing arts.'),
                    performances: performances,
                    performers: performers,
                    event: event
                });
            });
        });
    });
});
  
module.exports = router;