'use client';

import { Header } from '@/components/baseball/Header';
import { Footer } from '@/components/baseball/Footer';
import { StatCard, StatItem } from '@/components/baseball/StatCard';
import { PerformanceChart } from '@/components/baseball/PerformanceChart';
import { mockPlayers, mockPerformanceTrend } from '@/lib/baseball-data';
import { TrendingUp, ArrowLeft, Award, Activity } from 'lucide-react';
import Link from 'next/link';
import { use } from 'react';

export default function PlayerProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const player = mockPlayers.find((p) => p.id === id);

  if (!player) {
    return (
      <div className="min-h-screen flex flex-col bg-[hsl(var(--background))]">
        <Header />
        <main className="flex-1 container mx-auto px-6 py-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Player Not Found</h1>
            <Link href="/" className="text-[hsl(var(--baseball-red))] hover:underline">
              Return to Dashboard
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const initials = player.name
    .split(' ')
    .map((n) => n[0])
    .join('');

  return (
    <div className="min-h-screen flex flex-col bg-[hsl(var(--background))]">
      <Header />

      <main className="flex-1 container mx-auto px-6 py-12">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[hsl(var(--baseball-red))] hover:text-[hsl(var(--accent))] mb-6 font-semibold transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </Link>

        {/* Player Header */}
        <div className="baseball-card mb-8">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-[hsl(var(--baseball-navy))] flex items-center justify-center text-white font-bold text-3xl">
              {player.avatar ? (
                <img src={player.avatar} alt={player.name} className="w-24 h-24 rounded-full object-cover" />
              ) : (
                initials
              )}
            </div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{player.name}</h1>
              <div className="flex items-center gap-4">
                <span className="inline-block bg-[hsl(var(--baseball-navy))] text-white px-4 py-1 rounded-full text-sm font-semibold">
                  {player.position}
                </span>
                <span className="text-gray-600">Games: {player.games}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="baseball-card text-center">
            <div className="baseball-label mb-2">BATTING AVERAGE</div>
            <div className="baseball-stat text-[hsl(var(--baseball-red))]">{player.battingAverage.toFixed(3)}</div>
          </div>
          <div className="baseball-card text-center">
            <div className="baseball-label mb-2">HOME RUNS</div>
            <div className="baseball-stat">{player.homeRuns}</div>
          </div>
          <div className="baseball-card text-center">
            <div className="baseball-label mb-2">RBIs</div>
            <div className="baseball-stat">{player.rbis}</div>
          </div>
          <div className="baseball-card text-center">
            <div className="baseball-label mb-2">HITS</div>
            <div className="baseball-stat">{player.hits}</div>
          </div>
        </div>

        {/* Detailed Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Batting Statistics */}
          <StatCard title="BATTING STATISTICS" icon={Activity}>
            <div className="space-y-1">
              <StatItem label="At Bats" value={player.atBats} />
              <StatItem label="Hits" value={player.hits} />
              <StatItem label="Batting Average" value={player.battingAverage.toFixed(3)} highlight />
              <StatItem label="Home Runs" value={player.homeRuns} highlight />
              <StatItem label="RBIs" value={player.rbis} />
              <StatItem label="Slugging %" value={player.sluggingPercentage.toFixed(3)} />
              <StatItem label="On-Base %" value={player.onBasePercentage.toFixed(3)} />
            </div>
          </StatCard>

          {/* Fielding Statistics */}
          <StatCard title="FIELDING STATISTICS" icon={Award}>
            <div className="space-y-1">
              <StatItem label="Position" value={player.position} />
              <StatItem label="Games Played" value={player.games} />
              {player.fieldingPercentage && (
                <StatItem label="Fielding %" value={player.fieldingPercentage.toFixed(3)} highlight />
              )}
              <StatItem label="Total Chances" value="N/A" />
              <StatItem label="Putouts" value="N/A" />
              <StatItem label="Assists" value="N/A" />
              <StatItem label="Errors" value="N/A" />
            </div>
          </StatCard>
        </div>

        {/* Performance Trend */}
        <div className="baseball-card">
          <PerformanceChart data={mockPerformanceTrend} title={`${player.name} - PERFORMANCE TRENDS`} />
        </div>

        {/* Game by Game Breakdown */}
        <div className="mt-8">
          <StatCard title="RECENT GAME LOG" icon={TrendingUp}>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 px-2 font-semibold text-gray-700">Date</th>
                    <th className="text-left py-3 px-2 font-semibold text-gray-700">Opponent</th>
                    <th className="text-center py-3 px-2 font-semibold text-gray-700">AB</th>
                    <th className="text-center py-3 px-2 font-semibold text-gray-700">H</th>
                    <th className="text-center py-3 px-2 font-semibold text-gray-700">HR</th>
                    <th className="text-center py-3 px-2 font-semibold text-gray-700">RBI</th>
                    <th className="text-center py-3 px-2 font-semibold text-gray-700">AVG</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-2 text-gray-600">10/20/2025</td>
                    <td className="py-3 px-2 text-gray-900 font-semibold">vs Eagles</td>
                    <td className="text-center py-3 px-2 text-gray-600">4</td>
                    <td className="text-center py-3 px-2 text-gray-600">2</td>
                    <td className="text-center py-3 px-2 text-gray-600">1</td>
                    <td className="text-center py-3 px-2 text-gray-600">3</td>
                    <td className="text-center py-3 px-2 font-bold text-[hsl(var(--baseball-red))]">.500</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-2 text-gray-600">10/17/2025</td>
                    <td className="py-3 px-2 text-gray-900 font-semibold">@ Lions</td>
                    <td className="text-center py-3 px-2 text-gray-600">5</td>
                    <td className="text-center py-3 px-2 text-gray-600">1</td>
                    <td className="text-center py-3 px-2 text-gray-600">0</td>
                    <td className="text-center py-3 px-2 text-gray-600">1</td>
                    <td className="text-center py-3 px-2 font-bold text-[hsl(var(--baseball-red))]">.200</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-2 text-gray-600">10/14/2025</td>
                    <td className="py-3 px-2 text-gray-900 font-semibold">vs Bears</td>
                    <td className="text-center py-3 px-2 text-gray-600">4</td>
                    <td className="text-center py-3 px-2 text-gray-600">3</td>
                    <td className="text-center py-3 px-2 text-gray-600">1</td>
                    <td className="text-center py-3 px-2 text-gray-600">2</td>
                    <td className="text-center py-3 px-2 font-bold text-[hsl(var(--baseball-red))]">.750</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </StatCard>
        </div>
      </main>

      <Footer />
    </div>
  );
}
