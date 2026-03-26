import { createFileRoute } from "@tanstack/react-router";

function ProjectFilesPage() {
  return <div className="text-sm">Project Files Page (placeholder)</div>;
}

export const Route = createFileRoute("/workspaces/$workspaceId/projects/$projectId/files")({
  component: ProjectFilesPage,
});
