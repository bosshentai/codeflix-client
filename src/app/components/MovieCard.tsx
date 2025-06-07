import Image from 'next/image';
import { Movie } from '../types/movie';
import { MovieInfo } from './MovieInfo';

type MovieCardProps = {
  movie: Movie;
};

export const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <div className='group relative min-h-[12vh] rounded bg-zinc-50 md:min-h-[12vw]'>
      <Image
        alt={movie.title}
        src={movie.bannerFileURL}
        width={600}
        height={400}
        className='rounded-md object-cover object-top transition'
      />
      <MovieInfo movie={movie} />
    </div>
  );
};
