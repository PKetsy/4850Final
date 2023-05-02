import { create } from 'zustand';
import axios from 'axios';

const menuStore = create((set) => ({
  items: null,

  createMenuForm: {
    category: '',
    title: '',
    description: '',
    price: 0,
  },

  updateMenuForm: {
    id: null,
    category: '',
    title: '',
    description: '',
    price: 0,
  },

  createMenuItem: async (e) => {
    e.preventDefault();

    const { createMenuForm, items } = menuStore.getState();
    console.log(createMenuForm); // log the createMenuForm object to the console
    const res = await axios.post('/admin/menu', createMenuForm);

    const newItem = { ...res.data.event };

    set({
      items: [...items, newItem],
      createMenuForm: {
        category: '',
        title: '',
        description: '',
        price: 0,
      },
    });
  },

  updateItem: async (e) => {
    e.preventDefault();

    const {
      updateMenuForm: { _id, category, title, description, price },
      items,
    } = menuStore.getState();

    // Send the update request
    const res = await axios.put(`/admin/menu/${_id}`, {
      category,
      title,
      description,
      price,
    });

    // Update state
    const updatedItem = [...items];
    const itemIndex = items.findIndex((item) => {
      return item._id === _id;
    });
    updatedItem[itemIndex] = res.data.item;

    set({
      items: updatedItem,
      updateMenuForm: {
        _id: null,
        category: '',
        title: '',
        description: '',
        price: 0,
      },
    });
    window.location.reload();
  },

  toggleUpdate: (item) => {
    set({
      updateMenuForm: {
        _id: item._id,
        category: item.category,
        title: item.title,
        description: item.description,
        price: item.price,
      },
    });
  },

  handleUpdateFieldChange: (e) => {
    const { value, name } = e.target;

    set((state) => {
      return {
        updateMenuForm: {
          ...state.updateMenuForm,
          [name]: value,
        },
      };
    });
  },

  updateCreateFormField: (e) => {
    const { name, value } = e.target;

    set((state) => {
      return {
        createMenuForm: {
          ...state.createMenuForm,
          [name]: value,
        },
      };
    });
  },

  getMenuItems: async () => {
    // Fetch the events
    const res = await axios.get('/admin/menu');
    console.log(res.data);
    // Set to state
    set({ items: res.data.items });
  },

  deleteItem: async (_id) => {
    // Delete the item
    const res = await axios.delete(`/admin/menu/${_id}`);
    const { items } = menuStore.getState();

    // Update state
    const newItems = items.filter((item) => {
      return item._id !== _id;
    });

    set({ items: newItems });
  },
}));

export default menuStore;
