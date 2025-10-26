'use client';

import Link from 'next/link';
import { Baseball } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[hsl(var(--baseball-navy))] text-white mt-20">
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
              <Baseball className="w-5 h-5 text-[hsl(var(--baseball-navy))]" />
            </div>
            <span className="text-lg font-bold">DIAMOND STATS</span>
          </Link>

          {/* Footer Links */}
          <nav className="flex items-center gap-8">
            <Link href="/contact" className="text-sm hover:text-[hsl(var(--baseball-coral))] transition-colors">
              CONTACT US
            </Link>
            <Link href="/terms" className="text-sm hover:text-[hsl(var(--baseball-coral))] transition-colors">
              TERMS OF SERVICE
            </Link>
            <Link href="/privacy" className="text-sm hover:text-[hsl(var(--baseball-coral))] transition-colors">
              PRIVACY POLICY
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
