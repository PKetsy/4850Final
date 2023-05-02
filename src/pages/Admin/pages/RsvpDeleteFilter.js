import React, { useState } from 'react';

import './RsvpDeleteFilter.css';

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

function RsvpDeleteFilter({ rsvps, setFilteredRsvps }) {
  const [selectedEventTitle, setSelectedEventTitle] = useState('');
  const [isPaid, setIsPaid] = useState(false);
  const [isUnpaid, setIsUnpaid] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const eventTitles = [...new Set(rsvps.map((rsvp) => rsvp.eventTitle))];

  const handleEventTitleChange = (e) => {
    setSelectedEventTitle(e.target.value);
  };

  const handlePaidChange = (e) => {
    setIsPaid(e.target.checked);
  };

  const handleCheckPaidOrders = () => {
    setIsModalOpen(true);
  };

  const handleUnpaidchange = (e) => {
    setIsUnpaid(e.target.checked);
  };

  const handleCheckUnpaidOrders = () => {
    setIsModalOpen(true);
  };

  const handleDeleteRsvps = async () => {
    try {
      const response = await fetch(
        `/admin/rsvps?eventTitle=${selectedEventTitle}`
      );
      if (!response.ok) {
        throw new Error(
          `Failed to fetch RSVPs for ${selectedEventTitle}: ${response.statusText}`
        );
      }
      const rsvps = await response.json();

      // Filter the RSVPs based on the selected event title and payment status
      const filteredRsvps = rsvps.filter(
        (rsvp) =>
          rsvp.eventTitle === selectedEventTitle &&
          (isPaid ? rsvp.paymentStatus === true : rsvp.paymentStatus === false)
      );

      // Delete the filtered RSVPs
      for (const rsvp of filteredRsvps) {
        const deleteResponse = await fetch(`/admin/rsvps/${rsvp._id}`, {
          method: 'DELETE',
        });
        if (!deleteResponse.ok) {
          throw new Error(
            `Failed to delete RSVP: ${deleteResponse.statusText}`
          );
        }
      }

      // Reload the page
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="search-filter">
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
      <FormControlLabel
        control={
          <Checkbox
            checked={isUnpaid}
            onChange={handleUnpaidchange}
            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
          />
        }
        label="Not Paid"
      />
      <Button
        variant="contained"
        onClick={handleCheckPaidOrders}
        disabled={!selectedEventTitle || !isPaid}
      >
        Delete Paid Orders
      </Button>
      <Button
        variant="contained"
        onClick={handleCheckUnpaidOrders}
        disabled={!selectedEventTitle || !isUnpaid}
      >
        Delete Unpaid Orders
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
            Are you sure you want to delete all RSVP orders for
            {selectedEventTitle}?
          </Typography>
          <Button
            variant="contained"
            onClick={() => setIsModalOpen(false)}
            sx={{ mr: 2 }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleDeleteRsvps}
            sx={{ backgroundColor: 'red', color: 'white' }}
          >
            Delete RSVPs
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default RsvpDeleteFilter;
