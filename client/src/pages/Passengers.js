import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../App.css";

function Passengers() {
  const [postList, setPostList] = useState([]);
  const [membershipList, setMembershipList] = useState([]);

  useEffect(() => {
    Axios.get("https://railroad-backend.onrender.com/passenger/get").then(
      (data) => {
        setPostList(data.data);
      }
    );
    Axios.get("https://railroad-backend.onrender.com/subscription/get").then(
      (data) => {
        setMembershipList(data.data);
      }
    );
  }, []);

  console.log(membershipList);
  return (
    <div className="CustomTable">
      <h1>Active registered passengers</h1>
      <table>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Membership Rank</th>
        </tr>
        {postList.map((val, key) => {
          const membershipRank = membershipList.find(
            (membership) => membership.subscription_id === val.subscription_id
          );
          return (
            <tr key={key}>
              <td>{val.passenger_first_name}</td>
              <td>{val.passenger_last_name}</td>
              <td>{val.passenger_email}</td>
              {membershipRank && (
                <td>{membershipRank.subscription_membership_rank}</td>
              )}
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Passengers;
