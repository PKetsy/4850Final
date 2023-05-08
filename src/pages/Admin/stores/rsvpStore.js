import { create } from 'zustand';

const rsvpStore = create((set) => ({
  rsvps: null,

  createRsvpForm: {
    eventTitle: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    eventItems: [],
    totalPrice: 0,
  },

  updateRsvpField: (e) => {
    const { name, value } = e.target;

    set((state) => {
      return {
        createRsvpForm: {
          ...state.createRsvpForm,
          [name]: value,
        },
      };
    });
  },
}));

export default rsvpStore;
