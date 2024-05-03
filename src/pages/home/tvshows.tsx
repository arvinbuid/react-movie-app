interface DisplayData {
  id: number;
  overview: string;
  first_air_date: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  release_date: number;
}

interface Props {
  data: DisplayData[];
}

export const TvShows = (props: Props) => {
  const {data} = props;

  return (
    <div className='grid grid-cols-3 gap-6 px-6 mb-8'>
      {data.map((displayData: DisplayData) => (
        <div
          key={displayData.id}
          className='gap-6 bg-slate-700 text-slate-100 pv-4 rounded-md max-w-[360px] h-auto'
        >
          {/* <img src={`https://image.tmdb.org/t/p/original/1E5baAaEse26fej7uHcjOgEE2t2.jpg`} /> */}
          <img src={`https://image.tmdb.org/t/p/original/${displayData.poster_path}`} />
          <div className='px-8 pb-5'>
            <h1 className='text-2xl mt-4 mb-2 font-bold'>{displayData.name}</h1>
            <p className='text-xs font-semibold text-slate-400 mb-[3px]'>
              First Air Date: {displayData.first_air_date}
            </p>
            <p className='text-xs font-semibold text-slate-400 text-start mb-5'>
              Rating: {displayData.vote_average.toFixed(2)}
            </p>
            <p className='text-mds text-start'>{displayData.overview}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
