import express from "express";
import { signupUser, loginUser, checkUsername } from "../controller/user_controller.js";

import { createPost, getAllPosts, getPost } from "../controller/journal-controller.js";

import { authenticateToken } from "../controller/jwt-controller.js";


const router = express.Router();

router.post('/signup', signupUser);
router.post('/username', checkUsername);
router.post('/login', loginUser);

router.post('/create', authenticateToken, createPost)
router.get('/posts', authenticateToken, getAllPosts)
router.get('/post/:id', authenticateToken, getPost)


export default router;
