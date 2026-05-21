import { createFileRoute } from "@tanstack/react-router";
import { Stub } from "@/components/site/Stub";
export const Route = createFileRoute("/matches/$id")({ component: () => <Stub title="Match Centre" /> });
