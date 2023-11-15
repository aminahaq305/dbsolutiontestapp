import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../App.css";

function Trains() {
  const [postList, setPostList] = useState([]);
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [model, setModel] = useState("");
  const [noOfSeats, setNoOfSeats] = useState(0);

  const submitPost = () => {
    const currentId = postList[postList.length - 1].train_id;
    console.log(currentId);
    setId(currentId + 1);
    Axios.post("https://railroad-backend.onrender.com/train/create", {
      id: id,
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
    <div className="Trains">
      <div className="TrainContainer">
        {postList.map((val, key) => {
          return (
            <div className="Train">
              <h1 className="post-title">{val.train_name}</h1>
              <h4>{val.train_model}</h4>
              <h5>Capacity: {val.train_no_of_seats}</h5>
            </div>
          );
        })}
      </div>
      <div className="AddTrainContainer">
        <label>Train name: </label>
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label>Train model: </label>
        <input
          type="text"
          onChange={(e) => {
            setModel(e.target.value);
          }}
        />
        <label>Train number of seats: </label>
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
