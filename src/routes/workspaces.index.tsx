import { createFileRoute } from "@tanstack/react-router";

function WorkspacesPage() {
  return <div className="text-sm">Workspaces Page</div>;
}

export const Route = createFileRoute("/workspaces/")({
  component: WorkspacesPage,
});
