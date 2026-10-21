function MovieDetails() {
  return (
    <main className="w-full min-h-[90vh]">
      <div className="w-full min-h-[90vh] relative">
        <img
          className="absolute z-10 h-[90vh] w-full object-cover  md:object-center object-top"
          alt=" backdrop for Spider-Man: Brand New Day"
          src="https://image.tmdb.org/t/p/original//r08LxMJCbf1SiJIWeyH9aJmdqwC.jpg"
        ></img>
        <div className="w-full min-h-[90vh] absolute bg-[#030014]/60  z-10 p-3">
          <p className="md:text-4xl text-2xl text-center  font-bold z-20 relative bg-linear-to-r from-[#d6c7ff] to-[#ab8bff] bg-clip-text text-transparent">
            Spider-Man: Brand New Day
          </p>
          <div className="flex gap-3 items-center">
            <p className="text-white text-base font-semibold">145 min</p>
            <p className="text-white text-base font-semibold">2026</p>
            <p className="flex items-center gap-2">
              <span className="text-white font-semibold text-base">8.5</span>{" "}
              <span className="bg-[#f5c518] text-black font-extrabold p-0.5 text-xs rounded-lg">
                IMDb
              </span>
            </p>
          </div>
          <div className="mt-4">
            <h5 className="text-gray-400 uppercase text-sm font-semibold">
              genres
            </h5>
            <div className="flex items-center gap-6 mt-4">
              <button className="cursor-pointer hover:bg-slate-700/75 transition duration-500 ease-in-out bg-[#1C1E30]/75 text-sm rounded-full p-2 text-white">
                Science Fiction
              </button>
              <button className="cursor-pointer hover:bg-slate-700/75 transition duration-500 ease-in-out bg-[#1C1E30]/75 text-sm rounded-full p-2 text-white">
                Action
              </button>
              <button className="cursor-pointer hover:bg-slate-700/75 transition duration-500 ease-in-out bg-[#1C1E30]/75 text-sm rounded-full p-2 text-white">
                Adventure
              </button>
            </div>
          </div>
          <div className="mt-4 w-full">
            <h5 className="text-gray-400 uppercase text-sm font-semibold">
              summary
            </h5>
            <p className="text-white sm:w-2/3">
              Fighting crime full-time as Spider-Man in a world that doesn't
              remember him—and the pressure of seeing his old friends move on
              without him—sparks a change in Peter Parker he may not have the
              power to control. But that transformation might also be the only
              thing that can stop a shocking new threat to the city and those he
              loves - a powerful villain no one can even see.
            </p>
          </div>
          <div className="w-4/5 hidden max-w-384 h-[50vh] hide-scrollbar p-4 overflow-auto mx-auto relative bg-[#030014]/50 rounded-2xl">
            <h1 className="text-gradient text-4xl font-semibold text-center">
              Similar Movies
            </h1>
            <ul className=" z-20 rlative w-full   p-4 flex justify-evenly sm:items-start items-center flex-col sm:flex-row gap-3  flex-wrap">
              <li className="sm:w-[19%]  w-11/12 relative h-96    rounded-xl shrink-0 mt-4">
                <a href="/details/movie/10898" data-discover="true">
                  <img
                    loading="lazy"
                    className="w-11/2 h-11/12 rounded-xl  object-cover"
                    src="https://image.tmdb.org/t/p/w500/k3UHxvYv8ZgWLL0lM45f979OSo7.jpg"
                  />
                  <p className="text-white font-semibold text-center truncate w-full bg-[#030014]/75 p-2 transition rounded-b-xl duration-500 ease-in-out bottom-0 ">
                    The Little Mermaid II: Return to the Sea
                  </p>
                </a>
              </li>
              <li className="sm:w-[19%]  w-11/12 relative h-96    rounded-xl shrink-0 mt-4">
                <a href="/details/movie/10996" data-discover="true">
                  <img
                    loading="lazy"
                    className="w-11/2 h-11/12 rounded-xl  object-cover"
                    src="https://image.tmdb.org/t/p/w500/1vdPKC35IOjEAJEr9Y2rjEeyCcW.jpg"
                  />
                  <p className="text-white font-semibold text-center truncate w-full bg-[#030014]/75 p-2 transition rounded-b-xl duration-500 ease-in-out bottom-0 ">
                    Stuart Little 2
                  </p>
                </a>
              </li>
              <li className="sm:w-[19%]  w-11/12 relative h-96    rounded-xl shrink-0 mt-4">
                <a href="/details/movie/1036561" data-discover="true">
                  <img
                    loading="lazy"
                    className="w-11/2 h-11/12 rounded-xl  object-cover"
                    src="https://image.tmdb.org/t/p/w500/67ZsRKbItt6B1yHlsJKgfPWOyuJ.jpg"
                  />
                  <p className="text-white font-semibold text-center truncate w-full bg-[#030014]/75 p-2 transition rounded-b-xl duration-500 ease-in-out bottom-0 ">
                    Shadow Master
                  </p>
                </a>
              </li>
              <li className="sm:w-[19%]  w-11/12 relative h-96    rounded-xl shrink-0 mt-4">
                <a href="/details/movie/457331" data-discover="true">
                  <img
                    loading="lazy"
                    className="w-11/2 h-11/12 rounded-xl  object-cover"
                    src="https://image.tmdb.org/t/p/w500/g9WiAgtGMAuenJapwQXPVkbDWPP.jpg"
                  />
                  <p className="text-white font-semibold text-center truncate w-full bg-[#030014]/75 p-2 transition rounded-b-xl duration-500 ease-in-out bottom-0 ">
                    Kamen Rider Ex-Aid the Movie: True Ending
                  </p>
                </a>
              </li>
              <li className="sm:w-[19%]  w-11/12 relative h-96    rounded-xl shrink-0 mt-4">
                <a href="/details/movie/457335" data-discover="true">
                  <img
                    loading="lazy"
                    className="w-11/2 h-11/12 rounded-xl  object-cover"
                    src="https://image.tmdb.org/t/p/w500/2kNnf7BwRCEm4bcFkdiE0T4U25s.jpg"
                  />
                  <p className="text-white font-semibold text-center truncate w-full bg-[#030014]/75 p-2 transition rounded-b-xl duration-500 ease-in-out bottom-0 ">
                    Guns Akimbo
                  </p>
                </a>
              </li>
              <li className="sm:w-[19%]  w-11/12 relative h-96    rounded-xl shrink-0 mt-4">
                <a href="/details/movie/1424934" data-discover="true">
                  <img
                    loading="lazy"
                    className="w-11/2 h-11/12 rounded-xl  object-cover"
                    src="https://image.tmdb.org/t/p/w500/mxNi7UWmx9beZ1ONzkTHbCW84Jr.jpg"
                  />
                  <p className="text-white font-semibold text-center truncate w-full bg-[#030014]/75 p-2 transition rounded-b-xl duration-500 ease-in-out bottom-0 ">
                    Bloodlust
                  </p>
                </a>
              </li>
              <li className="sm:w-[19%]  w-11/12 relative h-96    rounded-xl shrink-0 mt-4">
                <a href="/details/movie/1424981" data-discover="true">
                  <img
                    loading="lazy"
                    className="w-11/2 h-11/12 rounded-xl  object-cover"
                    src="/no-poster.png"
                  />
                  <p className="text-white font-semibold text-center truncate w-full bg-[#030014]/75 p-2 transition rounded-b-xl duration-500 ease-in-out bottom-0 ">
                    Flash Gordon
                  </p>
                </a>
              </li>
              <li className="sm:w-[19%]  w-11/12 relative h-96    rounded-xl shrink-0 mt-4">
                <a href="/details/movie/271404" data-discover="true">
                  <img
                    loading="lazy"
                    className="w-11/2 h-11/12 rounded-xl  object-cover"
                    src="https://image.tmdb.org/t/p/w500/84pDze9Gc0PVA2JM2q54OSXpskC.jpg"
                  />
                  <p className="text-white font-semibold text-center truncate w-full bg-[#030014]/75 p-2 transition rounded-b-xl duration-500 ease-in-out bottom-0 ">
                    Beyond Skyline
                  </p>
                </a>
              </li>
              <li className="sm:w-[19%]  w-11/12 relative h-96    rounded-xl shrink-0 mt-4">
                <a href="/details/movie/457249" data-discover="true">
                  <img
                    loading="lazy"
                    className="w-11/2 h-11/12 rounded-xl  object-cover"
                    src="https://image.tmdb.org/t/p/w500/5A52QYVaZFGWZnXeNfvMOrnd49E.jpg"
                  />
                  <p className="text-white font-semibold text-center truncate w-full bg-[#030014]/75 p-2 transition rounded-b-xl duration-500 ease-in-out bottom-0 ">
                    Vixen: The Movie
                  </p>
                </a>
              </li>
              <li className="sm:w-[19%]  w-11/12 relative h-96    rounded-xl shrink-0 mt-4">
                <a href="/details/movie/10681" data-discover="true">
                  <img
                    loading="lazy"
                    className="w-11/2 h-11/12 rounded-xl  object-cover"
                    src="https://image.tmdb.org/t/p/w500/hbhFnRzzg6ZDmm8YAmxBnQpQIPh.jpg"
                  />
                  <p className="text-white font-semibold text-center truncate w-full bg-[#030014]/75 p-2 transition rounded-b-xl duration-500 ease-in-out bottom-0 ">
                    WALL·E
                  </p>
                </a>
              </li>
              <li className="sm:w-[19%]  w-11/12 relative h-96    rounded-xl shrink-0 mt-4">
                <a href="/details/movie/10771" data-discover="true">
                  <img
                    loading="lazy"
                    className="w-11/2 h-11/12 rounded-xl  object-cover"
                    src="https://image.tmdb.org/t/p/w500/lTMnOx7E2zEzIGY0og1KkfgYMhY.jpg"
                  />
                  <p className="text-white font-semibold text-center truncate w-full bg-[#030014]/75 p-2 transition rounded-b-xl duration-500 ease-in-out bottom-0 ">
                    The Tuxedo
                  </p>
                </a>
              </li>
              <li className="sm:w-[19%]  w-11/12 relative h-96    rounded-xl shrink-0 mt-4">
                <a href="/details/movie/11045" data-discover="true">
                  <img
                    loading="lazy"
                    className="w-11/2 h-11/12 rounded-xl  object-cover"
                    src="https://image.tmdb.org/t/p/w500/eLDoNLJHZPcavTT1vJqZoGydoWB.jpg"
                  />
                  <p className="text-white font-semibold text-center truncate w-full bg-[#030014]/75 p-2 transition rounded-b-xl duration-500 ease-in-out bottom-0 ">
                    Taxi
                  </p>
                </a>
              </li>
              <li className="sm:w-[19%]  w-11/12 relative h-96    rounded-xl shrink-0 mt-4">
                <a href="/details/movie/11047" data-discover="true">
                  <img
                    loading="lazy"
                    className="w-11/2 h-11/12 rounded-xl  object-cover"
                    src="https://image.tmdb.org/t/p/w500/A2dlVs5WRmAwIPVS5vODhAOkNy7.jpg"
                  />
                  <p className="text-white font-semibold text-center truncate w-full bg-[#030014]/75 p-2 transition rounded-b-xl duration-500 ease-in-out bottom-0 ">
                    Asterix the Gaul
                  </p>
                </a>
              </li>
              <li className="sm:w-[19%]  w-11/12 relative h-96    rounded-xl shrink-0 mt-4">
                <a href="/details/movie/11071" data-discover="true">
                  <img
                    loading="lazy"
                    className="w-11/2 h-11/12 rounded-xl  object-cover"
                    src="https://image.tmdb.org/t/p/w500/tP352STF6BvSROi8K3CMM799TVo.jpg"
                  />
                  <p className="text-white font-semibold text-center truncate w-full bg-[#030014]/75 p-2 transition rounded-b-xl duration-500 ease-in-out bottom-0 ">
                    Them!
                  </p>
                </a>
              </li>
              <li className="sm:w-[19%]  w-11/12 relative h-96    rounded-xl shrink-0 mt-4">
                <a href="/details/movie/10865" data-discover="true">
                  <img
                    loading="lazy"
                    className="w-11/2 h-11/12 rounded-xl  object-cover"
                    src="https://image.tmdb.org/t/p/w500/oK8yR6xSQreWf1ouP1VpXKwoop5.jpg"
                  />
                  <p className="text-white font-semibold text-center truncate w-full bg-[#030014]/75 p-2 transition rounded-b-xl duration-500 ease-in-out bottom-0 ">
                    Atlantis: The Lost Empire
                  </p>
                </a>
              </li>
              <li className="sm:w-[19%]  w-11/12 relative h-96    rounded-xl shrink-0 mt-4">
                <a href="/details/movie/10992" data-discover="true">
                  <img
                    loading="lazy"
                    className="w-11/2 h-11/12 rounded-xl  object-cover"
                    src="https://image.tmdb.org/t/p/w500/wUWoat7L4vvQburQ8pVEJhRG9L5.jpg"
                  />
                  <p className="text-white font-semibold text-center truncate w-full bg-[#030014]/75 p-2 transition rounded-b-xl duration-500 ease-in-out bottom-0 ">
                    Cats &amp; Dogs
                  </p>
                </a>
              </li>
              <li className="sm:w-[19%]  w-11/12 relative h-96    rounded-xl shrink-0 mt-4">
                <a href="/details/movie/11090" data-discover="true">
                  <img
                    loading="lazy"
                    className="w-11/2 h-11/12 rounded-xl  object-cover"
                    src="https://image.tmdb.org/t/p/w500/oNxEXmKTZtECHs0bQbI6dQoXYMV.jpg"
                  />
                  <p className="text-white font-semibold text-center truncate w-full bg-[#030014]/75 p-2 transition rounded-b-xl duration-500 ease-in-out bottom-0 ">
                    The Animal
                  </p>
                </a>
              </li>
              <li className="sm:w-[19%]  w-11/12 relative h-96    rounded-xl shrink-0 mt-4">
                <a href="/details/movie/11107" data-discover="true">
                  <img
                    loading="lazy"
                    className="w-11/2 h-11/12 rounded-xl  object-cover"
                    src="https://image.tmdb.org/t/p/w500/qIJ4PU6WifgRs8RpiN3LkNYjzlS.jpg"
                  />
                  <p className="text-white font-semibold text-center truncate w-full bg-[#030014]/75 p-2 transition rounded-b-xl duration-500 ease-in-out bottom-0 ">
                    Eddie
                  </p>
                </a>
              </li>
              <li className="sm:w-[19%]  w-11/12 relative h-96    rounded-xl shrink-0 mt-4">
                <a href="/details/movie/10837" data-discover="true">
                  <img
                    loading="lazy"
                    className="w-11/2 h-11/12 rounded-xl  object-cover"
                    src="https://image.tmdb.org/t/p/w500/tXya1Z9SC51kNOHsFxRqL1GIBua.jpg"
                  />
                  <p className="text-white font-semibold text-center truncate w-full bg-[#030014]/75 p-2 transition rounded-b-xl duration-500 ease-in-out bottom-0 ">
                    DuckTales: The Movie - Treasure of the Lost Lamp
                  </p>
                </a>
              </li>
              <li className="sm:w-[19%]  w-11/12 relative h-96    rounded-xl shrink-0 mt-4">
                <a href="/details/movie/10957" data-discover="true">
                  <img
                    loading="lazy"
                    className="w-11/2 h-11/12 rounded-xl  object-cover"
                    src="https://image.tmdb.org/t/p/w500/h64i9e6oJs2jrDZ4QzspXMqZhPF.jpg"
                  />
                  <p className="text-white font-semibold text-center truncate w-full bg-[#030014]/75 p-2 transition rounded-b-xl duration-500 ease-in-out bottom-0 ">
                    The Black Cauldron
                  </p>
                </a>
              </li>
            </ul>
            <div className="flex justify-center py-8 text-white"></div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MovieDetails;