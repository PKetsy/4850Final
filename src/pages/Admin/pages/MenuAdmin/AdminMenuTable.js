import React, { useState, useEffect } from 'react';

import { DataGrid } from '@mui/x-data-grid';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Button,
} from '@mui/material';

import axios from 'axios';

const AdminMenuTable = () => {
  const [items, setItems] = useState([]);
  const [selection, setSelection] = useState([]);
  const [sortModel, setSortModel] = useState([]);
  const [filters, setFilters] = useState({
    category: '',
    title: '',
  });
  const [selectedItem, setSelectedItem] = useState(null);

  const columns = [
    { field: 'title', headerName: 'Title', width: 200 },
    { field: 'description', headerName: 'Description', width: 300 },
    { field: 'category', headerName: 'Category', width: 150 },
    { field: 'price', headerName: 'Price', type: 'number', width: 120 },
    {
      field: 'actions',
      headerName: 'Actions',
      sortable: false,
      width: 150,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            handleEdit(params.row);
          }}
        >
          Edit
        </Button>
      ),
    },
  ];

  useEffect(() => {
    const fetchItems = async () => {
      const { data } = await axios.get('/admin/menu');
      setItems(data);
    };
    fetchItems();
  }, []);

  const handleFilterChange = (e) => {
    setFilters((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleEdit = (item) => {
    setSelectedItem(item);
  };

  const handleUpdate = async (rowData) => {
    try {
      const { id, category, title, description, price } = rowData;
      await axios.put(`/admin/menu/${id}`, {
        category,
        title,
        description,
        price,
      });
      const updatedRows = await getRows(); // assuming you have a getRows function defined to fetch the updated data from the backend
      setRows(updatedRows);
    } catch (error) {
      console.error(error);
    }
  };

  const getRows = () => {
    if (!items) return [];
    return items.map((item) => ({
      id: item._id, // Use _id as the id field
      category: item.category,
      title: item.title,
      description: item.description,
      price: item.price,
      actions: (
        <>
          <Button size="small" color="primary" onClick={() => handleEdit(item)}>
            Edit
          </Button>
          <Button size="small" color="error">
            Delete
          </Button>
        </>
      ),
    }));
  };

  const setRows = (updatedRow) => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item._id === updatedRow.id) {
          return {
            ...item,
            category: updatedRow.category,
            title: updatedRow.title,
            description: updatedRow.description,
            price: updatedRow.price,
          };
        }
        return item;
      })
    );
  };

  return (
    <>
      <FormControl variant="outlined">
        <InputLabel>Category</InputLabel>
        <Select
          name="category"
          value={filters.category}
          onChange={handleFilterChange}
          style={{ width: '200px' }}
          variant="outlined"
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="Popular">Popular</MenuItem>
          <MenuItem value="Sales">Sales</MenuItem>
          <MenuItem value="Fruits">Fruits</MenuItem>
          <MenuItem value="Vegetables">Vegetables</MenuItem>
          <MenuItem value="Seafood">Seafood</MenuItem>
          <MenuItem value="Kenricks">Kenricks</MenuItem>
          <MenuItem value="Beverages">Beverages</MenuItem>
          <MenuItem value="Misc">Misc</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="Title"
        variant="outlined"
        name="title"
        value={filters.title}
        onChange={handleFilterChange}
        style={{ marginLeft: '16px' }}
      />
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={getRows()}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 20]}
          checkboxSelection
          disableSelectionOnClick
          selectionModel={selection}
          onSelectionModelChange={(newSelection) => {
            setSelection(newSelection.selectionModel);
          }}
          sortModel={sortModel}
          onSortModelChange={(model) => setSortModel(model)}
          getRowId={(row) => row.id} // Use the id field as the row id
        />
      </div>
    </>
  );
};

export default AdminMenuTable;
