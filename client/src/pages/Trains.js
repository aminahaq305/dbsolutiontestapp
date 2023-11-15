import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../App.css";

function Trains() {
  const [postList, setPostList] = useState([]);
  const [name, setName] = useState("");
  const [model, setModel] = useState("");
  const [noOfSeats, setNoOfSeats] = useState(0);

  const submitPost = () => {
    const currentId = postList[postList.length - 1].train_id;
    Axios.post("https://railroad-backend.onrender.com/train/create", {
      id: currentId + 1,
      name: name,
      model: model,
      no_of_seats: noOfSeats,
    });
    window.location.reload(false);
  };

  useEffect(() => {
    Axios.get("https://railroad-backend.onrender.com/train/get").then(
      (data) => {
        setPostList(data.data);
      }
    );
  }, []);
  return (
    <div className="CustomTable">
      <h1>Active running trains</h1>
      <table>
        <tr>
          <th>Name</th>
          <th>Model</th>
          <th>Capacity (seats)</th>
        </tr>
        {postList.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.train_name}</td>
              <td>{val.train_model}</td>
              <td>{val.train_no_of_seats}</td>
            </tr>
          );
        })}
      </table>
      <div className="AddTrainContainer">
        <h1>Register a new train</h1>
        <label>Name: </label>
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label>Model: </label>
        <input
          type="text"
          onChange={(e) => {
            setModel(e.target.value);
          }}
        />
        <label>Capacity (seats): </label>
        <input
          type="text"
          onChange={(e) => {
            setNoOfSeats(e.target.value);
          }}
        />
        <button onClick={submitPost}>Add Train</button>
      </div>
    </div>
  );
}

export default Trains;
