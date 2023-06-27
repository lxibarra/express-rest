import express from 'express';
import { indexPage } from '../controllers/index.js';
import { addMessage, messagesPage } from '../controllers/messages.js';
const router = express.Router();

router.get('/', indexPage);

router.get('/messages', messagesPage)

router.post('/messages', addMessage)

export default router;
