const express = require('express');
const app = express();
app.get('/', (req, res) => {
  someAsyncOperation().then(() => {
    res.send('Hello');
  }).catch(error => {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  });
});
app.listen(3000, () => console.log('Server listening on port 3000'));

async function someAsyncOperation() {
  try {
    const success = Math.random() < 0.5;
    if (!success) {
      throw new Error('Something went wrong!');
    }
  } catch (error) {
    console.error('Async Operation Error:', error);
    throw error; // Re-throw the error to be caught by the route handler
  }
} 