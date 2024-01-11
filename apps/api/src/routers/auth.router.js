import { Router } from 'express';
import {
  registerController,
  emailVerificationController,
} from '../controllers/auth.controller';
import { validator } from '../middleware/validator.middleware';
import { verifyToken } from '../middleware/auth.middleware';
import { body } from 'express-validator';
const authRouter = Router();

// VALIDATION
const validations = [
  body('email').notEmpty().withMessage('Email cannot be emptied'),
  body('email').isEmail().withMessage('Email format is invalid'),
  body('username').notEmpty().withMessage('Username cannot be emptied'),
];

// POST
authRouter.post(
  '/user-registration',
  validator(validations),
  registerController,
);

// PUT
authRouter.put('/email-verification', emailVerificationController);

export { authRouter };
