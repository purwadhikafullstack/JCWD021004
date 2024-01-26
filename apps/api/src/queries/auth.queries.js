import User from '../models/users.model';
import ResetToken from '../models/resetToken.model';
import { Op } from 'sequelize';

// REGISTRATION
export const registerQuery = async (email, username) => {
  const t = await User.sequelize.transaction();
  try {
    const res = await User.create(
      {
        email,
        username,
        password: '',
        role_id: 1,
        is_verified: false,
      },
      { transaction: t },
    );
    await t.commit();
    return res;
  } catch (err) {
    await t.rollback();
    throw err;
  }
};

// FIND USER
export const findUserQuery = async ({ email = null, username = null }) => {
  try {
    const res = await User.findOne({
      where: {
        [Op.or]: {
          email,
          username,
        },
      },
    });

    return res;
  } catch (err) {
    throw err;
  }
};

export const registerGoogleLoginQuery = async (username, email, avatar) => {
  const t = await User.sequelize.transaction();
  try {
    const res = await User.create(
      {
        email,
        username: '',
        password: '',
        role_id: 1,
        is_verified: true,
        avatar,
      },
      { transaction: t },
    );
    await t.commit();
    return res;
  } catch (err) {
    await t.rollback();
    throw err;
  }
};

// EMAIL VERIFICATION AND SET PASSWORD
export const emailVerificationQuery = async (email, password) => {
  try {
    await User.update(
      { is_verified: true, password },
      { where: { email: email } },
    );
  } catch (err) {
    throw err;
  }
};

// CHECK WHETHER OR NOT USER HAS BEEN VERIFIED
export const verifiedUserQuery = async (email) => {
  try {
    return await User.findOne({
      where: {
        email: email,
        is_verified: true,
      },
    });
  } catch (err) {
    throw err;
  }
};

export const keepLoginQuery = async (id) => {
  try {
    const res = await User.findByPk(id, {
      attributes: {
        exclude: ['password'],
      },
    });

    return res;
  } catch (err) {
    throw err;
  }
};

// REQUEST RESET PASSWORD ( KETIKA LOGIN )
export const forgotPasswordQuery = async (email, token) => {
  try {
    const user = await User.findOne({
      where: { email: email },
    });

    if (user) {
      const userId = user.user_id;
      await ResetToken.create(
        {
          token: token,
          user_id: userId,
          isUsed: false,
        },
        { where: { userId: userId } },
      );
    } else {
      console.log('User not found');
    }
  } catch (err) {
    throw err;
  }
};

export const resetPasswordQuery = async (email, password, token) => {
  try {
    await User.update({ password }, { where: { email: email } });

    const user = await User.findOne({
      where: { email: email },
    });

    if (user) {
      const userId = user.user_id;
      await ResetToken.update(
        { token, isUsed: true },
        { where: { user_id: userId } },
      );
    } else {
      console.log('User not found');
    }
  } catch (err) {
    throw err;
  }
};

export const checkTokenUsageQuery = async (token) => {
  try {
    await ResetToken.findOne({
      where: {
        token: token,
        isUsed: true,
      },
    });
  } catch (err) {
    throw err;
  }
};
