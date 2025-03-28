import { io, Socket } from 'socket.io-client';

let socket: Socket | null = null;

export const initializeSocket = () => {
  if (!socket) {
    socket = io(process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000');

    socket.on('connect', () => {
      console.log('Connected to server');
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from server');
    });
  }

  return socket;
};

export const joinGame = (gameId: string) => {
  if (!socket) initializeSocket();
  socket?.emit('join-game', gameId);
};

export const leaveGame = (gameId: string) => {
  socket?.emit('leave-game', gameId);
};

export const sendMessage = (gameId: string, message: string, recipientId?: string) => {
  socket?.emit('send-message', {
    gameId,
    message,
    recipientId
  });
};

export const submitOrders = (gameId: string, orders: any[]) => {
  socket?.emit('submit-orders', {
    gameId,
    orders
  });
};

export const getSocket = () => {
  if (!socket) return initializeSocket();
  return socket;
};