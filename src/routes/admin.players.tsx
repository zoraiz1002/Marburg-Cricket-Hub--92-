import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";

export const Route = createFileRoute("/admin/players")({ component: Page });

function Page() {
  return (
    <div>
      <h1 className="font-display text-4xl">Players</h1>
      <p className="text-sm text-muted-foreground">CRUD interface for players — Phase 2 will wire this to Supabase tables.</p>
      <Card className="mt-6 p-10 text-center text-muted-foreground">
        Add / Edit / Delete table coming next. Schema is documented in <code>SUPABASE_SCHEMA.md</code>.
      </Card>
    </div>
  );
}
