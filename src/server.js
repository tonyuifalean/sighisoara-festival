import express from 'express';
import path from 'path';

const app = express();

app.use(express.static(path.join(__dirname, '/build')));
app.get('/', (req, res) => res.send('Hello!'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/build/index.html'));
});

app.listen(8000, () => console.log('Listening on port 8000'));