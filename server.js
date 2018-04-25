const express = require('express');

const app = express();

app.get('/hello', (req, res) => {
    res.json({'msg':'Hello mofo'})
});

app.listen(8081, ()=> {
    console.log('server is ready')
});