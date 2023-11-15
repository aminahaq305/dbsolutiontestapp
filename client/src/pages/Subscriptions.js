import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../App.css";

function Subscriptions() {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    Axios.get("https://railroad-backend.onrender.com/subscription/get").then(
      (data) => {
        setPostList(data.data);
      }
    );
  }, []);

  return (
    <div className="CustomTable">
      <h1>Subscription tiers</h1>
      <table>
        <tr>
          <th>Rank</th>
          <th>Description</th>
          <th>Fee per year</th>
          <th>Points needed for free ride</th>
        </tr>
        {postList.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.subscription_membership_rank}</td>
              <td>{val.subscription_description}</td>
              <td>{val.subscription_fees}</td>

              <td>{val.subscription_points_free}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Subscriptions;
