const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation that might throw an error
  someAsyncOperation().then(() => {
    res.send('Hello');
  }).catch(error => {
    // Error handling missing or incomplete
    console.error('Error:', error);
    // Express.js doesn't automatically handle errors from async functions within routes.  This will crash the server without explicit error handling here.
    res.status(500).send('Internal Server Error');
  });
});
app.listen(3000, () => console.log('Server listening on port 3000'));

async function someAsyncOperation() {
  // Simulate an asynchronous operation that might fail
  const success = Math.random() < 0.5; // 50% chance of failure
  if (!success) {
    throw new Error('Something went wrong!');
  }
}