'use client';

import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  icon?: LucideIcon;
  children: ReactNode;
  className?: string;
}

export function StatCard({ title, icon: Icon, children, className = '' }: StatCardProps) {
  return (
    <div className={`baseball-card ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-sm font-semibold text-[hsl(var(--baseball-coral))] uppercase tracking-wider">
          {title}
        </h4>
        {Icon && <Icon className="w-5 h-5 text-[hsl(var(--baseball-coral))]" />}
      </div>
      {children}
    </div>
  );
}

interface StatItemProps {
  label: string;
  value: string | number;
  highlight?: boolean;
}

export function StatItem({ label, value, highlight = false }: StatItemProps) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
      <span className="text-sm text-gray-600">{label}</span>
      <span className={`text-sm font-semibold ${highlight ? 'text-[hsl(var(--baseball-red))]' : 'text-gray-900'}`}>
        {value}
      </span>
    </div>
  );
}

interface PlayerStatCardProps {
  playerName: string;
  position: string;
  battingAverage: number;
  homeRuns: number;
  rbis: number;
  avatar?: string;
}

export function PlayerStatCard({ playerName, position, battingAverage, homeRuns, rbis, avatar }: PlayerStatCardProps) {
  const initials = playerName
    .split(' ')
    .map((n) => n[0])
    .join('');

  return (
    <div className="baseball-card">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-[hsl(var(--baseball-navy))] flex items-center justify-center text-white font-bold">
          {avatar ? <img src={avatar} alt={playerName} className="w-12 h-12 rounded-full object-cover" /> : initials}
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">{playerName}</h3>
          <p className="text-sm text-gray-500">{position}</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
        <div>
          <div className="baseball-label">AVG</div>
          <div className="baseball-stat text-xl">{battingAverage.toFixed(3)}</div>
        </div>
        <div>
          <div className="baseball-label">HR</div>
          <div className="baseball-stat text-xl">{homeRuns}</div>
        </div>
        <div>
          <div className="baseball-label">RBI</div>
          <div className="baseball-stat text-xl">{rbis}</div>
        </div>
      </div>
    </div>
  );
}
