const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/calculate', (req, res) => {
  const num1 = req.query.num1;
  const num2 = req.query.num2;
  const operation = req.query.operation;

  let result;
  switch (operation) {
    case 'add':
      result = parseFloat(num1) + parseFloat(num2);
      break;
    case 'subtract':
      result = parseFloat(num1) - parseFloat(num2);
      break;
    case 'multiply':
      result = parseFloat(num1) * parseFloat(num2);
      break;
    case 'divide':
      result = parseFloat(num1) / parseFloat(num2);
      break;
    default:
      result = 'Invalid operation';
  }

  res.send(`Result: ${result}`);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});