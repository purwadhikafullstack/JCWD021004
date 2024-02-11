import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import axios from 'axios';

const initialState = {
  users: {
    user_id: null,
    username: '',
    email: '',
    role_id: null,
    is_verified: null,
    avatar: '',
  },
  isLogin: false,
};

export const AuthReducer = createSlice({
  name: 'AuthReducer',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user_id, username, email, role_id, is_verified, avatar } =
        action.payload;

      state.users = {
        user_id,
        username,
        email,
        role_id,
        is_verified,
        avatar,
      };
    },
    loginSuccess: (state, action) => {
      state.isLogin = true;
    },
    logoutSuccess: (state, action) => {
      state.isLogin = false;
      localStorage.removeItem('token');
    },
    keepLoginSuccess: (state) => {
      state.isLogin = true;
    },
    updateUsername: (state, action) => {
      state.users.username = action.payload.username;
    },
  },
});

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const res = await axios.post('http://localhost:8000/api/auth/login', {
        email,
        password,
      });
      localStorage.setItem('token', res?.data?.data?.token);
      console.log(res.data?.data?.token);
      console.log(res.data?.data);
      dispatch(setUser(res?.data?.data?.user));
      dispatch(loginSuccess());
      toast.success('Login success');
    } catch (err) {
      toast.error('Error logging in. Please check your credentials.');
    }
  };
};

export const loginTenant = (email, password) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(
        'http://localhost:8000/api/auth/login-tenant',
        {
          email,
          password,
        },
      );
      localStorage.setItem('token', res?.data?.data?.token);
      console.log(res.data?.data?.token);
      console.log(res.data?.data);
      dispatch(setUser(res?.data?.data?.user));
      dispatch(loginSuccess());
      toast.success('Login success');
    } catch (err) {
      toast.error('You are not a tenant');
    }
  };
};

export const Googlelogin = (
  username,
  email,
  avatar,
  setLoading,
  openSuccessModal,
  openErrorModal,
) => {
  return async (dispatch) => {
    try {
      const res = await axios.post('http://localhost:8000/api/auth/google', {
        username,
        email,
        avatar,
      });

      console.log('ini respond dari api', res);

      localStorage.setItem('token', res?.data?.data?.token);
      dispatch(setUser(res?.data?.data?.user));
      openSuccessModal();
      setLoading(false);
      dispatch(loginSuccess());
    } catch (err) {
      alert(err?.response?.data.message);
      openErrorModal();
      throw err;
    }
  };
};

export const keepLogin = () => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('token');

      if (token) {
        const res = await axios.get(
          'http://localhost:8000/api/auth/keep-login',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        dispatch(setUser(res?.data?.data));
        dispatch(keepLoginSuccess());
      }
    } catch (err) {
      localStorage.removeItem('token');
      alert(err?.response?.data);
    }
  };
};

export const editUsername = (user_id, username) => {
  return async (dispatch) => {
    try {
      const res = await axios.patch(
        `http://localhost:8000/api/user/update-username/${user_id}`,
        {
          username: username,
        },
      );

      // Perbarui nama pengguna di state
      dispatch(updateUsername({ username: res?.data?.data }));

      // Opsional: Tampilkan pesan sukses
      toast.success('Username updated successfully');
    } catch (err) {
      // Tampilkan pesan kesalahan
      toast.error('Error updating username. Please try again.');
      console.log(err);
    }
  };
};

export const {
  loginSuccess,
  logoutSuccess,
  setUser,
  keepLoginSuccess,
  editUsernameSuccess,
  updateUsername,
} = AuthReducer.actions;

export default AuthReducer.reducer;
