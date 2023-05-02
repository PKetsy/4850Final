import { create } from 'zustand';
import axios from 'axios';

const authStore = create((set) => ({
  loggedIn: null,

  loginForm: {
    email: '',
    password: '',
  },

  signupForm: {
    email: '',
    password: '',
  },

  updateLoginForm: (e) => {
    const { name, value } = e.target;

    set((state) => {
      return {
        loginForm: {
          ...state.loginForm,
          [name]: value,
        },
      };
    });
  },

  updateSignupForm: (e) => {
    const { name, value } = e.target;

    set((state) => {
      return {
        signupForm: {
          ...state.signupForm,
          [name]: value,
        },
      };
    });
  },

  login: async (e) => {
    const { loginForm } = authStore.getState();
    const res = await axios.post('/admin/login', loginForm);
    set({
      loggedIn: true,
      loginForm: {
        email: '',
        password: '',
      },
    });
    console.log(res);
  },

  checkAuth: async () => {
    try {
      await axios.get('/admin/check');
      set({ loggedIn: true });
    } catch (err) {
      set({ loggedIn: false });
    }
  },

  signup: async () => {
    const { signupForm } = authStore.getState();
    const res = await axios.post('/admin/signup', signupForm);
    set({
      signupForm: {
        email: '',
        password: '',
      },
    });
    console.log(res);
  },

  logout: async () => {
    await axios.get('admin/logout');
    set({ loggedIn: false });
  },
}));

export default authStore;
