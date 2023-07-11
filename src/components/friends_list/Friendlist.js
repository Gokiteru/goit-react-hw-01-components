import React from 'react';
import PropTypes from 'prop-types'
import styles from './friends.module.css';

const FriendList = ({ friends }) => (
  <ul className={styles.friend_list}>
    {friends.map(friend => (
      <li className={styles.item} key = {friend.id}>
        <span
          className={
            friend.isOnline ? styles.onlineStatus : styles.offlineStatus
          }
        ></span>
        <img
          className={styles.avatar}
          src={friend.avatar}
          alt="User avatar"
          width="48"
        />
        <p className={styles.name}>{friend.name}</p>
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ),
};

export default FriendList;