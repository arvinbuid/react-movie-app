import {useQuery} from "@tanstack/react-query";
import {useParams} from "react-router-dom";
import {fetchTvShowDetails} from "./query";

interface DisplayTvShowData {
  name: string;
  poster_path: string;
  created_by: [
    {
      id: number;
      name: string;
      gender: string;
    }
  ];
  episode_run_time: [number];
  first_air_date: string;
  number_of_episodes: number;
  number_of_seasons: number;
  production_companies: [
    {
      id: number;
      name: string;
    }
  ];
  vote_average: number;
}

export const TvShow = () => {
  const {id} = useParams<{id: string}>();

  // display message when tv show  id is not available
  if (!id) {
    return (
      <div>
        <h1 className='text-2xl text-slate-500 font-semibold text-center mt-11'>
          Invalid Movie ID
        </h1>
      </div>
    );
  }

  // fetch individual tv show data
  const {data, isLoading} = useQuery<DisplayTvShowData>({
    queryKey: ["tvshow"],
    queryFn: () => fetchTvShowDetails(id),
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
            <h1 className='text-3xl mb-6 font-bold'>{data.name}</h1>

            <p className='text-md text-slate-200 my-1 font-semibold'>Created By:</p>

            {data.created_by.map((n) => (
              <div key={n.id}>
                <p className='text-sm text-slate-400'>{n.name ? n.name : "No Data Available"}</p>
              </div>
            ))}

            <p className='text-md text-slate-200 my-1 font-semibold'>Episodes Run Time:</p>
            {data.episode_run_time.map((index, episode) => (
              <p key={index} className='text-sm text-slate-400'>
                {episode ? episode : "No Data Available"}
              </p>
            ))}

            <p className='text-md text-slate-200 my-1 font-semibold'>First Air Date:</p>
            <p className='text-sm text-slate-400'>{data.first_air_date}</p>

            <p className='text-md text-slate-200 my-1 font-semibold'>Number of Seasons:</p>
            <p className='text-sm text-slate-400'>{data.number_of_seasons}</p>

            <p className='text-md text-slate-200 my-1 font-semibold'>Number of Episodes:</p>
            <p className='text-sm text-slate-400'>{data.number_of_episodes}</p>

            <p className='text-md text-slate-200 my-1 font-semibold'>Production Companies:</p>
            {data.production_companies.map((company) => (
              <p key={company.id} className='text-sm text-slate-400'>
                {company.name}
              </p>
            ))}

            <p className='text-md text-slate-200 my-1 font-semibold'>Vote Average:</p>
            <p className='text-sm text-slate-400'>{data.vote_average.toFixed(2)}</p>
          </div>
        </div>
      )}
    </div>
  );
};
