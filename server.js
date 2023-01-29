const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const dotenv = require("dotenv")
const colors = require("colors")
const { connect } = require("mongoose")
const connectDB = require("./config/connectDB")
// config dot env file
dotenv.config();



// database call
connectDB();




// rest object
const app = express()

// middlewares
app.use(morgan("dev"))
app.use(express.json())
app.use(cors())


// routes
app.use("/api/v1/users",require("./routes/userRoute")
)




// port 
const PORT = 8080 || process.env


// listening

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})
