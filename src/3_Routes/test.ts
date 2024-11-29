import express from 'express';
import { test } from '../2_Controllers/test';

export const router = express.Router();

router.get('/test', test)

