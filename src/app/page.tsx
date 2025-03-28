"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [gameId, setGameId] = useState('demo-game');

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Diplomacy Game</h1>

      <div className="mb-8">
        <input
          type="text"
          value={gameId}
          onChange={(e) => setGameId(e.target.value)}
          placeholder="Enter game ID"
          className="px-4 py-2 border rounded mr-2"
        />
        <Link href={`/game/${gameId}`}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Join Game
        </Link>
      </div>

      <div className="mb-8 p-6 border rounded max-w-lg">
        <h2 className="text-2xl font-bold mb-4">About Diplomacy</h2>
        <p className="mb-4">
          Diplomacy is a strategic board game set in Europe just before World War I.
          Players control the armed forces of major European powers and attempt to
          secure supply centers across the map through diplomatic negotiation and
          military moves.
        </p>
        <p>
          This web implementation allows you to play with friends online with
          real-time updates and private negotiations.
        </p>
      </div>
    </main>
  );
}
