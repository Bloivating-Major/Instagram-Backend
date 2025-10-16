require("dotenv").config();
const app = require("./src/app.js");
const connectDB = require('./src/database/db.js');

connectDB();
const PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`Server is running on  http://localhost:${PORT}`);
});