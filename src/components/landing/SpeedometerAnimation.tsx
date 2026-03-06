import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const SpeedometerAnimation = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(0);
  const motionValue = useMotionValue(0);

  const cx = 160;
  const cy = 155;
  const r = 120;
  const innerR = 95;

  const startAngle = 225;
  const totalSweep = 270;
  const targetPercent = 0.88;

  const polarToCartesian = (angle: number, radius: number) => {
    const rad = (angle * Math.PI) / 180;
    return { x: cx + radius * Math.cos(rad), y: cy - radius * Math.sin(rad) };
  };

  // Arcs
  const endAngle = startAngle - totalSweep;
  const arcStart = polarToCartesian(startAngle, r);
  const arcEnd = polarToCartesian(endAngle, r);
  const bgArcPath = `M ${arcStart.x} ${arcStart.y} A ${r} ${r} 0 1 1 ${arcEnd.x} ${arcEnd.y}`;

  // Inner arc (thinner track)
  const innerArcStart = polarToCartesian(startAngle, innerR);
  const innerArcEnd = polarToCartesian(endAngle, innerR);
  const innerArcPath = `M ${innerArcStart.x} ${innerArcStart.y} A ${innerR} ${innerR} 0 1 1 ${innerArcEnd.x} ${innerArcEnd.y}`;

  // Ticks
  const ticks = [];
  const tickCount = 36;
  for (let i = 0; i <= tickCount; i++) {
    const angle = startAngle - (i / tickCount) * totalSweep;
    const rad = (angle * Math.PI) / 180;
    const isMajor = i % 4 === 0;
    const outerTick = r + 4;
    const innerTick = isMajor ? r - 12 : r - 6;
    ticks.push({
      x1: cx + innerTick * Math.cos(rad),
      y1: cy - innerTick * Math.sin(rad),
      x2: cx + outerTick * Math.cos(rad),
      y2: cy - outerTick * Math.sin(rad),
      isMajor,
      index: i,
      percent: i / tickCount,
    });
  }

  // Colored arc segments (blue → navy → orange → red)
  const segments = [
    { start: 0, end: 0.25, color: "hsl(215, 65%, 50%)" },
    { start: 0.25, end: 0.5, color: "hsl(215, 70%, 35%)" },
    { start: 0.5, end: 0.7, color: "hsl(30, 90%, 50%)" },
    { start: 0.7, end: 0.85, color: "hsl(15, 95%, 52%)" },
    { start: 0.85, end: 1.0, color: "hsl(0, 80%, 50%)" },
  ];

  const makeSegmentArc = (startPct: number, endPct: number, radius: number) => {
    const a1 = startAngle - startPct * totalSweep;
    const a2 = startAngle - endPct * totalSweep;
    const p1 = polarToCartesian(a1, radius);
    const p2 = polarToCartesian(a2, radius);
    const sweep = (endPct - startPct) * totalSweep;
    const largeArc = sweep > 180 ? 1 : 0;
    return `M ${p1.x} ${p1.y} A ${radius} ${radius} 0 ${largeArc} 1 ${p2.x} ${p2.y}`;
  };

  // Needle rotation
  const needleStartRotation = 135;
  const needleTargetRotation = 135 + totalSweep * targetPercent;

  // Animate counter
  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, targetPercent * 100, {
        duration: 2.2,
        delay: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      });
      const unsubscribe = motionValue.on("change", (v) => {
        setDisplayValue(Math.round(v));
      });
      return () => {
        controls.stop();
        unsubscribe();
      };
    }
  }, [isInView]);

  return (
    <div ref={ref} className="relative w-full max-w-[320px] mx-auto">
      <svg viewBox="0 0 320 210" className="w-full h-auto">
        <defs>
          <linearGradient id="activeArcGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(215, 70%, 45%)" />
            <stop offset="50%" stopColor="hsl(25, 95%, 53%)" />
            <stop offset="100%" stopColor="hsl(8, 100%, 55%)" />
          </linearGradient>
          <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Background track */}
        <path d={bgArcPath} fill="none" stroke="hsl(215, 14%, 85%)" strokeWidth="14" strokeLinecap="round" opacity="0.25" />
        <path d={innerArcPath} fill="none" stroke="hsl(215, 14%, 88%)" strokeWidth="4" strokeLinecap="round" opacity="0.15" />

        {/* Colored segments (background, subtle) */}
        {segments.map((seg, i) => (
          <motion.path
            key={i}
            d={makeSegmentArc(seg.start, seg.end, r)}
            fill="none"
            stroke={seg.color}
            strokeWidth="14"
            strokeLinecap={i === 0 ? "round" : i === segments.length - 1 ? "round" : "butt"}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 0.15 } : { opacity: 0 }}
            transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
          />
        ))}

        {/* Active filled arc */}
        <motion.path
          d={bgArcPath}
          fill="none"
          stroke="url(#activeArcGrad)"
          strokeWidth="14"
          strokeLinecap="round"
          filter="url(#softGlow)"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: targetPercent } : { pathLength: 0 }}
          transition={{ duration: 2.2, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        />

        {/* Tick marks */}
        {ticks.map((tick) => (
          <motion.line
            key={tick.index}
            x1={tick.x1}
            y1={tick.y1}
            x2={tick.x2}
            y2={tick.y2}
            stroke={
              tick.percent < 0.3
                ? "hsl(215, 50%, 55%)"
                : tick.percent < 0.6
                ? "hsl(215, 40%, 40%)"
                : tick.percent < 0.8
                ? "hsl(25, 80%, 50%)"
                : "hsl(8, 70%, 50%)"
            }
            strokeWidth={tick.isMajor ? 2.5 : 1}
            strokeLinecap="round"
            initial={{ opacity: 0, pathLength: 0 }}
            animate={isInView ? { opacity: tick.isMajor ? 0.7 : 0.3, pathLength: 1 } : { opacity: 0 }}
            transition={{ delay: 0.1 + tick.index * 0.02, duration: 0.3 }}
          />
        ))}

        {/* Needle group */}
        <motion.g
          style={{ transformOrigin: `${cx}px ${cy}px` }}
          initial={{ rotate: needleStartRotation }}
          animate={isInView ? { rotate: needleTargetRotation } : { rotate: needleStartRotation }}
          transition={{
            duration: 2.2,
            delay: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {/* Needle glow */}
          <line
            x1={cx} y1={cy + 5}
            x2={cx} y2={cy - r + 20}
            stroke="hsl(25, 95%, 53%)"
            strokeWidth="4"
            strokeLinecap="round"
            opacity="0.25"
            filter="url(#glow)"
          />
          {/* Needle body (tapered via polygon) */}
          <polygon
            points={`${cx - 3},${cy + 5} ${cx + 3},${cy + 5} ${cx + 0.8},${cy - r + 18} ${cx - 0.8},${cy - r + 18}`}
            fill="hsl(215, 60%, 20%)"
          />
          {/* Needle orange tip */}
          <line
            x1={cx} y1={cy - r + 30}
            x2={cx} y2={cy - r + 18}
            stroke="hsl(25, 95%, 53%)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </motion.g>

        {/* Center hub */}
        <circle cx={cx} cy={cy} r="12" fill="hsl(215, 60%, 15%)" />
        <circle cx={cx} cy={cy} r="9" fill="hsl(215, 50%, 22%)" stroke="hsl(215, 40%, 35%)" strokeWidth="1" />
        <circle cx={cx} cy={cy} r="4" fill="hsl(25, 95%, 53%)" />
        {/* Hub highlight */}
        <circle cx={cx - 2} cy={cy - 3} r="2" fill="hsl(0, 0%, 100%)" opacity="0.2" />

        {/* Digital readout */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <rect x={cx - 30} y={cy + 28} width="60" height="22" rx="6" fill="hsl(215, 50%, 15%)" opacity="0.9" />
          <text
            x={cx}
            y={cy + 44}
            textAnchor="middle"
            fill="hsl(25, 95%, 55%)"
            fontSize="13"
            fontWeight="800"
            fontFamily="'JetBrains Mono', monospace"
          >
            {displayValue}%
          </text>
        </motion.g>

        {/* Labels */}
        <motion.text
          x={arcStart.x + 8}
          y={arcStart.y + 20}
          textAnchor="middle"
          fontSize="9"
          fontWeight="600"
          fontFamily="'JetBrains Mono', monospace"
          fill="hsl(215, 50%, 55%)"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.5 } : { opacity: 0 }}
          transition={{ delay: 1.5, duration: 0.4 }}
        >
          MIN
        </motion.text>
        <motion.text
          x={arcEnd.x - 8}
          y={arcEnd.y + 20}
          textAnchor="middle"
          fontSize="9"
          fontWeight="600"
          fontFamily="'JetBrains Mono', monospace"
          fill="hsl(8, 80%, 52%)"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.5 } : { opacity: 0 }}
          transition={{ delay: 1.5, duration: 0.4 }}
        >
          MAX
        </motion.text>
      </svg>

      {/* Ambient glow */}
      <motion.div
        className="absolute inset-0 -z-10 rounded-full"
        style={{
          background: "radial-gradient(ellipse at 50% 55%, hsl(25 95% 53% / 0.1) 0%, transparent 55%)",
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1.2 } : { opacity: 0, scale: 0.8 }}
        transition={{ delay: 1, duration: 1.5 }}
      />
    </div>
  );
};

export default SpeedometerAnimation;
