const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.use('/', express.static(path.resolve(__dirname, '../dist')))

app.get('/', (req, res) => {
    const htmlFile = path.resolve(__dirname, '../dist/iamge-caption.html');
    const content = fs.readFileSync(htmlFile, 'utf-8');
    res.send(content);
});

app.listen(9003, () => {
    console.log('Application is runnig');
});