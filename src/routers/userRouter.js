const express = require('express');
const router = express.Router();

import userController from '../controllers/userController';

/**
 * @route   GET user/test
 * @desc    test
 * @access  Public
 */
router.route('/test').get(userController.test);

module.exports = router;
