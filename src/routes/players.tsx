import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/players")({ component: Players });

const players = [
  { id: "1", name: "Arjun Khanna", role: "Batsman", team: "Lions", runs: 642, wkts: 2 },
  { id: "2", name: "Hasan Malik", role: "Fast Bowler", team: "Eagles", runs: 88, wkts: 31 },
  { id: "3", name: "Daniel Weber", role: "All-rounder", team: "Tigers", runs: 412, wkts: 18 },
  { id: "4", name: "Faisal Rahim", role: "Wicketkeeper", team: "Warriors", runs: 287, wkts: 0 },
  { id: "5", name: "Ravi Sharma", role: "Spinner", team: "Cubs", runs: 122, wkts: 24 },
  { id: "6", name: "Mateo Ali", role: "Batsman", team: "Lions", runs: 511, wkts: 0 },
  { id: "7", name: "Lukas Braun", role: "All-rounder", team: "Eagles", runs: 298, wkts: 14 },
  { id: "8", name: "Sara Thapa", role: "Captain", team: "Queens", runs: 388, wkts: 9 },
];

function Players() {
  const [q, setQ] = useState("");
  const list = players.filter((p) => p.name.toLowerCase().includes(q.toLowerCase()));
  return (
    <PageShell>
      <PageHero title="Players" subtitle="Meet the squad." />
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search players..." className="max-w-md" />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((p) => (
            <Card key={p.id} className="p-5 text-center transition-all hover:-translate-y-1 hover:border-secondary glow-yellow">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-yellow-600 font-display text-2xl">
                {p.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div className="mt-3 font-semibold">{p.name}</div>
              <span className="mt-1 inline-block rounded-md bg-muted px-2 py-0.5 text-xs">{p.role}</span>
              <div className="mt-2 text-xs text-muted-foreground">{p.team}</div>
              <div className="mt-3 flex justify-around text-xs">
                <div><div className="font-display text-lg">{p.runs}</div><div className="text-muted-foreground">Runs</div></div>
                <div><div className="font-display text-lg">{p.wkts}</div><div className="text-muted-foreground">Wkts</div></div>
              </div>
              <Link to="/players/$id" params={{ id: p.id }} className="mt-3 block">
                <Button variant="outline" size="sm" className="w-full">View Profile</Button>
              </Link>
            </Card>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
