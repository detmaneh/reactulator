// server/index.js
const path = require('path');
const express = require("express");
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 6040;
const app = express();

app.use(bodyParser.json());

app.use(express.static(path.resolve("/", '/ui/build')));
app.get(/(.*)/, (req, res) => {
  res.sendFile(path.resolve("/", '/ui/build', 'index.html'));
});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.get("/api", (req, res) => {
  res.json({ message: "CalcServer Conected" });
});


app.post("/sub", (req, res) => {
  let nums = req.body;
  let response = getDigitNumber(Number(Number(nums.num1) - Number(nums.num2)));
  console.log("sub response:"+response + " from "+ nums.num1 + " "+ nums.num2);
  res.json({ message: response });
});

app.post("/sum", (req, res) => {
  let nums = req.body;
  let response = getDigitNumber(Number(Number(nums.num1) + Number(nums.num2)));
  console.log("SUM response:"+response + " from "+ nums.num1 + " "+ nums.num2);
  res.json({ message: response });
});

app.post("/div", (req, res) => {
  let nums = req.body;
  let response = getDigitNumber(Number(Number(nums.num1) / Number(nums.num2)));
  console.log("div response:"+response + " from "+ nums.num1 + " "+ nums.num2);
  res.json({ message: response });
});

app.post("/mul", (req, res) => {
  let nums = req.body;
  let response = getDigitNumber(Number(Number(nums.num1) * Number(nums.num2)));
  console.log("mul response:"+response + " from "+ nums.num1 + " "+ nums.num2);
  res.json({ message: response });
});

app.post("/perc", (req, res) => {
  let nums = req.body;
  let response = getDigitNumber(Number(Number(nums.num2) * Number( ( Number(nums.num1) / 100))));
  console.log("perc response:"+response + " from "+ nums.num1 + " "+ nums.num2);
  res.json({ message: response });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


const getDigitNumber = (value) => {

    if(value % 1 !== 0) {
        return value.toFixed(4); 
    }
    return value; 
}