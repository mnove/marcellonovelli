"use client";

import { CounterCard } from "@/components/ui/counter-card";

export function StatsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-8">
      <CounterCard
        title="Total GitHub Stars"
        targetValue={127}
        description="across all repositories"
        suffix="+"
        delay={200}
      />

      <CounterCard
        title="Open Source Contributions"
        targetValue={89}
        description="merged pull requests"
        suffix="+"
        delay={400}
      />

      <CounterCard
        title="Projects Completed"
        targetValue={23}
        description="client & personal projects"
        suffix="+"
        delay={600}
      />

      {/* <CounterCard
        title="Years of Experience"
        targetValue={6}
        description="in software development"
        suffix="+"
        delay={800}
      /> */}
    </div>
  );
}
