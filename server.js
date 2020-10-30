const express = require('express');

const server = express();

const PORT = process.env.PORT || 5000;

server.use(express.json());

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

server.get('/', (_, res) => {
  res.send('You are on the homepage');
});

server.post('/post', (req, res) => {
  const { user, password } = req.body;

  res.send(`Welcome ${user}`);
});

server.delete('/delete', (req, res) => {
  const { taskId } = req.body;

  res.json({ delete: true });
});

server.put('/put/:ID', (req, res) => {
  const { ID } = req.params;

  res.send(`Task ${ID} has been updated`);
});
