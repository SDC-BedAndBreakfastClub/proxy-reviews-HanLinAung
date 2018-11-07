const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/rooms/:listingId/', (req, res) => {
  console.log('yea')
  const options = {
    root: path.join(__dirname,'/public/'),
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true,
    },
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