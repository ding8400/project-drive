import { createRootRoute } from "@tanstack/react-router";
import { AppShell } from "@/app/layouts/AppShell";

export const Route = createRootRoute({
  component: AppShell,
});
