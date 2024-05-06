import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {useQuery} from "@tanstack/react-query";
import {fetchRatedMovies} from "./query";
import {Movies} from "../home/movies";

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
    <div className='w-screen h-screen flex justify-start mt-6'>
      <Tabs defaultValue='movies' className='w-[400px]'>
        <TabsList>
          <TabsTrigger value='movies'>Movies</TabsTrigger>
          <TabsTrigger value='tvshows'>TV Shows</TabsTrigger>
        </TabsList>

        {/* rated movies */}
        <TabsContent value='movies'>
          <div className='mt-8'>
            <Movies data={ratedMoviesData.results} isRated />
          </div>
        </TabsContent>

        <TabsContent value='tvshows'></TabsContent>
      </Tabs>
    </div>
  );
};
