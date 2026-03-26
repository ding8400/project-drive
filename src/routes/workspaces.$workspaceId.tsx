import { createFileRoute } from "@tanstack/react-router";
import { WorkspaceLayout } from "@/app/layouts/WorkspaceLayout";

export const Route = createFileRoute("/workspaces/$workspaceId")({
  component: WorkspaceLayout,
});
