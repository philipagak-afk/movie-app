import { useState } from "react";
import { Link, useNavigate } from "react-router";

function Navbar() {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  function handleSearch(event) {
    event.preventDefault();

    const query = searchInput.trim();

    if (query) {
      navigate(`/search?query=${encodeURIComponent(query)}`);
      setSearchInput("");
    }
  }

  return (
    <div className="w-full min-h-[10vh] bg-black text-white">
      <nav className="flex flex-wrap items-center justify-between gap-4 p-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-semibold text-purple-500"
        >
          Motion
        </Link>

        {/* Search Input */}
        <form
          onSubmit={handleSearch}
          className="flex min-w-0 flex-1 items-center gap-2 rounded-full border-2 border-white/80 bg-transparent px-5 py-3 md:max-w-md"
        >
          <input
            type="search"
            value={searchInput}
            onChange={(event) => setSearchInput(event.target.value)}
            placeholder="Search movies, series and people..."
            aria-label="Search movies and series"
            className="w-full min-w-0 bg-transparent text-white outline-none placeholder:text-gray-400"
          />

          <button
            type="submit"
            className="shrink-0 text-purple-400 transition hover:text-purple-300"
          >
            Search
          </button>
        </form>

        {/* Navigation Links */}
        <ul className="flex flex-wrap items-center gap-4">
          <li className="text-purple-500 underline decoration-purple-500">
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/now-showing" className="hover:text-purple-400">
              Now Showing
            </Link>
          </li>

          <li>
            <Link to="/series" className="hover:text-purple-400">
              Series
            </Link>
          </li>

          <li>
            <Link to="/popular" className="hover:text-purple-400">
              Popular
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
