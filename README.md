# Unhandled Promise Rejection in Express.js Route Handler

This repository demonstrates a common, yet easily overlooked, error in Express.js applications: unhandled promise rejections within route handlers.  Asynchronous operations within routes often use promises, and if these promises reject (due to errors), and that rejection isn't handled, the server process can crash silently without informative error messages.

## The Problem

The `bug.js` file contains an Express.js app with a route handler that performs an asynchronous operation.  This operation has a 50% chance of throwing an error. However, the error handling is incomplete. This results in unhandled promise rejections, causing the application to crash without a helpful error message.

## The Solution

The `bugSolution.js` file shows the corrected version. It uses a `try...catch` block inside the asynchronous operation or properly handles the `.catch()` of the promise to gracefully manage errors, sending a proper HTTP error response instead of crashing the server.  This provides a better user experience and allows for easier debugging.

## How to Reproduce

1. Clone this repository.
2. Navigate to the directory containing `bug.js` (or `bugSolution.js` to see the fixed version).
3. Run `npm install express` to install the required dependency.
4. Run `node bug.js` (or `node bugSolution.js`).
5. Observe the server's behavior. The original buggy version will crash intermittently, while the solution version handles errors correctly and gracefully.