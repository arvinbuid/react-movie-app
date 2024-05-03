interface DisplayData {
  id: number;
  overview: string;
  title: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  release_date: number;
}

interface Props {
  data: DisplayData[];
}

export const Movies = (props: Props) => {
  const {data} = props;

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 mb-8'>
      {data.map((displayData: DisplayData) => (
        <div
          key={displayData.id}
          className='gap-6 bg-slate-700 text-slate-100 pv-4 rounded-md max-w-[360px] h-auto'
        >
          <img src={`https://image.tmdb.org/t/p/original/1E5baAaEse26fej7uHcjOgEE2t2.jpg`} />
          <div className='px-8 pb-5'>
            <h1 className='text-2xl mt-4 mb-6 font-bold'>{displayData.title}</h1>
            <p className='text-sm font-bold text-slate-400 mb-2'>{displayData.release_date}</p>
            <p className='text-md text-start'>{displayData.overview}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
