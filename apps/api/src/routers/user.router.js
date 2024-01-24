import { Router } from 'express';
import {
  updateUsernameController,
  updateEmailController,
  updatePasswordController,
  uploadAvatarFileController,
} from '../controllers/user.controller';
import { uploadAvatarFile } from '../middleware/multer.middleware';
const userRouter = Router();

// PATCH
userRouter.patch('/update-username/:user_id', updateUsernameController);
userRouter.patch('/update-email/:user_id', updateEmailController);
userRouter.patch('/update-password/:user_id', updatePasswordController);
userRouter.patch(
  '/upload-avatar/:user_id',
  uploadAvatarFile,
  uploadAvatarFileController,
);

export { userRouter };
