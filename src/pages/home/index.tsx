import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {useQuery} from "@tanstack/react-query";
import {fetchMovies, fetchTvShows} from "./query";
import {Movies} from "./movies";
import {TvShows} from "./tvshows";

export const Home = () => {
  const {
    data: movieData,
    isLoading: isMovieLoading,
    error,
  } = useQuery({
    queryKey: ["movies"],
    queryFn: fetchMovies,
  });

  const {data: tvShowData, isLoading: isTvShowLoading} = useQuery({
    queryKey: ["tvshows"],
    queryFn: fetchTvShows,
  });

  if (error) {
    return (
      <div className='h-[655px] flex items-center justify-center'>
        <h1 className='text-3xl text-red-600 font-semibold'>Something went wrong.</h1>
      </div>
    );
  }

  return (
    <div className='h-auto full flex justify-center bg-slate-800'>
      <Tabs defaultValue='movies' className='pt-8'>
        <div className='w-full flex justify-center'>
          <TabsList>
            <TabsTrigger value='movies'>Movies</TabsTrigger>
            <TabsTrigger value='tv-shows'>TV Shows</TabsTrigger>
          </TabsList>
        </div>

        {isMovieLoading ? (
          <div>
            <h1>Loading...</h1>
          </div>
        ) : (
          <TabsContent value='movies'>
            <div className='mt-8'>
              <Movies data={movieData.results} />
            </div>
          </TabsContent>
        )}

        {isTvShowLoading ? (
          <div>
            <h1>Loading...</h1>
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
