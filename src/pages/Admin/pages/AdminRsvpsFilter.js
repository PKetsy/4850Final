import React, { useState } from 'react';

import './AdminRsvpsFilter.css';

import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Button,
  Checkbox,
  Modal,
  Box,
  Typography,
} from '@mui/material';

function AdminRsvpsFilter({ rsvps, setFilteredRsvps }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEventTitle, setSelectedEventTitle] = useState('');
  const [isPaid, setIsPaid] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const eventTitles = [...new Set(rsvps.map((rsvp) => rsvp.eventTitle))];

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleEventTitleChange = (e) => {
    setSelectedEventTitle(e.target.value);
  };

  const handlePaidChange = (e) => {
    setIsPaid(e.target.checked);
  };

  const handleGenerateResults = () => {
    let filteredRsvps = rsvps;

    if (searchTerm !== '') {
      filteredRsvps = filteredRsvps.filter(
        (rsvp) =>
          rsvp.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          rsvp.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          rsvp.phoneNumber.includes(searchTerm)
      );
    }

    if (selectedEventTitle !== '') {
      filteredRsvps = filteredRsvps.filter(
        (rsvp) => rsvp.eventTitle === selectedEventTitle
      );
    }

    if (isPaid) {
      filteredRsvps = filteredRsvps.filter((rsvp) => rsvp.paymentStatus);
    }

    setFilteredRsvps(filteredRsvps);

    // Clear the values of the search bar, dropdown, and checkbox
    setSearchTerm('');
    setSelectedEventTitle('');
    setIsPaid(false);
  };

  const handleCheckPaidOrders = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="search-filter">
      <TextField
        label="Search"
        variant="outlined"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <Button variant="contained" onClick={handleGenerateResults}>
        Generate Results
      </Button>
      <FormControl>
        <InputLabel>Select an Event</InputLabel>
        <Select
          className="search-title-label"
          value={selectedEventTitle}
          onChange={handleEventTitleChange}
        >
          {eventTitles.map((eventTitle) => (
            <MenuItem key={eventTitle} value={eventTitle}>
              {eventTitle}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControlLabel
        control={
          <Checkbox
            checked={isPaid}
            onChange={handlePaidChange}
            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
          />
        }
        label="Paid"
      />
      <Button
        variant="contained"
        onClick={handleCheckPaidOrders}
        disabled={!selectedEventTitle || !isPaid}
      >
        Check Paid Orders
      </Button>
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Orders for {selectedEventTitle}
          </Typography>
          {Object.entries(
            rsvps
              .filter(
                (rsvp) =>
                  rsvp.eventTitle === selectedEventTitle && rsvp.paymentStatus
              )
              .reduce((acc, rsvp) => {
                rsvp.eventItems.forEach((item) => {
                  if (!acc[item.itemName]) {
                    acc[item.itemName] = item.quantityReserved;
                  } else {
                    acc[item.itemName] += item.quantityReserved;
                  }
                });
                return acc;
              }, {})
          ).map(([itemName, quantityReserved]) => (
            <Typography key={itemName}>
              {itemName}: {quantityReserved}
            </Typography>
          ))}
        </Box>
      </Modal>
    </div>
  );
}

export default AdminRsvpsFilter;
