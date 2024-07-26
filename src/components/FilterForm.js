import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

function FilterForm({ onFilter }) {
  const [role, setRole] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter({ role, location });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />
      <TextField
        label="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary">
        Filter
      </Button>
    </form>
  );
}

export default FilterForm;