import {useQuery} from "@tanstack/react-query";
import {useParams} from "react-router-dom";
import {fetchMovieDetails} from "./query";
import {PacmanLoader} from "react-spinners";

interface DisplayMovieData {
  adults: boolean;
  title: string;
  budget: number;
  genres: [
    {
      id: number;
      name: string;
    }
  ];
  imdb_id: string;
  popularity: number;
  production_companies: [
    {
      id: number;
      name: string;
    }
  ];
  release_date: string;
  revenue: number;
  runtime: number;
  vote_average: number;
  original_language: string;
  poster_path: string;
}

export const Movie = () => {
  const {id} = useParams<{id: string}>();

  // display message when movie id is not available
  if (!id) {
    return (
      <div>
        <h1 className='text-2xl text-slate-500 font-semibold text-center mt-11'>
          Invalid Movie ID
        </h1>
      </div>
    );
  }

  // fetch individual movie data
  const {
    data,
    isLoading: isMovieLoading,
    isError: isMovieError,
  } = useQuery<DisplayMovieData>({
    queryKey: ["movie"],
    queryFn: () => fetchMovieDetails(id),
  });

  // show error if there is fetch issue
  if (isMovieError) {
    return (
      <div className='h-[70vh] full flex items-center justify-center'>
        <h1 className='text-3xl text-red-500 font-semibold'>Something went wrong.</h1>
      </div>
    );
  }

  return (
    <div className='flex justify-center xs:px-0 md:px-4'>
      {isMovieLoading || !data ? (
        <div className='h-[80vh] w-full flex items-center justify-center'>
          <PacmanLoader color='#36d7b7' />
        </div>
      ) : (
        <div className='flex flex-row h-auto md:flex-row bg-slate-600 mt-4 xs:flex-col xxs:pr-0 xxs:pb-4 md:pb-0 md:pr-2 xxs:mb-4 xxs:mx-6 md:mb-0'>
          <div className='flex justify-center xs:w-[300px] md:w-[400px]'>
            <img
              src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
              className='w-[240px] h-full xxs:hidden xs:w-full xs:block md:w-[400px] '
            />
          </div>

          <div className='pt-6 pl-4 text-slate-100 mx-2'>
            <h1 className='text-md md:text-3xl mb-6 font-bold'>{data.title}</h1>

            <p className='text-md text-slate-200 my-1 font-semibold'>Language:</p>
            <p className='text-sm text-slate-400'>{data.original_language.toUpperCase()}</p>

            <p className='text-md text-slate-200 mb-1 font-semibold'>Genres:</p>
            {data.genres.map((genre) => (
              <p key={genre.id} className='text-sm text-slate-400'>
                {genre.name}
              </p>
            ))}

            <p className='text-md text-slate-200 my-1 font-semibold'>Release Date:</p>
            <p className='text-sm text-slate-400'>{data.release_date}</p>

            <p className='text-md text-slate-200 my-1 font-semibold'>Popularity:</p>
            <p className='text-sm text-slate-400'>{data.popularity}</p>

            <p className='text-md text-slate-200 my-1 font-semibold'>Production Companies:</p>
            {data.production_companies.map((company) => (
              <p key={company.id} className='text-sm text-slate-400'>
                {company.name}
              </p>
            ))}

            <p className='text-md text-slate-200 my-1 font-semibold'>Revenue:</p>
            <p className='text-sm text-slate-400'>{data.revenue}</p>

            <p className='text-md text-slate-200 my-1 font-semibold'>Run Time:</p>
            <p className='text-sm text-slate-400'>{data.runtime} Minutes</p>
          </div>
        </div>
      )}
    </div>
  );
};
