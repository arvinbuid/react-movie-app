import {Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs"; // TabsContent
import {useState} from "react";

export enum DisplayType {
  Movies = "movies",
  TvShows = "tvshow",
}

export const Home = () => {
  const [displayType, setDisplayType] = useState<DisplayType>(DisplayType.Movies);
  return (
    <div className='h-[655px] bg-slate-800'>
      <Tabs defaultValue='account' className='flex justify-center pt-8'>
        <TabsList>
          <TabsTrigger value='account'>Movies</TabsTrigger>
          <TabsTrigger value='password'>TV Shows</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className='mt-4'>
        {/* {displayType === DisplayType.Movies ? <ColumnDisplay /> : <Test />} */}
      </div>
    </div>
  );
};
