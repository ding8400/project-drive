import { Link, Outlet, useParams } from "@tanstack/react-router";

export function WorkspaceLayout() {
  const { workspaceId } = useParams({ strict: false });

  return (
    <div className="grid grid-cols-12 gap-6">
      <aside className="col-span-12 rounded-xl border p-3 md:col-span-3 lg:col-span-2">
        <div className="mb-3 text-xs text-muted-foreground">Workspace</div>
        <div className="mb-4 truncate text-sm font-medium">{workspaceId}</div>
        <nav className="space-y-1 text-sm">
          <Link
            to="/workspaces/$workspaceId"
            params={{ workspaceId: workspaceId! }}
            className="block rounded-md px-2 py-1 hover:bg-accent [&.active]:bg-accent [&.active]:font-medium"
          >
            Overview
          </Link>
          <Link
            to="/workspaces/$workspaceId/projects"
            params={{ workspaceId: workspaceId! }}
            className="block rounded-md px-2 py-1 hover:bg-accent [&.active]:bg-accent [&.active]:font-medium"
          >
            Projects
          </Link>
        </nav>
      </aside>

      <section className="col-span-12 md:col-span-9 lg:col-span-10">
        <Outlet />
      </section>
    </div>
  );
}
