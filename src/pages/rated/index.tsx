import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {useQuery} from "@tanstack/react-query";
import {fetchRatedMovies} from "./query";
import {RatedMovies} from "./ratedMovies";

export const Rated = () => {
  // fetch rated movie
  const {
    data: ratedMoviesData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["ratedMovies"],
    queryFn: fetchRatedMovies,
  });

  // check if rated movies is loading
  if (isLoading) {
    return (
      <div>
        <h1 className='text-3xl text-slate-200 text-center font-semibold'>Loading...</h1>
      </div>
    );
  }

  // check if there is an error
  if (isError) {
    return (
      <div>
        <h1 className='text-3xl text-slate-200 text-center font-semibold'>Something went wrong.</h1>
      </div>
    );
  }

  return (
    <div>
      <div className='w-full h-[45px] flex justify-center mt-8'>
        <h1 className='text-4xl font-bold text-slate-100'>Your Rating</h1>
      </div>

      <div className='h-auto flex justify-center'>
        <Tabs defaultValue='movies' className='pt-6'>
          <TabsList>
            <TabsTrigger value='movies'>Movies</TabsTrigger>
            <TabsTrigger value='tvshows'>TV Shows</TabsTrigger>
          </TabsList>

          {/* rated movies */}
          <TabsContent value='movies'>
            <div className='mt-8'>
              <RatedMovies data={ratedMoviesData.results} isRated />
            </div>
          </TabsContent>

          {/* rated tv shows */}
          <TabsContent value='tvshows'></TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
