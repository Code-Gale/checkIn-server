const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');

dotenv.config()

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
// Connect to MongoDB
mongoose.connect(process.env.DBURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Use the user routes
app.use('/api/v1', userRoutes);

app.listen(PORT, () => {
  console.log('Listening to requests on', PORT);
});