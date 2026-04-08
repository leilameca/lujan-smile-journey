import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useState } from "react";
import { Award, Users, Clock, Shield, type LucideIcon } from "lucide-react";

type Stat = {
  icon: LucideIcon;
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  formatter?: (value: number) => string;
};

const numberFormatter = new Intl.NumberFormat("en-US");

const stats: Stat[] = [
  { icon: Users, value: 5000, prefix: "+", label: "Pacientes satisfechos", formatter: (value) => numberFormatter.format(value) },
  { icon: Award, value: 15, suffix: "+", label: "Años de experiencia" },
  { icon: Clock, value: 2, label: "Sedes en el país" },
  { icon: Shield, value: 12, suffix: "+", label: "Especialidades" },
];

type AnimatedCountProps = {
  value: number;
  isActive: boolean;
  delay?: number;
  prefix?: string;
  suffix?: string;
  formatter?: (value: number) => string;
};

function AnimatedCount({
  value,
  isActive,
  delay = 0,
  prefix = "",
  suffix = "",
  formatter,
}: AnimatedCountProps) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isActive) {
      setDisplayValue(0);
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplayValue(value);
      return;
    }

    let frameId = 0;
    let timeoutId = 0;
    let startTime: number | null = null;
    const duration = 1400;

    const animate = (timestamp: number) => {
      if (startTime === null) {
        startTime = timestamp;
      }

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(value * easedProgress));

      if (progress < 1) {
        frameId = window.requestAnimationFrame(animate);
      }
    };

    timeoutId = window.setTimeout(() => {
      frameId = window.requestAnimationFrame(animate);
    }, delay);

    return () => {
      window.clearTimeout(timeoutId);
      window.cancelAnimationFrame(frameId);
    };
  }, [delay, isActive, value]);

  const formattedValue = formatter ? formatter(displayValue) : displayValue.toString();

  return (
    <span className="font-sans text-[2.15rem] md:text-[2.75rem] font-semibold tracking-[-0.04em] leading-none text-navy-deep tabular-nums">
      {prefix}
      {formattedValue}
      {suffix}
    </span>
  );
}

export default function TrustBar() {
  const { ref, isVisible } = useScrollAnimation({ once: false });

  return (
    <section className="relative -mt-16 z-10">
      <div
        ref={ref}
        className={`container-narrow transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="glass-card rounded-2xl p-8 md:p-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="text-center group"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-cyan-light/35 mb-3 group-hover:bg-cyan-light/55 transition-colors">
                  <stat.icon className="w-5 h-5 text-navy" />
                </div>
                <div>
                  <AnimatedCount
                    value={stat.value}
                    isActive={isVisible}
                    delay={i * 120}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    formatter={stat.formatter}
                  />
                </div>
                <div className="text-muted-foreground text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
