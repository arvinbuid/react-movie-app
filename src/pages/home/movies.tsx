import {ChangeEvent, useState} from "react";
import {Link} from "react-router-dom";
import {Star} from "lucide-react";

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
  const [rating, setRating] = useState<number>(0);
  const {data} = props;

  const handleRatingChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(e.target.value));
    console.log();
  };

  const handleSubmitRating = (e: any) => {
    e.preventDefault();
    console.log("Rating: ", rating);
  };

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 mb-8'>
      {data.map((displayData: DisplayData) => (
        <div
          key={displayData.id}
          className='gap-6 bg-slate-700 text-slate-100 pv-4 rounded-md max-w-[360px] h-auto'
        >
          <Link to={`/movie/${displayData.id}`}>
            <div className='cursor-pointer'>
              {/* <img src={`https://image.tmdb.org/t/p/original/1E5baAaEse26fej7uHcjOgEE2t2.jpg`} /> */}
              <img src={`https://image.tmdb.org/t/p/original/${displayData.poster_path}`} />
            </div>
          </Link>

          <div className='px-8 pb-5'>
            <h1 className='text-2xl mt-4 mb-2 font-bold'>{displayData.title}</h1>
            <p className='text-xs font-semibold text-slate-400 mb-[3px]'>
              Release Date: {displayData.release_date}
            </p>
            <p className='text-xs font-semibold text-slate-400 text-start mb-5'>
              Rating: {displayData.vote_average.toFixed(2)}
            </p>
            <p className='text-mds text-start'>{displayData.overview}</p>
          </div>

          {/* Rate Section */}
          <div className='flex flex-col px-8 pb-4'>
            <div className='flex items-center h-[35px]'>
              <input
                type='number'
                min='0'
                max='10'
                step='0.5'
                className='w-[60px] h-[34px] text-slate-700 text-md font-bold text-center outline-none'
                onChange={handleRatingChange}
              />
              <div className='w-[82px] bg-blue-950 h-full flex items-center justify-center cursor-pointer '>
                <button
                  onClick={handleSubmitRating}
                  className='flex items-center justify-center h-full px-2'
                >
                  <p className='text-sm font-semibold'>Rate</p>
                  <Star className='text-blue-300 h-[14px]'></Star>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
