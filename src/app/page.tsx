'use client';

import { Header } from '@/components/baseball/Header';
import { Footer } from '@/components/baseball/Footer';
import { StatCard, PlayerStatCard, StatItem } from '@/components/baseball/StatCard';
import { PerformanceChart } from '@/components/baseball/PerformanceChart';
import { mockPlayers, mockGames, mockTeamStandings, mockPerformanceTrend } from '@/lib/baseball-data';
import { TrendingUp, Calendar, Award, Users } from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  const recentGames = mockGames.filter((g) => g.status === 'completed').slice(0, 3);
  const upcomingMatches = mockGames.filter((g) => g.status === 'upcoming').slice(0, 2);
  const topPlayers = mockPlayers.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-[hsl(var(--background))]">
      <Header />

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-32"
        style={{
          backgroundImage: 'url(/generated/baseball-hero-bg.png)',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-[hsl(var(--baseball-navy))] opacity-75"></div>
        <div className="relative container mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            ELEVATE YOUR GAME.
            <br />
            TRACK. ANALYZE. CONQUER.
          </h1>
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <Award className="w-5 h-5 text-[hsl(var(--baseball-coral))]" />
              <span className="text-sm font-semibold">Pro Stats</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <TrendingUp className="w-5 h-5 text-[hsl(var(--baseball-coral))]" />
              <span className="text-sm font-semibold">Real-time Analytics</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Dashboard Content */}
      <main className="flex-1 container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Recent Games */}
            <StatCard title="RECENT GAMES" icon={Calendar}>
              <div className="space-y-3">
                {recentGames.map((game) => (
                  <div
                    key={game.id}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-sm text-gray-500">{new Date(game.date).toLocaleDateString()}</div>
                      <div className="font-semibold text-gray-900">
                        {game.homeTeam} vs {game.awayTeam}
                      </div>
                    </div>
                    <div className="font-bold text-[hsl(var(--baseball-red))]">
                      {game.homeScore} - {game.awayScore}
                    </div>
                  </div>
                ))}
              </div>
            </StatCard>

            {/* Upcoming Matches */}
            <StatCard title="UPCOMING MATCHES" icon={Calendar}>
              <div className="space-y-3">
                {upcomingMatches.map((game) => (
                  <div
                    key={game.id}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-sm text-gray-500">{new Date(game.date).toLocaleDateString()}</div>
                      <div className="font-semibold text-gray-900">
                        {game.homeTeam} vs {game.awayTeam}
                      </div>
                    </div>
                    <div className="text-sm text-[hsl(var(--baseball-coral))] font-semibold">UPCOMING</div>
                  </div>
                ))}
              </div>
            </StatCard>

            {/* Player Statistics Table */}
            <StatCard title="PLAYER STATISTICS" icon={Users}>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-2 font-semibold text-gray-700">Player</th>
                      <th className="text-center py-3 px-2 font-semibold text-gray-700">G</th>
                      <th className="text-center py-3 px-2 font-semibold text-gray-700">AB</th>
                      <th className="text-center py-3 px-2 font-semibold text-gray-700">H</th>
                      <th className="text-center py-3 px-2 font-semibold text-gray-700">AVG</th>
                      <th className="text-center py-3 px-2 font-semibold text-gray-700">HR</th>
                      <th className="text-center py-3 px-2 font-semibold text-gray-700">RBI</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockPlayers.map((player) => (
                      <tr key={player.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                        <td className="py-3 px-2">
                          <Link href={`/players/${player.id}`} className="font-semibold text-gray-900 hover:text-[hsl(var(--baseball-red))]">
                            {player.name}
                          </Link>
                        </td>
                        <td className="text-center py-3 px-2 text-gray-600">{player.games}</td>
                        <td className="text-center py-3 px-2 text-gray-600">{player.atBats}</td>
                        <td className="text-center py-3 px-2 text-gray-600">{player.hits}</td>
                        <td className="text-center py-3 px-2 font-bold text-[hsl(var(--baseball-red))]">
                          {player.battingAverage.toFixed(3)}
                        </td>
                        <td className="text-center py-3 px-2 text-gray-600">{player.homeRuns}</td>
                        <td className="text-center py-3 px-2 text-gray-600">{player.rbis}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </StatCard>

            {/* Performance Trends */}
            <div className="baseball-card">
              <PerformanceChart data={mockPerformanceTrend} title="PERFORMANCE TRENDS" />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Team Standings */}
            <StatCard title="TEAM STANDINGS" icon={Award}>
              <div className="space-y-3">
                {mockTeamStandings.map((team, index) => (
                  <div
                    key={team.id}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[hsl(var(--baseball-navy))] flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{team.name}</div>
                        <div className="text-xs text-gray-500">
                          {team.wins}-{team.losses}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-[hsl(var(--baseball-red))]">{team.battingAverage.toFixed(3)}</div>
                      <div className="text-xs text-gray-500">AVG</div>
                    </div>
                  </div>
                ))}
              </div>
            </StatCard>

            {/* Player Profiles */}
            <div>
              <h3 className="text-sm font-semibold text-[hsl(var(--baseball-coral))] uppercase tracking-wider mb-4">
                PLAYER PROFILE
              </h3>
              <div className="space-y-4">
                {topPlayers.map((player) => (
                  <Link key={player.id} href={`/players/${player.id}`}>
                    <PlayerStatCard
                      playerName={player.name}
                      position={player.position}
                      battingAverage={player.battingAverage}
                      homeRuns={player.homeRuns}
                      rbis={player.rbis}
                    />
                  </Link>
                ))}
              </div>
            </div>

            {/* Features */}
            <StatCard title="FEATURES" icon={TrendingUp}>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[hsl(var(--baseball-red))] mt-2"></div>
                  <div>
                    <div className="font-semibold text-gray-900">Comprehensive Stats</div>
                    <div className="text-sm text-gray-600">Track every metric that matters</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[hsl(var(--baseball-red))] mt-2"></div>
                  <div>
                    <div className="font-semibold text-gray-900">Real-time Updates</div>
                    <div className="text-sm text-gray-600">Live game statistics</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[hsl(var(--baseball-red))] mt-2"></div>
                  <div>
                    <div className="font-semibold text-gray-900">Performance Analytics</div>
                    <div className="text-sm text-gray-600">Advanced trend analysis</div>
                  </div>
                </div>
              </div>
            </StatCard>
          </div>
        </div>

        {/* CTA Section */}
        <section className="mt-16 bg-[hsl(var(--baseball-navy))] rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">UNLEASH YOUR TEAM'S POTENTIAL</h2>
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
            <div className="bg-white/10 backdrop-blur-sm px-8 py-4 rounded-lg hover:bg-white/20 transition-colors cursor-pointer">
              <Award className="w-8 h-8 mx-auto mb-2 text-[hsl(var(--baseball-coral))]" />
              <div className="font-bold">COMPREHENSIVE STATS</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-8 py-4 rounded-lg hover:bg-white/20 transition-colors cursor-pointer">
              <TrendingUp className="w-8 h-8 mx-auto mb-2 text-[hsl(var(--baseball-coral))]" />
              <div className="font-bold">ADVANCED ANALYTICS</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-8 py-4 rounded-lg hover:bg-white/20 transition-colors cursor-pointer">
              <Users className="w-8 h-8 mx-auto mb-2 text-[hsl(var(--baseball-coral))]" />
              <div className="font-bold">TEAM MANAGEMENT</div>
            </div>
          </div>
          <button className="mt-8 bg-[hsl(var(--baseball-red))] hover:bg-[hsl(var(--accent))] text-white px-8 py-3 rounded-lg font-bold text-lg transition-colors">
            START YOUR FREE TRIAL
          </button>
        </section>
      </main>

      <Footer />
    </div>
  );
}
