import { create } from 'zustand';
import axios from 'axios';

const eventsStore = create((set) => ({
  events: null,

  createForm: {
    title: '',
    startDate: null,
    endDate: null,
    description: '',
    eventItems: [{ itemName: '', itemPrice: '' }],
  },

  updateForm: {
    _id: null,
    title: '',
    startDate: '',
    endDate: '',
    description: '',
    eventItems: [{ itemName: '', itemPrice: '' }],
  },

  createEvent: async (e) => {
    e.preventDefault();

    const { createForm, events } = eventsStore.getState();
    const res = await axios.post('/admin/events', createForm);

    const newEvent = {
      ...res.data.event,
      eventItems: res.data.event.eventItems.map((item) => ({
        itemName: item.itemName,
        itemPrice: item.itemPrice,
      })),
    };

    set({
      events: [...events, newEvent],
      createForm: {
        title: '',
        startDate: '',
        endDate: '',
        description: '',
        eventItems: [],
      },
    });
    window.location.reload();
  },

  updateEvent: async (e) => {
    e.preventDefault();

    const {
      updateForm: { _id, title, startDate, endDate, description, eventItems },
      events,
    } = eventsStore.getState();

    // Send the update request
    const res = await axios.put(`/admin/events/${_id}`, {
      title,
      startDate,
      endDate,
      description,
      eventItems,
    });

    // Update state
    const newEvents = [...events];
    const eventIndex = events.findIndex((event) => {
      return event._id === _id;
    });
    newEvents[eventIndex] = res.data.event;

    set({
      events: newEvents,
      updateForm: {
        _id: null,
        title: '',
        startDate: '',
        endDate: '',
        description: '',
        eventItems: [],
      },
    });
  },

  toggleUpdate: (event) => {
    set({
      updateForm: {
        _id: event._id,
        title: event.title,
        startDate: event.startDate,
        endDate: event.endDate,
        description: event.description,
        eventItems: [...event.eventItems],
      },
    });
  },

  handleInputChange: (e, index, formName) => {
    const { name, value } = e.target;
    set((state) => {
      const form = state[formName];
      const updatedEventItems = form.eventItems.map((item, i) => {
        if (i === index) {
          return { ...item, [name]: value };
        } else {
          return item;
        }
      });
      return {
        ...state,
        [formName]: {
          ...form,
          eventItems: updatedEventItems,
        },
      };
    });
  },

  handleDateChange: (date, name) => {
    set((state) => {
      return {
        createForm: {
          ...state.createForm,
          [name]: date,
        },
      };
    });
  },

  handleUpdateDateChange: (date, name) => {
    set((state) => {
      return {
        updateForm: {
          ...state.updateForm,
          [name]: date,
        },
      };
    });
  },

  fetchEvents: async () => {
    // Fetch the events
    const res = await axios.get('/admin/events');

    // Set to state
    set({ events: res.data.events });
  },

  fetchEventById: async (_id) => {
    // Fetch the event with the specified _id
    const res = await axios.get(`/admin/events/${_id}`);

    // Return the event
    return res.data.event;
  },

  updateCreateFormField: (e) => {
    const { name, value } = e.target;

    set((state) => {
      return {
        createForm: {
          ...state.createForm,
          [name]: value,
        },
      };
    });
  },

  handleAddItem: () => {
    set((state) => {
      const { createForm } = state;
      const newItem = {
        itemName: '',
        itemPrice: '',
      };
      const updatedEventItems = [...createForm.eventItems, newItem];
      const updatedCreateForm = {
        ...createForm,
        eventItems: updatedEventItems,
      };
      return {
        createForm: updatedCreateForm,
      };
    });
  },

  deleteEvent: async (_id) => {
    // Delete the event
    const res = await axios.delete(`/admin/events/${_id}`);
    const { events } = eventsStore.getState();

    // Update state
    const newEvents = events.filter((event) => {
      return event._id !== _id;
    });

    set({ events: newEvents });
  },

  handleUpdateFieldChange: (e) => {
    const { value, name } = e.target;

    set((state) => {
      return {
        updateForm: {
          ...state.updateForm,
          [name]: value,
        },
      };
    });
  },
}));

export const useStore = eventsStore.useStore;

export default eventsStore;
