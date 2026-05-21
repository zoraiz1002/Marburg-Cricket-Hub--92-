import { createFileRoute } from "@tanstack/react-router";
import { Stub } from "@/components/site/Stub";
export const Route = createFileRoute("/players/$id")({ component: () => <Stub title="Player Profile" /> });
