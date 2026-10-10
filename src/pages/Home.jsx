const movies = [
  {
    id: 1,
    title: "Interstellar",
    year: 2014,
    genre: "Sci-Fi",
    image:
      "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
  },
  {
    id: 2,
    title: "Inception",
    year: 2010,
    genre: "Action",
    image:
      "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
  },
  {
    id: 3,
    title: "The Dark Knight",
    year: 2008,
    genre: "Action",
    image:
      "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  },
  {
    id: 4,
    title: "Avatar",
    year: 2009,
    genre: "Adventure",
    image:
      "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
  },
];

function Home() {
  return (
    <div className="min-h-screen bg-[#050316] px-5 py-8 text-white md:px-10">

      {/* Hero Section */}
      <section className="mb-12 rounded-2xl bg-gradient-to-r from-[#211044] via-[#17102d] to-[#090719] px-6 py-12 md:px-12 md:py-16">
        <p className="mb-3 font-semibold uppercase tracking-[0.25em] text-purple-300">
          Welcome to Motion
        </p>

        <h1 className="max-w-2xl text-4xl font-extrabold leading-tight md:text-6xl">
          Find Movies You'll Enjoy Without the Hassle
        </h1>

        <p className="mt-5 max-w-xl text-gray-300">
          Explore amazing movies, discover new series, and find your next
          favorite story.
        </p>

        <button className="mt-7 rounded-full bg-purple-400 px-7 py-3 font-bold text-black transition hover:bg-purple-300">
          Explore Movies
        </button>
      </section>

      {/* Trending Movies */}
      <section>
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">
              Trending Movies
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              Movies worth watching right now
            </p>
          </div>

          <button className="text-sm font-semibold text-purple-300 hover:text-white">
            View all →
          </button>
        </div>

        {/* Movie Cards */}
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="group overflow-hidden rounded-xl bg-[#100d25] transition duration-300 hover:-translate-y-2"
            >
              <img
                src={movie.image}
                alt={movie.title}
                className="h-56 w-full object-cover sm:h-72"
              />

              <div className="p-4">
                <h3 className="truncate text-lg font-bold">
                  {movie.title}
                </h3>

                <p className="mt-2 text-sm text-gray-400">
                  {movie.year} · {movie.genre}
                </p>

                <button className="mt-4 w-full rounded-lg border border-purple-400/50 py-2 text-sm font-semibold text-purple-300 transition hover:bg-purple-400 hover:text-black">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="mt-14">
        <h2 className="mb-5 text-2xl font-bold">Explore Categories</h2>

        <div className="flex flex-wrap gap-3">
          {["Action", "Comedy", "Drama", "Horror", "Sci-Fi", "Romance"].map(
            (genre) => (
              <button
                key={genre}
                className="rounded-full border border-gray-700 px-5 py-2 text-gray-300 transition hover:border-purple-400 hover:bg-purple-400 hover:text-black"
              >
                {genre}
              </button>
            )
          )}
        </div>
      </section>

    </div>
  );
}

export default Home;

