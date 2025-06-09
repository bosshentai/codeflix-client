import { gql } from '@apollo/client';
import { apolloClient } from '../../../lib/apolloClient';

export const GET_MOVIE_QUERY = gql`
  query GetMovies {
    movies {
      id
      title
      rating
      genres
      description
      yearLaunched
      thumbFileURL
      videoFileURL
      bannerFileURL
    }
  }
`;

export const GET_MOVIE_BY_ID = gql`
  query GetMovieById($id: ID!) {
    movie(id: $id) {
      id
      title
      rating
      genres
      description
      yearLaunched
      thumbFileURL
      videoFileURL
      bannerFileURL
    }
  }
`;

export const GET_MOVIES_BY_GENRE = gql`
  query GetMoviesByGenre($genre: String!, $limit: Int) {
    moviesByGenre(genre: $genre, limit: $limit) {
      id
      title
      rating
      genres
      description
      yearLaunched
      thumbFileURL
      videoFileURL
      bannerFileURL
    }
  }
`;

export const getMoviesByGenre = async (
  genre: string,
  options: { _limit?: number } = {}
) => {
  const limit = options?._limit || 8;
  const { data } = await apolloClient.query({
    query: GET_MOVIES_BY_GENRE,
    variables: { genre, limit },
  });

  return data.moviesByGenre;
};
