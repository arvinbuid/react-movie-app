import {useQuery} from "@tanstack/react-query";
import {useParams} from "react-router-dom";
import {fetchMovieDetails} from "./query";

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
  const {data, isLoading} = useQuery<DisplayMovieData>({
    queryKey: ["movie"],
    queryFn: () => fetchMovieDetails(id),
  });

  return (
    <div className='flex justify-center bg-slate-800 h-screen'>
      {isLoading || !data ? (
        <div className='h-[70vh]'>
          <h1 className='text-4xl text-center font-bold text-slate-200'>Loading...</h1>
        </div>
      ) : (
        <div className='flex flex-row w-[780px] h-[600px] bg-slate-600 mt-4'>
          <img
            src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
            className='w-[400px] '
          />
          <div className='pt-6 pl-4 text-slate-100 mx-2'>
            <h1 className='text-3xl mb-6 font-bold'>{data.title}</h1>

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

          {/* <div className='w-full bg-slate-700 pt-5'></div> */}
        </div>
      )}
    </div>
  );
};
