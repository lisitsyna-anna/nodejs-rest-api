const express = require('express');

const { auth: controllers } = require('../../controllers');
const { auth, validation, ctrlWrapper } = require('../../middlewares');
const { userJoiSchema, emailJoiSchema } = require('../../models/user');

const router = express.Router();

router.post('/signup', validation(userJoiSchema), ctrlWrapper(controllers.signup));

router.post('/login', validation(userJoiSchema), ctrlWrapper(controllers.login));

router.get('/logout', auth, ctrlWrapper(controllers.logout));

router.get('/verify/:verificationToken', ctrlWrapper(controllers.verifyEmail));

router.post('/verify', validation(emailJoiSchema), ctrlWrapper(controllers.resendVerifyEmail));

module.exports = router;
