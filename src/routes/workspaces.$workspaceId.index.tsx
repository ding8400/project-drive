import { createFileRoute } from "@tanstack/react-router";

function WorkspaceOverviewPage() {
  return <div className="text-sm">Workspace Overview</div>;
}

export const Route = createFileRoute("/workspaces/$workspaceId/")({
  component: WorkspaceOverviewPage,
});
