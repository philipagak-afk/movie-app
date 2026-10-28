 import { useState } from "react";
import { useNavigate } from "react-router";

function SearchForm() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query) return;
    navigate(`/search?q=${query}`);
  };
  return (
    <form onSubmit={handleSearch}>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="search"
        placeholder="Search for movies, series and people..."
        className="w-120 px-4 py-2 bg-transparent border border-white-400 rounded-2xl text-white placeholder-gray-400 outline-none"
      />
    </form>
  );
}

export default SearchForm;