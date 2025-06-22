const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('LINE bot is running!');
});

// ここが重要！LINEのWebhook用エンドポイント
app.post('/webhook', (req, res) => {
  console.log('Received webhook:', req.body.events);
  res.sendStatus(200); // LINEに「受け取ったよ」と返す
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
