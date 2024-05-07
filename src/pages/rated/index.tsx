import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {useQuery} from "@tanstack/react-query";
import {fetchRatedMovies, fetchRatedTvShows} from "./query";
import {RatedMovies} from "./ratedMovies";
import {useState} from "react";
import {RatedTvShows} from "./ratedTvShows";

export const Rated = () => {
  const [displayDataType, setDisplayDataType] = useState("movies");

  // fetch rated movie
  const {
    data: ratedMoviesData,
    isLoading: isLoadingRatedMovie,
    isError: isErrorRatedMovie,
  } = useQuery({
    queryKey: ["ratedMovies"],
    queryFn: fetchRatedMovies,
  });

  // fetch rated tvshows
  const {
    data: ratedTvShowsData,
    isLoading: isLoadingTvShows,
    isError: isErrorTvShows,
  } = useQuery({
    queryKey: ["ratedTvShows"],
    queryFn: fetchRatedTvShows,
  });

  // check if rated movies is loading
  if (isLoadingRatedMovie || isLoadingTvShows) {
    return (
      <div>
        <h1 className='text-3xl text-slate-200 text-center font-semibold'>Loading...</h1>
      </div>
    );
  }

  // check if there is an error
  if (isErrorRatedMovie || isErrorTvShows) {
    return (
      <div>
        <h1 className='text-3xl text-slate-200 text-center font-semibold'>Something went wrong.</h1>
      </div>
    );
  }

  const handleHeaderMoviesText = () => {
    setDisplayDataType("movies");
  };

  const handleHeaderTvShowText = () => {
    setDisplayDataType("tvshows");
  };

  return (
    <div>
      <div className='w-full h-[45px] flex justify-center mt-8'>
        {/* Header Text*/}
        <h1 className='text-4xl font-bold text-slate-100'>
          Rated {displayDataType === "movies" ? "Movies" : "TV Show"}
        </h1>
      </div>

      <div className='h-auto flex justify-center'>
        <Tabs defaultValue='movies' className='pt-6'>
          <TabsList>
            <TabsTrigger value='movies' onClick={handleHeaderMoviesText}>
              Movies
            </TabsTrigger>
            <TabsTrigger value='tvshows' onClick={handleHeaderTvShowText}>
              TV Shows
            </TabsTrigger>
          </TabsList>

          {/* rated movies */}
          <TabsContent value='movies'>
            <div className='mt-8'>
              <RatedMovies data={ratedMoviesData.results} isRated />
            </div>
          </TabsContent>

          {/* rated tv shows */}
          <TabsContent value='tvshows'>
            <div className='mt-8'>
              <RatedTvShows data={ratedTvShowsData.results} isRated />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
