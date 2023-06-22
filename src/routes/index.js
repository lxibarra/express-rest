import express from 'express';
import { testEnvironmentVariable, SecondVAR } from '../settings.js';

const router = express.Router();

router.get('/', (req, res) => res.status(200)
  .json({ 
    message:testEnvironmentVariable,
    added: SecondVAR 
  }));

export default router;
