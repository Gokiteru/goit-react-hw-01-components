import React from 'react';
import PropTypes from 'prop-types';
import styles from './friends.module.css';
import FriendItem from './FriendItem';

const FriendList = ({ friends }) => (
  <ul className={styles.friend_list}>
    {friends.map(friend => (
      <FriendItem
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
        key={friend.id}
      ></FriendItem>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
