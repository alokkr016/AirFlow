const express = require('express');
let cors = require('cors');

const app = express();
app.use(cors());
app.use(express.static('static'));
const port = 3000;

let tasks = [
  { taskId: 1, text: 'Fix bug #101', priority: 2 },
  { taskId: 2, text: 'Implement feature #202', priority: 1 },
  { taskId: 3, text: 'Write documentation', priority: 3 }
];

app.get('/', (req, res) => {
 
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
