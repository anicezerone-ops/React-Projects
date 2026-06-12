import { Link, useNavigate } from "react-router-dom";

function AppLayout({ children, title, headerExtra }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (!confirmLogout) return;

    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <Link
            to="/employees"
            className="text-xl font-bold tracking-tight text-blue-600 transition-colors hover:text-blue-700"
          >
            EmpTrack
          </Link>

          <div className="flex flex-wrap items-center gap-2">
            <Link
              to="/employees/add"
              className="btn btn-primary btn-sm px-3 py-2 sm:px-4"
            >
              Add Employee
            </Link>
            <button
              type="button"
              onClick={handleLogout}
              className="btn btn-outline-danger btn-sm px-3 py-2 sm:px-4"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8">
        {title && (
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <h1 className="mb-0 text-2xl font-bold text-slate-800 sm:text-3xl">
              {title}
            </h1>
            {headerExtra}
          </div>
        )}
        {children}
      </main>
    </div>
  );
}

export default AppLayout;
