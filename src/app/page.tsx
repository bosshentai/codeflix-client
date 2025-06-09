import { Suspense } from 'react';
import { Banner } from './components/Banner';
import Header from './components/Header';
import { MovieRow } from './components/MovieRow';
import { getFeaturedMovie } from './service/MovieService';
import { getMoviesByGenre } from './service/MovieQuery';

export default async function Home() {
  const featuredMovie = await getFeaturedMovie('101');

  const genres = ['Drama', 'Action', 'Comedy', 'Animation'];

  const movies = await Promise.all(
    genres.map(async (genre) => {
      const movies = await getMoviesByGenre(genre, { _limit: 8 });
      return { sectionTitle: genre, movies };
    })
  );

  return (
    <div className='relative bg-gradient-to-b lg:h-[140vh]'>
      <Suspense>
        <Header />
      </Suspense>
      <main className='scrollbar-hide relative overflow-y-scroll p-8 pb-20 pl-4 lg:pl-16'>
        <Banner movie={featuredMovie} />
        {movies.map((movie) => (
          <MovieRow
            key={movie.sectionTitle}
            sectionTitle={movie.sectionTitle}
            movies={movie.movies}
          />
        ))}
      </main>
    </div>
  );
}
