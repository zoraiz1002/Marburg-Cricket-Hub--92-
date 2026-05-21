import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/teams")({ component: Teams });

const teams = [
  { id: "lions", name: "Marburg Lions", category: "Senior · 1st XI", captain: "Arjun K.", players: 14, form: ["W","W","L","W","D"] },
  { id: "eagles", name: "Marburg Eagles", category: "Senior · 2nd XI", captain: "Hasan M.", players: 13, form: ["W","L","W","W","W"] },
  { id: "tigers", name: "Marburg Tigers", category: "T20 Squad", captain: "Daniel W.", players: 12, form: ["L","W","W","L","W"] },
  { id: "cubs", name: "Marburg Cubs", category: "U-19", captain: "Ravi S.", players: 15, form: ["W","W","W","D","W"] },
  { id: "warriors", name: "Marburg Warriors", category: "Veterans", captain: "Faisal R.", players: 11, form: ["L","W","L","W","D"] },
  { id: "queens", name: "Marburg Queens", category: "Women's XI", captain: "Sara T.", players: 12, form: ["W","W","W","W","L"] },
];

function dot(r: string) {
  const c = r === "W" ? "bg-green-500" : r === "L" ? "bg-destructive" : "bg-muted-foreground";
  return <span className={`inline-block h-2.5 w-2.5 rounded-full ${c}`} />;
}

function Teams() {
  const [q, setQ] = useState("");
  const filtered = teams.filter((t) => t.name.toLowerCase().includes(q.toLowerCase()));
  return (
    <PageShell>
      <PageHero title="Our Teams" subtitle="Six squads. One club. All competing across Hesse." />
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search teams..." className="max-w-md" />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((t) => (
            <Card key={t.id} className="overflow-hidden">
              <div className="hero-gradient flex items-center justify-center py-10 text-white">
                <span className="font-display text-6xl text-secondary">{t.name.split(" ")[1][0]}</span>
              </div>
              <div className="p-5">
                <div className="text-xs font-semibold text-muted-foreground">{t.category}</div>
                <div className="font-display text-2xl">{t.name}</div>
                <div className="mt-3 text-sm text-muted-foreground">Captain: <span className="text-foreground">{t.captain}</span></div>
                <div className="text-sm text-muted-foreground">{t.players} players</div>
                <div className="mt-3 flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">Form</span>
                  {t.form.map((r, i) => <span key={i}>{dot(r)}</span>)}
                </div>
                <Link to="/teams/$id" params={{ id: t.id }} className="mt-4 block">
                  <Button className="w-full">View Team</Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
