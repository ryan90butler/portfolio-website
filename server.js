const express = require('express');
const app = express();

app.use(express.static('./this is my front page'))

const port = process.env.PORT || 8080

app.listen( port , () => {
  console.log(`Server listening on port ${port}`);
});