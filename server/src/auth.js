import express from 'express'; // Import express for creating the router
import bcrypt from 'bcryptjs'; // Import bcryptjs for password hashing

// ...existing code...

// Example usage
bcrypt.hash(password, 10, (err, hash) => {
  // ...existing code...
});

bcrypt.compare(password, hash, (err, res) => {
  // ...existing code...
});
