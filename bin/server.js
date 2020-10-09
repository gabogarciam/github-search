import express from 'express';
import path from 'path';

const port = process.env.PORT || 3000;
const app = express();


app.use(express.static(__dirname));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

app.listen(port, () => { console.log(`Server runing in a port: ${port}`) });