import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {useQuery} from "@tanstack/react-query";
import {fetchMovies, fetchTvShows} from "./query";
import {Movies} from "./movies";
import {TvShows} from "./tvshows";
import {Navigate} from "react-router-dom";

export const Home = () => {
  // fetch movies
  const {
    data: movieData,
    isLoading: isMovieLoading,
    isError: isMovieError,
  } = useQuery({
    queryKey: ["movies"],
    queryFn: fetchMovies,
  });

  // fetch tvshows
  const {
    data: tvShowData,
    isLoading: isTvShowLoading,
    isError: isTvShowError,
  } = useQuery({
    queryKey: ["tvshows"],
    queryFn: fetchTvShows,
  });

  // show error if there is fetch issue
  if (isMovieError || isTvShowError) {
    return (
      <div className='h-[70vh] full flex items-center justify-center'>
        <h1 className='text-3xl text-red-600 font-semibold'>Something went wrong.</h1>
      </div>
    );
  }

  // if guest is not logged in
  if (localStorage.getItem("guest_session_id") === null) {
    return <Navigate to='/auth' />;
  }

  return (
    <div className='h-auto flex justify-center'>
      <Tabs defaultValue='movies' className='pt-8'>
        <div className='w-full flex justify-center'>
          <TabsList>
            <TabsTrigger value='movies'>Movies</TabsTrigger>
            <TabsTrigger value='tv-shows'>TV Shows</TabsTrigger>
          </TabsList>
        </div>

        {/* Movies Component */}
        {isMovieLoading ? (
          <div className='h-[60vh] w-full flex items-center justify-center '>
            <h1 className='text-slate-100 text-3xl font-semibold'>Loading...</h1>
          </div>
        ) : (
          <TabsContent value='movies'>
            <div className='mt-8'>
              <Movies data={movieData.results} />
            </div>
          </TabsContent>
        )}

        {/* TV Shows Component */}
        {isTvShowLoading ? (
          <div className='h-[60vh] w-full flex items-center justify-center '>
            <h1 className='text-slate-100 text-3xl font-semibold'>Loading...</h1>
          </div>
        ) : (
          <TabsContent value='tv-shows'>
            <div className='mt-8'>
              <TvShows data={tvShowData.results} />
            </div>
          </TabsContent>
        )}
      </Tabs>
    </div>
  );
};
