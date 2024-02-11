import {
  registerService,
  registerTenantService,
  emailVerificationService,
  loginService,
  loginTenantService,
  keepLoginService,
  forgotPasswordService,
  resetPasswordService,
  GoogleloginService,
} from '../services/auth.services';

// REGISTRATION USER
export const registerController = async (req, res) => {
  try {
    const { email, username } = req.body;

    const result = await registerService(email, username);

    return res.status(200).json({
      message: 'Success',
      data: result,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: err.message,
    });
  }
};

// REGISTRATION TENANT
export const registerTenantController = async (req, res) => {
  try {
    const { email } = req.body;

    const result = await registerTenantService(email);

    return res.status(200).json({
      message: 'Success',
      data: result,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: err.message,
    });
  }
};

// EMAIL VERIFICATION AND SET PASSWORD
export const emailVerificationController = async (req, res) => {
  try {
    const token = req.query.token;
    if (typeof token !== 'string') {
      return res.status(400).json({
        message: 'Invalid token format',
      });
    }
    const { password } = req.body;
    const result = await emailVerificationService(token, password);
    return res.status(200).json({
      message: 'Success',
      data: result,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: err.message,
    });
  }
};

export const googleLoginController = async (req, res) => {
  try {
    const { username, email, avatar } = req.body;

    const result = await GoogleloginService(username, email, avatar);

    return res.status(200).json({
      message: 'Login Success',
      data: result,
    });
  } catch (err) {
    console.log(err.message);
    return res.status(500).send(err.message);
  }
};

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await loginService(email, password);

    return res.status(200).json({
      message: 'Success',
      data: result,
    });
  } catch (err) {
    console.log(err.message);
    return res.status(500).send(err.message);
  }
};

export const loginTenantController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await loginTenantService(email, password);

    return res.status(200).json({
      message: 'Success',
      data: result,
    });
  } catch (err) {
    console.log(err.message);
    return res.status(500).send(err.message);
  }
};

export const keepLoginController = async (req, res) => {
  try {
    const { user_id } = req.user;

    const result = await keepLoginService(user_id);

    return res.status(200).json({
      message: 'Success',
      data: result,
    });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

export const forgotPasswordController = async (req, res) => {
  try {
    const { email } = req.body;
    const result = await forgotPasswordService(String(email));

    return res.status(200).json({
      message: 'Success',
      data: result,
    });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

export const resetPasswordController = async (req, res) => {
  try {
    const { token } = req.query;
    const { password } = req.body;
    const result = await resetPasswordService(token, password);
    return res.status(200).json({
      message: 'Success',
      data: result,
    });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};
