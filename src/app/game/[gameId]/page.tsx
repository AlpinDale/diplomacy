"use client";

import { useEffect } from 'react';
import Map from '../../../components/game/Map';
import { useRouter } from 'next/navigation';
import { initializeSocket, joinGame } from '../../../lib/socket';

export default function GamePage({ params }: { params: { gameId: string } }) {
  const { gameId } = params;
  const router = useRouter();

  useEffect(() => {
    const socket = initializeSocket();

    joinGame(gameId);

    return () => {
      // TODO cleanup
    };
  }, [gameId]);

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-slate-800 text-white p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Diplomacy - Game: {gameId}</h1>
          <div className="space-x-2">
            <button className="px-3 py-1 bg-slate-700 hover:bg-slate-600 rounded">Game Info</button>
            <button
              onClick={() => router.push('/')}
              className="px-3 py-1 bg-slate-700 hover:bg-slate-600 rounded"
            >
              Exit
            </button>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <main className="flex-1 bg-slate-100 relative">
          <Map />
        </main>

        <aside className="w-80 bg-white border-l border-slate-200 flex flex-col shadow-md">
          <div className="p-4 border-b bg-slate-50">
            <h2 className="font-bold text-slate-800">Spring 1901</h2>
            <p className="text-sm text-slate-600">Diplomacy Phase</p>
          </div>

          <div className="flex-1 overflow-auto p-4">
            <h3 className="font-bold mb-2 text-slate-800">Players</h3>
            <ul className="mb-4 space-y-1 text-sm">
              <li className="font-semibold text-blue-700">France (You)</li>
              <li className="font-semibold text-amber-700">England</li>
              <li className="font-semibold text-slate-800">Germany</li>
              <li className="font-semibold text-red-700">Italy</li>
              <li className="font-semibold text-green-700">Austria</li>
              <li className="font-semibold text-purple-700">Russia</li>
              <li className="font-semibold text-orange-700">Turkey</li>
            </ul>

            <h3 className="font-bold mb-2 text-slate-800">Messages</h3>
            <div className="h-40 border rounded bg-slate-50 p-2 text-sm">
              <p className="mb-1"><span className="font-bold text-slate-800">System:</span> <span className="text-slate-700">Welcome to game {gameId}!</span></p>
              <p className="mb-1"><span className="font-bold text-slate-800">System:</span> <span className="text-slate-700">Waiting for players to submit orders...</span></p>
            </div>
          </div>

          <div className="p-4 border-t bg-slate-50">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors">
              Ready for Orders Phase
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}