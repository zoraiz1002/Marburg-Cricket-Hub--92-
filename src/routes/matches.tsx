import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/matches")({ component: Matches });

const matches = [
  { id: "m1", a: "Marburg Lions", b: "Hesse United", date: "Sat 24 May · 13:00", venue: "Lahnaue Ground", status: "UPCOMING" },
  { id: "m2", a: "Marburg Eagles", b: "Darmstadt CC", date: "Sun 25 May · 11:00", venue: "Schulsportplatz", status: "UPCOMING" },
  { id: "m3", a: "Marburg Lions", b: "Frankfurt CC", date: "Sun 18 May", venue: "Frankfurt Oval", status: "COMPLETED", score: "Lions 182/6 · FCC 178/9" },
  { id: "m4", a: "Marburg Tigers", b: "Giessen CC", date: "Live now", venue: "Lahnaue Ground", status: "LIVE", score: "Tigers 89/2 (12.4)" },
];

function badge(s: string) {
  return s === "LIVE" ? "bg-destructive text-destructive-foreground animate-pulse"
    : s === "UPCOMING" ? "bg-secondary text-secondary-foreground"
    : "bg-muted text-foreground";
}

function Matches() {
  return (
    <PageShell>
      <PageHero title="Matches" subtitle="Fixtures, live games, and results." />
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          {matches.map((m) => (
            <Card key={m.id} className="p-6 transition-all hover:border-secondary">
              <div className="flex items-center justify-between">
                <span className={`rounded-md px-2 py-0.5 text-xs font-bold ${badge(m.status)}`}>
                  {m.status === "LIVE" && "🔴 "}{m.status}
                </span>
                <span className="text-xs text-muted-foreground">{m.date}</span>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="font-display text-2xl">{m.a}</div>
                <div className="text-muted-foreground">vs</div>
                <div className="font-display text-2xl">{m.b}</div>
              </div>
              {m.score && <div className="mt-3 rounded-lg bg-muted px-3 py-2 text-sm">{m.score}</div>}
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xs text-muted-foreground">📍 {m.venue}</span>
                <Link to="/matches/$id" params={{ id: m.id }}>
                  <Button size="sm" variant="outline">Details</Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
