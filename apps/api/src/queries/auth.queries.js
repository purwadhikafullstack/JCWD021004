import User from '../models/users.model';
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

// EMAIL VERIFICATION AND SET PASSWORD
export const emailVerificationQuery = async (email, password) => {
  try {
    await User.update(
      { isVerified: true, password },
      { where: { email: email } },
    );
  } catch (err) {
    throw err;
  }
};
