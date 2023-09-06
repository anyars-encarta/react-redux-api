import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../store/users/usersSlice';

function FetchedUsers() {
  const { users, isLoading, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  // Loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Error state
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Check if users is an array before mapping over it
  if (!Array.isArray(users)) {
    return <div>No users available</div>;
  }
  
  // Default state
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id.value}>
          {user.name.first} {user.name.last}
        </li>
      ))}
    </ul>
  );
}

export default FetchedUsers;
