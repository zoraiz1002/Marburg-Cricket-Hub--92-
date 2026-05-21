import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { Card } from "@/components/ui/card";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, LineChart, Line, CartesianGrid } from "recharts";

export const Route = createFileRoute("/stats")({ component: Stats });

const runs = [
  { name: "Arjun K.", value: 642 }, { name: "Mateo A.", value: 511 },
  { name: "Daniel W.", value: 412 }, { name: "Sara T.", value: 388 },
  { name: "Lukas B.", value: 298 }, { name: "Faisal R.", value: 287 },
];
const wkts = [
  { name: "Hasan M.", value: 31 }, { name: "Ravi S.", value: 24 },
  { name: "Daniel W.", value: 18 }, { name: "Lukas B.", value: 14 },
  { name: "Sara T.", value: 9 }, { name: "Arjun K.", value: 2 },
];
const trend = ["Apr","May","Jun","Jul","Aug"].map((m, i) => ({ month: m, runs: 480 + i * 120 + (i%2)*60 }));

function Stats() {
  return (
    <PageShell>
      <PageHero title="Stats & Analytics" subtitle="Season at a glance." />
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-3">
          {[{l:"Total Runs",v:"12,480"},{l:"Total Wickets",v:"487"},{l:"Matches this season",v:"68"}].map((k) => (
            <Card key={k.l} className="p-6">
              <div className="text-sm text-muted-foreground">{k.l}</div>
              <div className="mt-2 font-display text-4xl">{k.v}</div>
            </Card>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Card className="p-6">
            <h3 className="font-display text-2xl">Top Run Scorers</h3>
            <div className="mt-4 h-64">
              <ResponsiveContainer><BarChart data={runs}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.2}/>
                <XAxis dataKey="name" fontSize={11}/><YAxis fontSize={11}/>
                <Tooltip /><Bar dataKey="value" fill="oklch(0.86 0.18 95)" radius={[6,6,0,0]}/>
              </BarChart></ResponsiveContainer>
            </div>
          </Card>
          <Card className="p-6">
            <h3 className="font-display text-2xl">Top Wicket Takers</h3>
            <div className="mt-4 h-64">
              <ResponsiveContainer><BarChart data={wkts}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.2}/>
                <XAxis dataKey="name" fontSize={11}/><YAxis fontSize={11}/>
                <Tooltip /><Bar dataKey="value" fill="#0a0a0a" radius={[6,6,0,0]}/>
              </BarChart></ResponsiveContainer>
            </div>
          </Card>
        </div>

        <Card className="mt-6 p-6">
          <h3 className="font-display text-2xl">Club run trend</h3>
          <div className="mt-4 h-64">
            <ResponsiveContainer><LineChart data={trend}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.2}/>
              <XAxis dataKey="month"/><YAxis/><Tooltip/>
              <Line type="monotone" dataKey="runs" stroke="oklch(0.86 0.18 95)" strokeWidth={3} dot={{r:5}}/>
            </LineChart></ResponsiveContainer>
          </div>
        </Card>
      </section>
    </PageShell>
  );
}
