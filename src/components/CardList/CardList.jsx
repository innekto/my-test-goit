import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from 'components/Card/Card';
import { ListEl, Button } from 'components/CardList/CardList.styled';

export const CardList = () => {
  const [users, setUsers] = useState([]);
  const [visibleItems, setVisibleItems] = useState(3);

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

  const loadMoreItems = () => {
    setVisibleItems(prevVisibleItems => prevVisibleItems + 3);
  };

  return (
    <>
      <ListEl>
        {users.slice(0, visibleItems).map(user => (
          <Card aboutUser={user} key={user.id} />
        ))}
      </ListEl>
      {visibleItems < users.length && (
        <Button onClick={loadMoreItems}>Load More</Button>
      )}
    </>
  );
};
