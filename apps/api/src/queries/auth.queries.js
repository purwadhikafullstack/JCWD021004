import User from '../models/users.model';
import { Op } from 'sequelize';

export const registerQuery = async (email, username) => {
  const t = await User.sequelize.transaction();
  try {
    const res = await User.create(
      {
        email,
        username,
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
export const findUserQuery = async ({ email = null }) => {
  try {
    const res = await User.findOne({
      where: {
        [Op.or]: {
          email,
        },
      },
    });

    return res;
  } catch (err) {
    throw err;
  }
};
