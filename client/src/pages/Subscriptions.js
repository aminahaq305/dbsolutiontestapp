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
    <div className="Subscriptions">
      <div className="SubscriptionContainer">
        {postList.map((val, key) => {
          return (
            <div className="Subscription">
              <h1 className="subscription-title">
                {val.subscription_membership_rank}
              </h1>
              <h4>{val.subscription_description}</h4>
              <h5>Cost: {val.subscription_fees}/year</h5>
              <h5>
                Points needed for free train ride:{" "}
                {val.subscription_points_free}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Subscriptions;
