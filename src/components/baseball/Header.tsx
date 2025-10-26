'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Baseball } from 'lucide-react';

export function Header() {
  const pathname = usePathname();

  const navItems = [
    { label: 'DASHBOARD', href: '/' },
    { label: 'PLAYERS', href: '/players' },
    { label: 'GAME ENTRY', href: '/games/new' },
  ];

  return (
    <header className="bg-[hsl(var(--baseball-navy))] text-white shadow-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
              <Baseball className="w-6 h-6 text-[hsl(var(--baseball-navy))]" />
            </div>
            <span className="text-xl font-bold tracking-tight">DIAMOND STATS</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-semibold tracking-wide transition-colors hover:text-[hsl(var(--baseball-coral))] ${
                  pathname === item.href ? 'text-[hsl(var(--baseball-coral))]' : 'text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <button className="hidden md:block bg-[hsl(var(--baseball-red))] hover:bg-[hsl(var(--accent))] text-white px-6 py-2 rounded-md font-semibold text-sm transition-colors">
            START YOUR FREE TRIAL
          </button>
        </div>
      </div>
    </header>
  );
}
