import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Container } from '@material-ui/core';
import UserCard from './components/UserCard';
import FilterForm from './components/FilterForm';
import ContactModal from './components/ContactModal';

function App() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8000/users');
      setUsers(response.data);
      setFilteredUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleFilter = (filterParams) => {
    // Implement client-side filtering logic here
    const filtered = users.filter(user => {
      // Add your filtering conditions based on filterParams
      return true; // Replace with actual conditions
    });
    setFilteredUsers(filtered);
  };

  const handleContact = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  return (
    <Container>
      <h1>Film Crew Finder</h1>
      <FilterForm onFilter={handleFilter} />
      <Grid container spacing={3}>
        {filteredUsers.map(user => (
          <Grid item xs={12} sm={6} md={4} key={user.id}>
            <UserCard user={user} onContact={() => handleContact(user)} />
          </Grid>
        ))}
      </Grid>
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        user={selectedUser}
      />
    </Container>
  );
}

export default App;