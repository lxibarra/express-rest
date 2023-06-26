import express from 'express';
import { indexPage } from '../controllers/index.js';
import { messagesPage } from '../controllers/messages.js';
const router = express.Router();

router.get('/', indexPage);

router.get('/messages', messagesPage)

export default router;
