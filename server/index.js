const express = require("express");
const db = require("./config/db");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());

/*------------------- TRAIN ------------------------------*/
// Route to get all trains

app.get("/train/get", (req, res) => {
  db.query("SELECT * FROM train", (err, result) => {
    if (err) {
      console.log(err);
    }

    res.send(result);
  });
});

// Route to get one train

app.get("/train/getFromId", (req, res) => {
  const id = req.body.id;

  db.query(
    "SELECT * FROM train WHERE train_id = ?",
    id,

    (err, result) => {
      if (err) {
        console.log(err);
      }

      res.send(result);
    }
  );
});

// Route for creating the train

app.post("/train/create", (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const model = req.body.model;
  const no_of_seats = req.body.no_of_seats;

  console.log(req);
  console.log(id, name, model, no_of_seats);

  db.query(
    "INSERT INTO train (train_id, train_name, train_model, train_no_of_seats) VALUES (?,?,?,?)",
    [id, name, model, no_of_seats],
    (err, result) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      } else {
        res.sendStatus(200);
      }

      console.log(result);
    }
  );
});

// Route to update a train

app.post("/train/update", (req, res) => {
  const name = req.body.name;
  const id = req.body.id;

  console.log(id);

  db.query(
    "UPDATE train SET train_name = ? WHERE train_id = ?",
    [name, id],
    (err, result) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      } else {
        res.sendStatus(200);
      }

      console.log(result);
    }
  );
});

// Route to delete a train

app.delete("/train/delete", (req, res) => {
  const id = req.body.id;

  db.query("DELETE FROM train WHERE train_id= ?", id, (err, result) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});

/*------------------- PASSENGER ------------------------------*/
// Route to get all passenger

app.get("/passenger/get", (req, res) => {
  db.query("SELECT * FROM passenger", (err, result) => {
    if (err) {
      console.log(err);
    }

    res.send(result);
  });
});

// Route to get one passenger

app.get("/passenger/getFromId", (req, res) => {
  const id = req.body.id;

  db.query(
    "SELECT * FROM passenger WHERE passenger_id = ?",
    id,

    (err, result) => {
      if (err) {
        console.log(err);
      }

      res.send(result);
    }
  );
});

// Route for creating a passenger

app.post("/passenger/create", (req, res) => {
  const id = req.body.id;
  const first = req.body.first;
  const last = req.body.last;
  const phone = req.body.phone;
  const email = req.body.email;
  const points = req.body.points;
  const sub_id = req.body.sub_id;

  console.log(req);

  db.query(
    "INSERT INTO passenger (passenger_id, passenger_first_name, passenger_last_name, passenger_phone_number, passenger_email, subscription_points, subscription_id) VALUES (?,?,?,?,?,?,?)",
    [id, first, last, phone, email, points, sub_id],
    (err, result) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      } else {
        res.sendStatus(200);
      }

      console.log(result);
    }
  );
});

// Route to update a passenger

app.post("/passenger/update", (req, res) => {
  const name = req.body.name;
  const id = req.body.id;

  db.query(
    "UPDATE passenger SET passenger_name = ? WHERE passenger_id = ?",
    [name, id],
    (err, result) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      } else {
        res.sendStatus(200);
      }

      console.log(result);
    }
  );
});

// Route to delete a passenger

app.delete("/passenger/delete", (req, res) => {
  const id = req.body.id;

  db.query("DELETE FROM passenger WHERE passenger_id= ?", id, (err, result) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});

/*------------------- SUBSCRIPTION ------------------------------*/

app.get("/subscription/get", (req, res) => {
  db.query("SELECT * FROM subscription", (err, result) => {
    if (err) {
      console.log(err);
    }

    res.send(result);
  });
});

// Route to get one subscription

app.get("/subscription/getFromId", (req, res) => {
  const id = req.body.id;

  db.query(
    "SELECT * FROM subscription WHERE subscription_id = ?",
    id,

    (err, result) => {
      if (err) {
        console.log(err);
      }

      res.send(result);
    }
  );
});

// Route to get one subscription by membership rank

app.get("/subscription/getFromType", (req, res) => {
  const rank = req.body.rank;

  db.query(
    "SELECT * FROM subscription WHERE subscription_membership_rank = ?",
    rank,

    (err, result) => {
      if (err) {
        console.log(err);
      }

      res.send(result);
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
