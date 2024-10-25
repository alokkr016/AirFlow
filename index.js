const express = require('express');
let cors = require('cors');

const app = express();
app.use(cors());
app.use(express.static('static'));
const port = 3010;


app.get('/', (req, res) => {
 
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
