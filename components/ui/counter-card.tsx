"use client";

import NumberFlow from "@number-flow/react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface CounterCardProps {
  title: string;
  targetValue: number;
  description?: string;
  duration?: number;
  format?: (value: number) => string;
  className?: string;
  counterClassName?: string; // Added for custom styling of the counter
  prefix?: string;
  suffix?: string;
  delay?: number;
}

export function CounterCard({
  title,
  targetValue,
  description,
  duration = 2000,
  //   format,
  className,
  counterClassName,
  prefix = "",
  suffix = "",
  delay = 0,
}: CounterCardProps) {
  const [currentValue, setCurrentValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setCurrentValue(targetValue);
    }, delay);

    return () => clearTimeout(timer);
  }, [targetValue, delay]);

  //   const formatValue = (value: number) => {
  //     if (format) {
  //       return format(value);
  //     }
  //     return value.toLocaleString();
  //   };

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg border bg-card p-6 text-card-foreground shadow-sm transition-all duration-300 hover:shadow-md",
        className
      )}
    >
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground ">{title}</h3>
        <div className="flex items-baseline space-x-1">
          {prefix && (
            <span className="text-2xl font-bold text-foreground">{prefix}</span>
          )}
          <NumberFlow
            value={currentValue}
            format={{ notation: "compact" }}
            className={cn(
              "text-3xl font-regular text-foreground tabular-nums font-mono",
              counterClassName
            )}
            trend={isVisible ? 1 : 0}
            transformTiming={{
              duration: duration,
              easing: "ease-out",
            }}
          />
          {suffix && (
            <span className="text-2xl font-bold text-foreground">{suffix}</span>
          )}
        </div>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>

      {/* Subtle background decoration */}
      <div className="absolute -right-2 -top-2 h-20 w-20 rounded-full bg-primary/5 blur-xl" />
      <div className="absolute -bottom-2 -left-2 h-16 w-16 rounded-full bg-secondary/10 blur-lg" />
    </div>
  );
}
