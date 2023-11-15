import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../App.css";

function Passengers() {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    Axios.get("https://railroad-backend.onrender.com/passenger/get").then(
      (data) => {
        setPostList(data.data);
      }
    );
  }, []);

  return (
    <div className="Passengers">
      <div className="PassengerContainer">
        {postList.map((val, key) => {
          return (
            <div className="Passenger">
              <h1 className="passenger-title">
                {val.passenger_first_name} {val.passenger_last_name}
              </h1>
              <h4>{val.passenger_email}</h4>
              <h5>Points: {val.subscription_points}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Passengers;
