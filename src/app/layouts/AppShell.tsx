import { Link, Outlet } from "@tanstack/react-router";

export function AppShell() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4">
          <div className="text-sm font-semibold">Project Drive</div>
          <nav className="flex items-center gap-4 text-sm">
            <Link to="/workspaces" className="[&.active]:font-semibold">
              Workspaces
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-6">
        <Outlet />
      </main>
    </div>
  );
}
