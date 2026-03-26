import { createFileRoute } from "@tanstack/react-router";

function ProjectTimelinePage() {
  return <div className="text-sm">Project Timeline Page (placeholder)</div>;
}

export const Route = createFileRoute("/workspaces/$workspaceId/projects/$projectId/timeline")({
  component: ProjectTimelinePage,
});
