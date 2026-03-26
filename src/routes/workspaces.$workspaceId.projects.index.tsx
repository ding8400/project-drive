import { createFileRoute } from "@tanstack/react-router";

function ProjectListPage() {
  return <div className="text-sm">Project List Page</div>;
}

export const Route = createFileRoute("/workspaces/$workspaceId/projects/")({
  component: ProjectListPage,
});
