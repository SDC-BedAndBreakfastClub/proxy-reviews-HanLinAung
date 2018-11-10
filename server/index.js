const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 8081;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.redirect('/rooms/3');
});

app.get('/rooms/:listingId/', (req, res) => {
  const options = {
    root: path.join(__dirname, '..', 'public/'),
  };
  res.sendFile('index.html', options, (err) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      console.log('Index sent');
    }
  });
});

app.listen(port,  () => {
  console.log(`server running at: http://localhost:${port}`);
});