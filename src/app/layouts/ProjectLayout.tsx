import { Link, Outlet, useParams } from "@tanstack/react-router";

export function ProjectLayout() {
  const { workspaceId, projectId } = useParams({ strict: false });

  return (
    <div className="space-y-4">
      <div className="rounded-xl border p-4">
        <div className="text-xs text-muted-foreground">Project</div>
        <div className="mt-1 text-base font-semibold">{projectId}</div>
      </div>

      <div className="flex items-center gap-2 rounded-xl border p-2 text-sm">
        <Link
          to="/workspaces/$workspaceId/projects/$projectId/files"
          params={{ workspaceId: workspaceId!, projectId: projectId! }}
          className="rounded-md px-3 py-1.5 hover:bg-accent [&.active]:bg-accent [&.active]:font-medium"
        >
          Files
        </Link>
        <Link
          to="/workspaces/$workspaceId/projects/$projectId/timeline"
          params={{ workspaceId: workspaceId!, projectId: projectId! }}
          className="rounded-md px-3 py-1.5 hover:bg-accent [&.active]:bg-accent [&.active]:font-medium"
        >
          Timeline
        </Link>
      </div>

      <div className="rounded-xl border p-4">
        <Outlet />
      </div>
    </div>
  );
}
