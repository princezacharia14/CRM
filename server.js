const express = require('express');
const app = express();

// Add your routes and middleware here

const PORT = 3000;

app.get('/', (req,res)=> {
    res.send('Hello World!')
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
