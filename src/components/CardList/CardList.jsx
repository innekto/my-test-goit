import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from 'components/Card/Card';
import { ListEl } from 'components/CardList/CardList.styled';

export const CardList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://6467653b2ea3cae8dc2d8560.mockapi.io/fol/fol'
        );
        setUsers(response.data);
      } catch (error) {
        console.error('Помилка при отриманні даних:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <ListEl>
      {users.map(user => (
        <Card aboutUser={user} key={user.id} />
      ))}
    </ListEl>
  );
};
