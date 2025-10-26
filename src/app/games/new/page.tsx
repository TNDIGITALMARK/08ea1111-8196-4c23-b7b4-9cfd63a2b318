'use client';

import { Header } from '@/components/baseball/Header';
import { Footer } from '@/components/baseball/Footer';
import { StatCard } from '@/components/baseball/StatCard';
import { mockPlayers } from '@/lib/baseball-data';
import { ArrowLeft, Save, Plus } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function GameEntryPage() {
  const [homeTeam, setHomeTeam] = useState('');
  const [awayTeam, setAwayTeam] = useState('');
  const [gameDate, setGameDate] = useState('');
  const [homeScore, setHomeScore] = useState('');
  const [awayScore, setAwayScore] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Game stats submitted! (This is a demo - no backend integration)');
  };

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

        <h1 className="text-4xl font-bold text-gray-900 mb-8">Game Entry</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit}>
              {/* Game Information */}
              <StatCard title="GAME INFORMATION">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="gameDate" className="block text-sm font-semibold text-gray-700 mb-2">
                      Game Date
                    </label>
                    <input
                      type="date"
                      id="gameDate"
                      value={gameDate}
                      onChange={(e) => setGameDate(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(var(--baseball-red))] focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-2">
                      Location
                    </label>
                    <input
                      type="text"
                      id="location"
                      placeholder="Stadium Name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(var(--baseball-red))] focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label htmlFor="homeTeam" className="block text-sm font-semibold text-gray-700 mb-2">
                      Home Team
                    </label>
                    <input
                      type="text"
                      id="homeTeam"
                      value={homeTeam}
                      onChange={(e) => setHomeTeam(e.target.value)}
                      placeholder="Tigers"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(var(--baseball-red))] focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="awayTeam" className="block text-sm font-semibold text-gray-700 mb-2">
                      Away Team
                    </label>
                    <input
                      type="text"
                      id="awayTeam"
                      value={awayTeam}
                      onChange={(e) => setAwayTeam(e.target.value)}
                      placeholder="Eagles"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(var(--baseball-red))] focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label htmlFor="homeScore" className="block text-sm font-semibold text-gray-700 mb-2">
                      Home Score
                    </label>
                    <input
                      type="number"
                      id="homeScore"
                      value={homeScore}
                      onChange={(e) => setHomeScore(e.target.value)}
                      placeholder="0"
                      min="0"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(var(--baseball-red))] focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="awayScore" className="block text-sm font-semibold text-gray-700 mb-2">
                      Away Score
                    </label>
                    <input
                      type="number"
                      id="awayScore"
                      value={awayScore}
                      onChange={(e) => setAwayScore(e.target.value)}
                      placeholder="0"
                      min="0"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(var(--baseball-red))] focus:border-transparent"
                      required
                    />
                  </div>
                </div>
              </StatCard>

              {/* Player Statistics */}
              <div className="mt-8">
                <StatCard title="PLAYER STATISTICS">
                  <div className="space-y-4">
                    {mockPlayers.slice(0, 3).map((player) => (
                      <div key={player.id} className="p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="font-semibold text-gray-900">{player.name}</h3>
                          <span className="text-sm text-gray-500">{player.position}</span>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          <div>
                            <label className="block text-xs font-semibold text-gray-600 mb-1">At Bats</label>
                            <input
                              type="number"
                              placeholder="0"
                              min="0"
                              className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[hsl(var(--baseball-red))]"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-semibold text-gray-600 mb-1">Hits</label>
                            <input
                              type="number"
                              placeholder="0"
                              min="0"
                              className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[hsl(var(--baseball-red))]"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-semibold text-gray-600 mb-1">Home Runs</label>
                            <input
                              type="number"
                              placeholder="0"
                              min="0"
                              className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[hsl(var(--baseball-red))]"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-semibold text-gray-600 mb-1">RBIs</label>
                            <input
                              type="number"
                              placeholder="0"
                              min="0"
                              className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[hsl(var(--baseball-red))]"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    className="mt-4 flex items-center gap-2 text-[hsl(var(--baseball-red))] hover:text-[hsl(var(--accent))] font-semibold text-sm transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                    Add Another Player
                  </button>
                </StatCard>
              </div>

              {/* Submit Button */}
              <div className="mt-8 flex justify-end gap-4">
                <Link
                  href="/"
                  className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-lg transition-colors"
                >
                  Cancel
                </Link>
                <button
                  type="submit"
                  className="flex items-center gap-2 px-6 py-3 bg-[hsl(var(--baseball-red))] hover:bg-[hsl(var(--accent))] text-white font-semibold rounded-lg transition-colors"
                >
                  <Save className="w-4 h-4" />
                  Save Game Stats
                </button>
              </div>
            </form>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Tips */}
            <StatCard title="QUICK TIPS">
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-[hsl(var(--baseball-red))] mt-1.5"></div>
                  <p className="text-gray-600">Enter stats for each player as they occur during the game</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-[hsl(var(--baseball-red))] mt-1.5"></div>
                  <p className="text-gray-600">Save frequently to avoid losing data</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-[hsl(var(--baseball-red))] mt-1.5"></div>
                  <p className="text-gray-600">Statistics will be automatically calculated</p>
                </div>
              </div>
            </StatCard>

            {/* Quick Stats */}
            <StatCard title="GAME SUMMARY">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Total At Bats</span>
                  <span className="text-lg font-bold text-gray-900">0</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Total Hits</span>
                  <span className="text-lg font-bold text-gray-900">0</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Team Batting Avg</span>
                  <span className="text-lg font-bold text-[hsl(var(--baseball-red))]">.000</span>
                </div>
              </div>
            </StatCard>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
