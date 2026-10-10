import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#050316] text-white">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="w-full">
        {children}
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-gray-800 px-5 py-6 text-center text-sm text-gray-400">
        <p>© 2026 Motion. Discover your next favorite movie.</p>
      </footer>
    </div>
  );
}

export default Layout;

