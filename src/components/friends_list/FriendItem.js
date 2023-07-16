import React from "react";
import styles from './friends.module.css'
import PropTypes from 'prop-types';

const FriendItem = ({avatar, name, isOnline}) => (
    <li className={styles.item}>
    <span
      className={
        isOnline ? styles.onlineStatus : styles.offlineStatus
      }
    ></span>
    <img
      className={styles.avatar}
      src={avatar}
      alt="User avatar"
      width="48"
    />
    <p className={styles.name}>{name}</p>
    </li>
);

FriendItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool
}

export default FriendItem