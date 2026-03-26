import { createFileRoute } from "@tanstack/react-router";
import { ProjectLayout } from "@/app/layouts/ProjectLayout";

export const Route = createFileRoute("/workspaces/$workspaceId/projects/$projectId")({
  component: ProjectLayout,
});
