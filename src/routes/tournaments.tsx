import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/tournaments")({ component: Tournaments });

const ts = [
  { id: "hpl", name: "Hesse Premier League", format: "League", status: "LIVE", dates: "Apr — Aug 2025", teams: 12 },
  { id: "t20", name: "Summer T20 Cup", format: "Knockout", status: "LIVE", dates: "Jun — Jul 2025", teams: 16 },
  { id: "knockout", name: "Marburg Knockout", format: "Knockout", status: "UPCOMING", dates: "Sep 2025", teams: 8 },
  { id: "winter", name: "Winter Indoor", format: "League", status: "COMPLETED", dates: "Jan — Mar 2025", teams: 6 },
];

function Tournaments() {
  return (
    <PageShell>
      <PageHero title="Tournaments" subtitle="Active, upcoming, and completed competitions." />
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          {ts.map((t) => (
            <Card key={t.id} className="overflow-hidden">
              <div className="hero-gradient h-40 px-6 py-5 text-white">
                <div className="flex gap-2">
                  <span className={`rounded-md px-2 py-0.5 text-xs font-bold ${
                    t.status === "LIVE" ? "bg-secondary text-secondary-foreground"
                    : t.status === "UPCOMING" ? "bg-white/20" : "bg-white/10"
                  }`}>{t.status}</span>
                  <span className="rounded-md bg-white/10 px-2 py-0.5 text-xs">{t.format}</span>
                </div>
                <div className="mt-6 font-display text-3xl">{t.name}</div>
                <div className="text-sm text-white/70">{t.dates}</div>
              </div>
              <div className="flex items-center justify-between p-5">
                <span className="text-sm text-muted-foreground">{t.teams} teams</span>
                <Link to="/tournaments/$id" params={{ id: t.id }}>
                  <Button>View Tournament</Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
