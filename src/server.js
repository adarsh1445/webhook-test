const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // to parse incoming JSON payloads

app.post('/webhook', (req, res) => {
  const payload = req.body;
  console.log('Received payload:', payload);
  
 
  res.json({ status: 'success' });
});

app.listen(port, () => {
  console.log(`Webhook listening at http://localhost:${port}/webhook`);
});
