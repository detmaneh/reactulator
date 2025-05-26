const path = require('path');
const express = require("express");
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, 'ui/build')));

app.get(/(.*)/, function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/build', 'index.html'));
});
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

const getDigitNumber = (value) => {
  if (value % 1 !== 0) {
    return value.toFixed(4);
  }
  return value;
}

app.post("/sub", (req, res) => {
  let nums = req.body;
  let response = getDigitNumber(Number(Number(nums.num1) - Number(nums.num2)));
  console.log("sub response:" + response + " from " + nums.num1 + " " + nums.num2);
  res.json({ message: response });
});

app.post("/sum", (req, res) => {
  let nums = req.body;
  let response = getDigitNumber(Number(Number(nums.num1) + Number(nums.num2)));
  console.log("sum response:" + response + " from " + nums.num1 + " " + nums.num2);
  res.json({ message: response });
});

app.post("/div", (req, res) => {
  let nums = req.body;
  let response = getDigitNumber(Number(Number(nums.num1) / Number(nums.num2)));
  console.log("div response:" + response + " from " + nums.num1 + " " + nums.num2);
  res.json({ message: response });
});

app.post("/mul", (req, res) => {
  let nums = req.body;
  let response = getDigitNumber(Number(Number(nums.num1) * Number(nums.num2)));
  console.log("mul response:" + response + " from " + nums.num1 + " " + nums.num2);
  res.json({ message: response });
});

app.post("/perc", (req, res) => {
  let nums = req.body;
  let response = getDigitNumber(Number(Number(nums.num2) * Number((Number(nums.num1) / 100))));
  console.log("perc response:" + response + " from " + nums.num1 + " " + nums.num2);
  res.json({ message: response });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


// app.use(express.static('public'));
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(__dirname));

app.use((req, res, next) => {
  res.status(404).send('Sorry, the requested resource was not found.');
});
