const express = require('express');
// const fs = require('fs');
// const path = require('path');


const app = express();
const port = 3000;

const data = require('./data.json');
// const jsonFilePath = path.join('C:/Users/mouni/personal-budget/server.js', './data.json');

app.use('/',express.static('public'));

const budget = { 
    myBudget: [
    {
        title:'Eat out',
        budget:25
    },
    {
        title:'Rent',
        budget:375
    },
    {
        title:'Grocery',
        budget:110
    },
]
};

app.get('/hello',(req,res) =>{
    res.send('Hello world');
});
app.get('/budget',(req,res) =>{
    res.json(data);
    // const jsonData = JSON.parse(data);
    // res.json(jsonData);
});
app.get('/bar-chart-data', (req, res) => {
    res.json(data.barChartData);
});

app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`)
});