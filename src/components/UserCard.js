import React from 'react';
import { Card, CardContent, Typography, Button } from '@material-ui/core';

function UserCard({ user, onContact }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{user.name}</Typography>
        <Typography color="textSecondary">{user.role}</Typography>
        <Typography variant="body2">{user.experience}</Typography>
        <Button variant="contained" color="primary" onClick={onContact}>
          Contact
        </Button>
      </CardContent>
    </Card>
  );
}

export default UserCard;