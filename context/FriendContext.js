// FriendContext.js
import React, { createContext, useContext, useState } from 'react';

const FriendContext = createContext();

export const useFriends = () => {
  const context = useContext(FriendContext);
  if (!context) {
    throw new Error('useFriends must be used within a FriendProvider');
  }
  return context;
};

export const FriendProvider = ({ children }) => {
  const [friends, setFriends] = useState([]);

  const addFriend = (friend) => {
    setFriends([...friends, friend]);
  };

  return (
    <FriendContext.Provider value={{ friends, addFriend }}>
      {children}
    </FriendContext.Provider>
  );
};
