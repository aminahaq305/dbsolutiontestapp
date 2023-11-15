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
    <div className="Passengers">
      <div className="PassengerContainer">
        {postList.map((val, key) => {
          const membershipRank = membershipList.filter(
            (membership) => membership.subscription_id === val.subscription_id
          );
          return (
            <div className="Passenger">
              <h1 className="passenger-title">
                {val.passenger_first_name} {val.passenger_last_name}
              </h1>
              <h4>{val.passenger_email}</h4>
              <h5>Points: {val.subscription_points}</h5>
              <h5>Rank id: {val.subscription_id}</h5>
              <h5>Rank: {membershipRank[0].subscription_membership_rank}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Passengers;
