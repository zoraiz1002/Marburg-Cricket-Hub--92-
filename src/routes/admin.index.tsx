import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Users, Trophy, CalendarDays, Euro } from "lucide-react";

export const Route = createFileRoute("/admin/")({ component: Overview });

const kpis = [
  { l: "Total Players", v: "152", Icon: Users },
  { l: "Active Teams", v: "6", Icon: Trophy },
  { l: "Matches this month", v: "14", Icon: CalendarDays },
  { l: "Revenue (MTD)", v: "€2,840", Icon: Euro },
];

function Overview() {
  return (
    <div>
      <h1 className="font-display text-4xl">Admin Overview</h1>
      <p className="text-sm text-muted-foreground">Welcome back. Here's the state of the club.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {kpis.map((k) => (
          <Card key={k.l} className="p-5">
            <k.Icon className="h-5 w-5 text-secondary" />
            <div className="mt-3 font-display text-3xl">{k.v}</div>
            <div className="text-xs text-muted-foreground">{k.l}</div>
          </Card>
        ))}
      </div>
      <Card className="mt-6 p-6">
        <h3 className="font-display text-2xl">Recent activity</h3>
        <ul className="mt-4 space-y-3 text-sm">
          {["Match scheduled: Lions vs Hesse United (Sat 24 May)",
            "New player registered: Mateo Ali",
            "Order #1042 marked shipped",
            "Tournament 'Summer T20 Cup' fixtures generated"].map((a, i) => (
            <li key={i} className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-secondary"/>{a}
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
