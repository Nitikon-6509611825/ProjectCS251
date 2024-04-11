const express = require('express')
const mysql = require('mysql');

const app = express();

//MySQL Connection
const Connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database:'mysql_projectcs251'

})

Connection.connect((err) => {
    if (err){
        console.log('Error connecting to MySQL database =',err)
        return
    }
    console.log('MySQL successfully connected!');
})

//CREATE Routes
app.post("/create", async (req, res) =>{
    
})

app.listen(3000, ()=> console.log('Server is running on port 3000'));