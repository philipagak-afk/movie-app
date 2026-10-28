import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function Search() {
  return (
    <main className="w-full  min-h-[90vh] text-white bg-[#030014]">
      <div className="w-full max-w-384 mx-auto">
        <div className="w-full flex items-center justify-between p-2">
          <h2 className="text-2xl font-bold bg-linear-to-r from-[#d6c7ff] to-[#ab8bff] bg-clip-text text-transparent">
            Popular Movies
          </h2>
          <a href="" className="flex items-center gap-2 text-xl text-gray-400">
            See All
            <MdOutlineKeyboardArrowRight />
          </a>
        </div>
        <div className="w-full flex items-center justify-between p-2">
          <h2 className="text-2xl font-bold bg-linear-to-r from-[#d6c7ff] to-[#ab8bff] bg-clip-text text-transparent">
            Popular Series
          </h2>
          <a href="" className="flex items-center gap-2 text-xl text-gray-400">
            See All
            <MdOutlineKeyboardArrowRight />
          </a>
        </div>
        <div className="w-full flex items-center justify-between p-2">
          <h2 className="text-2xl font-bold bg-linear-to-r from-[#d6c7ff] to-[#ab8bff] bg-clip-text text-transparent">
            Popular People
          </h2>
          <a href="" className="flex items-center gap-2 text-xl text-gray-400">
            See All
            <MdOutlineKeyboardArrowRight />
          </a>
        </div>
      </div>
    </main>
  );
}

export default Search;