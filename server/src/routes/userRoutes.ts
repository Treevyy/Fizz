import { Router } from 'express';

const router = Router();

router.get('/users', (req, res) => {
  res.send('Get all users');
});

router.post('/users', (req, res) => {
  res.send('Create a user');
});

export default router;