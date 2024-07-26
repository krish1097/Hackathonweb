import React, { useState } from 'react';
import { Modal, TextField, Button } from '@material-ui/core';
import axios from 'axios';

function ContactModal({ isOpen, onClose, user }) {
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/send-email', {
        to: user.email,
        message: message
      });
      alert('Email sent successfully!');
      onClose();
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email. Please try again.');
    }
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <div>
        <h2>Contact {user?.name}</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Message"
            multiline
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            fullWidth
          />
          <Button type="submit" variant="contained" color="primary">
            Send
          </Button>
        </form>
      </div>
    </Modal>
  );
}

export default ContactModal;