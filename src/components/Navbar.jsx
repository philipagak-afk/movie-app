function Navbar() {
  return (
    <nav className="w-full bg-[#050316] text-white flex items-center justify-between px-5 py-3">

      {/* Logo */}
      <h3 className="text-2xl font-bold text-[#c4b5fd]">
        Motion
      </h3>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search for movies, series and people..."
        className="w-[30%] rounded-full border border-gray-400 bg-transparent px-7 py-4 text-white outline-none placeholder:text-gray-500 focus:border-[#c4b5fd]"
      />

      {/* Navigation Links */}
      <ul className="flex items-center gap-5 font-semibold">
        <li className="cursor-pointer text-[#c4b5fd] underline underline-offset-4">
          Home
        </li>

        <li className="cursor-pointer transition-colors hover:text-[#c4b5fd]">
          Now Showing
        </li>

        <li className="cursor-pointer transition-colors hover:text-[#c4b5fd]">
          Series
        </li>

        <li className="cursor-pointer transition-colors hover:text-[#c4b5fd]">
          Popular
        </li>
      </ul>

    </nav>
  );
}

export default Navbar;