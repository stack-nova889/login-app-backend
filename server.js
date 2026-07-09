import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import connectDB from './config/database.js';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/authRoutes.js';
const app = express();


await connectDB();
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  }),
);
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('API Working 🚀');
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`App listening in port:${PORT}`);
});
