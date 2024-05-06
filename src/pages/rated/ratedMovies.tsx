import {Link, Navigate} from "react-router-dom";

interface DisplayData {
  id: number;
  overview: string;
  title: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  release_date: number;
  rating?: number;
}

interface Props {
  data: DisplayData[];
  isRated?: boolean;
}

export const RatedMovies = (props: Props) => {
  const {data, isRated} = props;

  // if guest is not logged in
  if (localStorage.getItem("guest_session_id") === null) {
    return <Navigate to='/auth' />;
  }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6'>
      {!data ? (
        <div className='w-screen'>
          <h1 className='text-slate-100 text-3xl text-center'>No Rated Data.</h1>
        </div>
      ) : (
        data.map((displayData: DisplayData) => (
          <div
            key={displayData.id}
            className='gap-6 bg-slate-700 text-slate-100 pv-4 rounded-md max-w-[360px] h-auto'
          >
            {/* Movie Image */}
            <Link to={`/movie/${displayData.id}`}>
              <div className='cursor-pointer'>
                {/* <img src={`https://image.tmdb.org/t/p/original/1E5baAaEse26fej7uHcjOgEE2t2.jpg`} /> */}
                <img src={`https://image.tmdb.org/t/p/original/${displayData.poster_path}`} />
              </div>
            </Link>

            {/* Release Date and Rating */}
            <div className='px-8 pb-5'>
              <h1 className='text-2xl mt-4 mb-2 font-bold text-start'>{displayData.title}</h1>
              <p className='text-xs font-semibold text-slate-400 mb-[3px] text-start'>
                Release Date: {displayData.release_date}
              </p>
              <p className='text-xs font-semibold text-slate-400 text-start mb-5'>
                Rating: {displayData.vote_average.toFixed(2)}
              </p>
              <p className='text-base text-start font-normal'>{displayData.overview}</p>
            </div>

            {/* Your Rating */}
            {isRated && (
              <div className='flex items-center justify-center bg-blue-500 w-[140px] h-[40px] rounded-sm px-4 py-2 mb-6 ml-8'>
                <p className='text-xs'>Your Rating: {displayData.rating}</p>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};
