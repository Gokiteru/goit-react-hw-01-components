import React from "react";
import Profile from "./profile/Profile";
import user from './profile/user.json';
import FriendList from "./friends_list/Friendlist";
import friends from './friends_list/friends.json';
import Statistics from "./statistics/Statistics";
import statsData from './statistics/data.json';
import TransactionHistory from "./transaction_history/transactionHistory";
import transactions from './transaction_history/transactions.json';


const App = () => {
  return (
    <>
    <Profile
      name={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={statsData} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </>
);
};

export default App;