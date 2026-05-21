import { createFileRoute } from "@tanstack/react-router";
import { Stub } from "@/components/site/Stub";
export const Route = createFileRoute("/dashboard")({ component: () => <Stub title="Player Dashboard" /> });
