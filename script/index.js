const dotenv = require("dotenv") ;
dotenv.config();

// importing mysql connection
const data = require("./db.js");

// to see whether the path is correct or not
// console.log(data);

// importing express and creating server
const express = require("express");

// cors for frontend
const cors = require("cors");
// for path module and path operations
const path = require("path");
const port = process.env.PORT;

const app = express();
app.use(cors());

// for parsing json file
app.use(express.json());

// serving whole folder instead of single file (index.html)
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.static(path.join(__dirname, "../style")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.get("/student", (req, res) => {
  // using the keyword which we uses previously for mysql paths defining at beginning
  data.query("SELECT * FROM students ", (err, result) => {
    if (err) throw err.message;
    console.log(result);
    res.json(result);
  });
});

// to add data
app.post("/student", (req, res) => {
  // destructiog the body javascript object
  // const id = req.body.id;
  // const name = req.body.name;
  // const course = req.body.course;
  // shortcut to upper one
  const { id, name, course } = req.body;
  const sql = "INSERT INTO students VALUES (? , ? , ?)";
  data.query(sql, [id, name, course], (err, result) => {
    // error handling
    if (err) {
      console.log(err.errno);
      res.json({ message: err } , );
    } else {
      console.log("data inserted succesfully at ");
      // giving repsonde to frontend after no error
     res.json({message : "data inserted succesfully"}) ;
    }
  });
});

// to delete the data
app.delete("/student/:id", (req, res) => {
  // this request is send from frontend
  // const response = await fetch('http://localhost:3000/student/:id' , {
  //           method : 'DELETE'
  //       })
  const { id } = req.params;
  const sql = "DELETE FROM students WHERE id = ?";
  data.query(sql, [id], (err, result) => {
    if (err) {
      console.error(err.message);
      res.json({ message: "Error in deleting !!" });
    } else {
      console.log("data deleted sucessfully !!");
      res.json({ message: "data deleted succesfully !!" });
    }
  });
});

// routing for search
app.get("/student/search", (req, res) => {
  // getting the query from the url
  const { q } = req.query;
  // console.log(q);
  const sql =
    "SELECT * FROM students WHERE id LIKE ? OR name LIKE ? OR course LIKE ? ";
  // for partial values like ro , 10, py , ja
  const value = `%${q}%`;
  console.log(value);
  data.query(sql, [value, value, value], (err, result) => {
    if (err) {
      console.log("Error in searching ", err.message);
      res.json([]) ;
    } else {
      console.log("Match found", result);
      res.json(result);
    }
  });
});

app.listen(port, () => {
  console.log(`port listening succesfully at http://localhost:${port}`);
});
