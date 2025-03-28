import create from 'zustand';

export type Player = {
  id: string;
  name: string;
  country: 'England' | 'France' | 'Germany' | 'Italy' | 'Austria' | 'Russia' | 'Turkey';
  units: Unit[];
  supplyCenters: string[];
};

export type Unit = {
  type: 'army' | 'fleet';
  territory: string;
};

export type GamePhase = 'diplomacy' | 'orders' | 'retreat' | 'build';

export type GameState = {
  gameId: string | null;
  players: Player[];
  currentPlayer: Player | null;
  phase: GamePhase;
  year: number;
  season: 'spring' | 'fall';
  messages: Message[];
  orders: Order[];

  setGameId: (id: string) => void;
  setPlayers: (players: Player[]) => void;
  setCurrentPlayer: (player: Player) => void;
  updateGameState: (data: Partial<GameState>) => void;
  addMessage: (message: Message) => void;
  setOrders: (orders: Order[]) => void;
  addOrder: (order: Order) => void;
};

export type Message = {
  id: string;
  senderId: string;
  recipientId?: string;
  text: string;
  timestamp: number;
};

export type Order = {
  unitType: 'army' | 'fleet';
  territory: string;
  action: 'move' | 'support' | 'convoy' | 'hold';
  targetTerritory?: string;
  supportedUnit?: {
    territory: string;
    targetTerritory?: string;
  };
};

export const useGameStore = create<GameState>((set) => ({
  gameId: null,
  players: [],
  currentPlayer: null,
  phase: 'diplomacy',
  year: 1901,
  season: 'spring',
  messages: [],
  orders: [],

  setGameId: (id) => set({ gameId: id }),
  setPlayers: (players) => set({ players }),
  setCurrentPlayer: (player) => set({ currentPlayer: player }),
  updateGameState: (data) => set((state) => ({ ...state, ...data })),
  addMessage: (message) => set((state) => ({
    messages: [...state.messages, message]
  })),
  setOrders: (orders) => set({ orders }),
  addOrder: (order) => set((state) => ({
    orders: [...state.orders, order]
  }))
}));