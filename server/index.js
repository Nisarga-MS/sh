const express = require("express");
const configDB = require("./config/configDB");

const app = express();

const PORT = 3000;

// database connection
configDB();

app.listen(PORT, ()=>{
    console.log(`server is up and running on port🚀 ${PORT}`);
})
