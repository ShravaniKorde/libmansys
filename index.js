const express = require("express");
const {users} = require("./data/users.json")
const dotenv = require("dotenv");

// DataBase Connection
const DbConnection = require("./databaseConnection")

// Importing Routes
const usersRouter = require("./routes/users");
const booksRouter = require("./routes/books")

dotenv.config();
const app = express();
DbConnection();

const PORT = 8081;

app.use(express.json());

app.get("/", (req, res)=>{
    res.status(200).json({
        message: "Server is up and running"
    })
})


app.use("/users", usersRouter);
app.use("/books", booksRouter);


app.get("*", (req, res)=>{
    res.status(404).json({
        message: "This route does not exists"
    })
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})