'use client';

import { PerformanceTrendPoint } from '@/lib/baseball-data';

interface PerformanceChartProps {
  data: PerformanceTrendPoint[];
  title?: string;
}

export function PerformanceChart({ data, title = 'Performance Trend' }: PerformanceChartProps) {
  if (!data || data.length === 0) return null;

  // Calculate dimensions and scaling
  const width = 600;
  const height = 200;
  const padding = { top: 20, right: 20, bottom: 30, left: 40 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  const maxValue = Math.max(...data.map((d) => d.value));
  const minValue = Math.min(...data.map((d) => d.value));
  const valueRange = maxValue - minValue || 1;

  // Create SVG path for the line
  const points = data.map((point, index) => {
    const x = padding.left + (index / (data.length - 1)) * chartWidth;
    const y = padding.top + chartHeight - ((point.value - minValue) / valueRange) * chartHeight;
    return { x, y };
  });

  const pathData = points.map((point, index) => `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`).join(' ');

  return (
    <div className="w-full">
      <h4 className="text-sm font-semibold text-[hsl(var(--baseball-coral))] uppercase tracking-wider mb-4">
        {title}
      </h4>
      <div className="relative w-full" style={{ height: `${height}px` }}>
        <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`} className="overflow-visible">
          {/* Grid lines */}
          {[0, 0.25, 0.5, 0.75, 1].map((percent) => {
            const y = padding.top + chartHeight * (1 - percent);
            return (
              <line
                key={percent}
                x1={padding.left}
                y1={y}
                x2={width - padding.right}
                y2={y}
                stroke="#e5e7eb"
                strokeWidth="1"
              />
            );
          })}

          {/* Line chart */}
          <path d={pathData} fill="none" stroke="hsl(var(--baseball-red))" strokeWidth="3" strokeLinecap="round" />

          {/* Data points */}
          {points.map((point, index) => (
            <circle key={index} cx={point.x} cy={point.y} r="4" fill="hsl(var(--baseball-red))" />
          ))}

          {/* Y-axis labels */}
          {[0, 0.25, 0.5, 0.75, 1].map((percent) => {
            const y = padding.top + chartHeight * (1 - percent);
            const value = minValue + valueRange * percent;
            return (
              <text key={percent} x={padding.left - 10} y={y + 4} textAnchor="end" fontSize="10" fill="#6b7280">
                {value.toFixed(3)}
              </text>
            );
          })}

          {/* X-axis label */}
          <text x={width / 2} y={height - 5} textAnchor="middle" fontSize="12" fill="#6b7280" fontWeight="500">
            LAST 10 GAMES
          </text>
        </svg>
      </div>
    </div>
  );
}
