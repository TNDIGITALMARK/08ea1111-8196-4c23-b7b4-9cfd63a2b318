'use client';

import { Header } from '@/components/baseball/Header';
import { Footer } from '@/components/baseball/Footer';
import { mockPlayers } from '@/lib/baseball-data';
import Link from 'next/link';

export default function PlayersPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[hsl(var(--background))]">
      <Header />

      <main className="flex-1 container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">All Players</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockPlayers.map((player) => {
            const initials = player.name
              .split(' ')
              .map((n) => n[0])
              .join('');

            return (
              <Link key={player.id} href={`/players/${player.id}`}>
                <div className="baseball-card cursor-pointer">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-[hsl(var(--baseball-navy))] flex items-center justify-center text-white font-bold text-xl">
                      {initials}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 text-lg">{player.name}</h3>
                      <p className="text-sm text-gray-500">{player.position}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                    <div>
                      <div className="baseball-label">AVG</div>
                      <div className="text-xl font-bold text-[hsl(var(--baseball-red))]">
                        {player.battingAverage.toFixed(3)}
                      </div>
                    </div>
                    <div>
                      <div className="baseball-label">HR</div>
                      <div className="text-xl font-bold">{player.homeRuns}</div>
                    </div>
                    <div>
                      <div className="baseball-label">RBI</div>
                      <div className="text-xl font-bold">{player.rbis}</div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
}
