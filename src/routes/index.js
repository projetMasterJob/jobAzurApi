const express = require('express');
const router = express.Router();

const UserRoute = require('./UserRoute');
const CompanyRoute = require('./CompanyRoute');
const JobRoute = require('./JobRoute');
const LocationRoute = require('./LocationRoute');
const ApplicationRoute = require('./ApplicationRoute');
const NotificationRoute = require('./NotificationRoute');
const ChatRoute = require('./ChatRoute');
const MessageRoute = require('./MessageRoute');
const TestDbRoute = require ('./TestDbRoute')

router.use('/users', UserRoute);
router.use('/company', CompanyRoute);
router.use('/jobs', JobRoute);
router.use('/locations', LocationRoute);
router.use('/applications', ApplicationRoute);
router.use('/notifications', NotificationRoute);
router.use('/chats', ChatRoute);
router.use('/messages', MessageRoute);
router.use('/test-db', TestDbRoute)

module.exports = router;
