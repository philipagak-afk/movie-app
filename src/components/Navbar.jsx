import { Link } from "react-router";

function Navbar() {
  return (
    <div className="w-full h-[10vh]  bg-black text-white">
<nav className="flex justify-between items-center p-4">
<div className="text-2xl font-semibold text-purple-500">
  <h1>Motion</h1>
</div>

<div className=" p-6 py-4 rounded-full border-2 border-white/80 bg-transparent text-white outline-none flex items-center gap-2">
  <input className="w-120" type="search" placeholder="Search for movies ,series and people " />
</div>



<div className="flex gap-4 ">

  <ul className="flex gap-4 items-center">

  <li className="text-purple-500 underline decoration-purple-500 "><Link to={"/"}>Home</Link></li>
  <li><Link to="/now-showing">Now Showing</Link> </li>
  <li><Link to="series">Series</Link></li>
  <li><Link to="popular">popular</Link></li>
  
  </ul>

</div>

</nav>






    </div>
  );
}

export default Navbar;