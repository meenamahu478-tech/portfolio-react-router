import { Link, Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      {/* Navbar */}
      <nav className="flex justify-between p-4 bg-gray-900 text-white">
        <h1 className="font-bold">MyPortfolio</h1>

        <div className="flex gap-6">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>

      {/* Content */}
      <div className="min-h-screen p-6">
        <Outlet />
      </div>

      {/* Footer */}
      <footer className="text-center p-4 bg-gray-800 text-white">
        © 2026 My Portfolio
      </footer>
    </>
  );
}

export default MainLayout;