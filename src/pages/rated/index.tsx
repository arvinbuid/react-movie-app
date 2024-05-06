import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";

export const Rated = () => {
  return (
    <div className='w-screen h-screen flex justify-start mt-6'>
      <Tabs defaultValue='movies' className='w-[400px]'>
        <TabsList>
          <TabsTrigger value='movies'>Movies</TabsTrigger>
          <TabsTrigger value='tvshows'>TV Shows</TabsTrigger>
        </TabsList>
        {/* rated movies */}
        <TabsContent value='movies'>
          <div className=' w-screen h-[500px]'>
            <h1 className='text-4xl text-slate-100 mt-[28px] mb-[6px]'>Rated Movies</h1>
          </div>

          {/* rated tvshows */}
        </TabsContent>
        <TabsContent value='tvshows'>
          <div className=' w-screen h-[500px]'>
            <h1 className='text-4xl text-slate-100 mt-[28px] mb-[6px]'>Rated TV Shows</h1>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
