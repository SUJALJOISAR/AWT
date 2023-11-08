import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const router=express.Router();

const users=[];

const secretKey='cspit';

// Register a new user
router.post('/register', (req, res) => {
    const { username, password } = req.body;
  
    // Check if the username is already taken
    if (users.find((user) => user.username === username)) {
      return res.status(400).json({ error: 'Username already taken' });
    }
  
    // Hash the password before storing it
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) {
        return res.status(500).json({ error: 'Internal Server Error' });
      }
  
      const newUser = { username, password: hash };
      users.push(newUser);
  
      res.status(201).json({ message: 'User registered successfully' });
    });
  });

  
// User login
router.post('/login', (req, res) => {
    const { username, password } = req.body;
  
    // Find the user by username
    const user = users.find((user) => user.username === username);
  
    if (!user) {
      return res.status(401).json({ error: 'Authentication failed' });
    }
  
    // Compare the provided password with the hashed password in the database
    bcrypt.compare(password, user.password, (err, result) => {
      if (err || !result) {
        return res.status(401).json({ error: 'Authentication failed' });
      }
  
      // Create a JWT token upon successful authentication
      const token = jwt.sign({ username: user.username }, secretKey, { expiresIn: '1h' });
  
      res.status(200).json({ message: 'Authentication successful', token });
    });
  });


export default router;
