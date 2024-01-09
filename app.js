// app.js
const app = require('./src/middleware/middleware');
const databaseConfig = require('./src/config/database');
const userRoutes = require('./src/routes/userRoutes');
require("dotenv").config();
const PORT = process.env.PORT || 4000;

databaseConfig()

// Use userRoutes
app.use(userRoutes);


app.listen(PORT, () => {
    console.log(`Listnening on port ${PORT}`);
  });