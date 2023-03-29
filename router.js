const router = require('express').Router();
const taskRoutes = require('./views/taskRoutes');

router.use('/api', taskRoutes)

module.exports = router;
