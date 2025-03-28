import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
});

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Diplomacy Game API is running');
});

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  socket.on('join-game', (gameId) => {
    socket.join(gameId);
    console.log(`User ${socket.id} joined game ${gameId}`);
  });

  socket.on('leave-game', (gameId) => {
    socket.leave(gameId);
    console.log(`User ${socket.id} left game ${gameId}`);
  });

  socket.on('send-message', (data) => {
    const { gameId, recipientId, message } = data;

    if (recipientId) {
      io.to(recipientId).emit('receive-message', {
        senderId: socket.id,
        message
      });
    } else {
      io.to(gameId).emit('game-update', {
        type: 'message',
        message
      });
    }
  });

  socket.on('submit-orders', (data) => {
    const { gameId, orders } = data;
    io.to(gameId).emit('game-update', {
      type: 'orders-submitted',
      playerId: socket.id
    });
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/diplomacy')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});