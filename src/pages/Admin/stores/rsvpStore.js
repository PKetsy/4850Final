import { create } from 'zustand';
import axios from 'axios';

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

  // createRsvp: async (e) => {
  //   e.preventDefault();

  //   const { createRsvpForm, rsvps } = rsvpStore.getState();
  //   const res = await axios.post('/events', createRsvpForm);

  //   const newRsvp = {
  //     ...res.data.rsvp,
  //     eventItems: res.data.event.eventItems.map((item) => ({
  //       itemName: item.itemName,
  //       itemPrice: item.itemPrice,
  //       quantityReserved: item.quantityReserved,
  //     })),
  //   };

  //   set({
  //     rsvps: [...rsvps, newRsvp],
  //     createRsvpForm: {
  //       firstName: '',
  //       lastName: '',
  //       phoneNumber: '',
  //       email: '',
  //       eventItems: [],
  //       totalPrice: 0,
  //     },
  //   });
  // },
}));

export default rsvpStore;
