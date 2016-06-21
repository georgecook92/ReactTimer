var express = require('express');

var app = express();
/* global process */
const PORT = process.env.PORT || 3000;

app.use( express.static( 'public' ) );

app.listen( PORT,
  function () {
    console.log("Listening on port " + PORT);
} );
