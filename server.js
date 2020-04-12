const express = require('express');
const app = express();

const s = 0;
app.use(express.static(__dirname + '/build'));

app.listen(3000, function() {
    console.log('Server on port 3000');
}); 