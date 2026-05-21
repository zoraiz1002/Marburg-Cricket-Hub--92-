import { createFileRoute } from "@tanstack/react-router";
import { Stub } from "@/components/site/Stub";
export const Route = createFileRoute("/teams/$id")({
  component: () => <Stub title="Team Details" />,
});
