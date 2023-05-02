import React, { useState, useEffect } from 'react';
import AdminRsvpsFilter from './AdminRsvpsFilter';
import './AdminRsvpsTable.css';

import { styled } from '@mui/material/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  Paper,
  IconButton,
  Collapse,
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogActions,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import DeleteIcon from '@mui/icons-material/Delete';
import RsvpDeleteFilter from './RsvpDeleteFilter';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  table: {
    minWidth: 650,
  },
}));

function AdminRsvpsTable() {
  const [rsvps, setRsvps] = useState([]);
  const [filteredRsvps, setFilteredRsvps] = useState([]);

  useEffect(() => {
    const fetchRsvps = async () => {
      const response = await fetch('/admin/rsvps');
      console.log(response);
      const data = await response.json();
      setRsvps(data);
    };
    fetchRsvps();
  }, []);

  async function updateRsvp(_id, updates) {
    const response = await fetch(`/admin/rsvps/${_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updates),
    });
    if (!response.ok) {
      throw new Error(`Failed to update RSVP: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  }

  function Row(props) {
    const { rsvp } = props;
    const [isPaid, setIsPaid] = useState(rsvp.paymentStatus);
    const [open, setOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const handlePaymentStatusChange = async (e) => {
      const updatedRsvp = await updateRsvp(rsvp._id, {
        paymentStatus: e.target.checked,
      });
      setIsPaid(updatedRsvp.paymentStatus);
      window.location.reload();
    };

    const handleDeleteClick = async (_id) => {
      const response = await fetch(`/admin/rsvps/${rsvp._id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error(`Failed to delete RSVP: ${response.statusText}`);
      }
      window.location.reload();
    };

    const handleOpen = () => {
      setOpenModal(true);
    };

    const handleClose = () => {
      setOpenModal(false);
    };

    const handleDelete = () => {
      handleDeleteClick(rsvp._id);
      handleClose();
    };

    return (
      <>
        <TableRow className={rsvp.paymentStatus ? 'paid-row' : 'unpaid-row'}>
          <TableCell>
            <IconButton size="small" onClick={() => setOpen(!open)}>
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell>{rsvp.firstName}</TableCell>
          <TableCell>{rsvp.lastName}</TableCell>
          <TableCell>{rsvp.eventTitle}</TableCell>
          <TableCell>{rsvp.email}</TableCell>
          <TableCell>{rsvp.phoneNumber}</TableCell>
          <TableCell>${rsvp.totalPrice}</TableCell>
          <TableCell>
            <Checkbox checked={isPaid} onChange={handlePaymentStatusChange} />
          </TableCell>
          <TableCell>
            <IconButton onClick={handleOpen}>
              <DeleteIcon style={{ color: 'rgb(163, 50, 28)' }} />
            </IconButton>
            <Dialog open={openModal} onClose={handleClose}>
              <h2>Please confirm</h2>
              <DialogContent>
                <p>You are about to delete the order for: </p>
                <h3>{`${rsvp.firstName} ${rsvp.lastName}`}</h3>
                <p>This action can not be undone.</p>
              </DialogContent>
              <DialogActions>
                <Button type="button" onClick={handleClose}>
                  CANCEL
                </Button>
                <Button type="button" onClick={handleDelete} color="secondary">
                  DELETE
                </Button>
              </DialogActions>
            </Dialog>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box margin={1}>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell
                        style={{
                          fontSize: '14px',
                          fontWeight: 'bold',
                        }}
                      >
                        Item Name
                      </TableCell>
                      <TableCell
                        style={{
                          fontSize: '14px',
                          fontWeight: 'bold',
                        }}
                      >
                        Item Price
                      </TableCell>
                      <TableCell
                        style={{
                          fontSize: '14px',
                          fontWeight: 'bold',
                        }}
                      >
                        Quantity Reserved
                      </TableCell>
                      <TableCell
                        style={{
                          fontSize: '14px',
                          fontWeight: 'bold',
                        }}
                      >
                        Individual Item Total
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rsvp.eventItems.map((item) => (
                      <TableRow key={item.itemName}>
                        <TableCell component="th" scope="row">
                          {item.itemName}
                        </TableCell>
                        <TableCell>${item.itemPrice}</TableCell>
                        <TableCell>{item.quantityReserved}</TableCell>
                        <TableCell>
                          ${item.quantityReserved * item.itemPrice}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </>
    );
  }

  return (
    <div>
      <AdminRsvpsFilter rsvps={rsvps} setFilteredRsvps={setFilteredRsvps} />
      <RsvpDeleteFilter rsvps={rsvps} setFilteredRsvps={setFilteredRsvps} />
      <TableContainer component={Paper}>
        <Table className={StyledTableCell.table} aria-label="collapsible table">
          {filteredRsvps.map((rsvp) => (
            <Row key={rsvp._id} rsvp={rsvp} />
          ))}
          <TableHead>
            <TableRow className="heading-cell">
              <TableCell />
              <TableCell
                style={{
                  fontSize: '16px',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  color: 'white',
                }}
              >
                First Name
              </TableCell>
              <TableCell
                style={{
                  fontSize: '16px',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  color: 'white',
                }}
              >
                Last Name
              </TableCell>
              <TableCell
                style={{
                  fontSize: '16px',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  color: 'white',
                }}
              >
                Event Title
              </TableCell>
              <TableCell
                style={{
                  fontSize: '16px',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  color: 'white',
                }}
              >
                Email
              </TableCell>
              <TableCell
                style={{
                  fontSize: '16px',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  color: 'white',
                }}
              >
                Phone Number
              </TableCell>
              <TableCell
                style={{
                  fontSize: '16px',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  color: 'white',
                }}
              >
                Order Total
              </TableCell>
              <TableCell
                style={{
                  fontSize: '16px',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  color: 'white',
                }}
              >
                Deposit Received
              </TableCell>
              <TableCell
                style={{
                  fontSize: '16px',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  color: 'white',
                }}
              >
                Remove
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rsvps.map((rsvp) => (
              <Row key={rsvp._id} rsvp={rsvp} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default AdminRsvpsTable;
