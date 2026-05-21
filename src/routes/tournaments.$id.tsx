import { createFileRoute } from "@tanstack/react-router";
import { Stub } from "@/components/site/Stub";
export const Route = createFileRoute("/tournaments/$id")({ component: () => <Stub title="Tournament Details" /> });
