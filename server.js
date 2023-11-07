const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; // Use the provided PORT or default to 3000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
