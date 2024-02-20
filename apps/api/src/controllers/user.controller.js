import {
  updateUsernameService,
  updateEmailService,
  updatePasswordService,
  uploadAvatarFileService,
} from '../services/user.services';

export const updateUsernameController = async (req, res) => {
  try {
    const { user_id } = req.params;
    const { username } = req.body;

    await updateUsernameService(user_id, username);
    return res.status(200).json({
      message: 'Success',
      data: username,
    });
  } catch (err) {
    console.log('error di controller', err);
    return res.status(500).json({
      message: err.message,
    });
  }
};
export const updateEmailController = async (req, res) => {
  try {
    const { user_id } = req.params;
    const { email } = req.body;

    await updateEmailService(user_id, email);
    return res.status(200).json({
      message: 'Success',
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};
export const updatePasswordController = async (req, res) => {
  try {
    const { user_id } = req.params;
    const { password } = req.body;
    await updatePasswordService(user_id, password);
    return res.status(200).json({
      message: 'Success',
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

export const uploadAvatarFileController = async (req, res) => {
  try {
    const { user_id } = req.params;
    await uploadAvatarFileService(user_id, req.file?.filename);
    return res.status(200).json({
      message: 'success',
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};
