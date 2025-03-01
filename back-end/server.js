const express = require('express');
const path = require('path');
const cors = require('cors'); // Add this line
const app = express();

app.use(cors()); // Add this line

// Serve static files from the uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
const PORT=80;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
