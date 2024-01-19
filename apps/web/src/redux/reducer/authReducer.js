import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import axios from 'axios';

const initialState = {
  user: {
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

      state.user = {
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
      alert(err?.response?.data);
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

export const { loginSuccess, logoutSuccess, setUser, keepLoginSuccess } =
  AuthReducer.actions;

export default AuthReducer.reducer;
