const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const colors = require('colors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

//route path
const authRouths = require('./routes/authRoutes');
const errorHandler = require('./middlewares/errorMiddleware');

dotenv.config();

connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(morgan('dev'));
app.use(errorHandler);

// API  Routes
app.use('/api/v1/auth' , authRouths);
app.use('/api/v1/openai' , require("./routes/openaiRoutes"));


const PORT = process.env.PORT || 8080

app.listen(PORT , () => {
    console.log(`Server running in ${process.env.DEV_MODE} on ${PORT}` .bgCyan.white);
});

