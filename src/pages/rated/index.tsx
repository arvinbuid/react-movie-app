import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {useQuery} from "@tanstack/react-query";
import {fetchRatedMovies} from "./query";
import {RatedMovies} from "./ratedMovies";
import {useState} from "react";

export const Rated = () => {
  const [displayDataType, setDisplayDataType] = useState("movies");
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

  const handleHeaderMoviesText = () => {
    setDisplayDataType("movies");
  };

  const handleHeaderTvShowText = () => {
    setDisplayDataType("tvshows");
  };

  return (
    <div>
      <div className='w-full h-[45px] flex justify-center mt-8'>
        {/* Header text either movies or tvshow */}
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
          <TabsContent value='tvshows'></TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
