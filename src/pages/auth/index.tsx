import {useMutation} from "@tanstack/react-query";
import {mutationLogin} from "./mutation";
import {useNavigate} from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {Check} from "lucide-react";

export const Auth = () => {
  const navigate = useNavigate();
  const {data, mutate, isSuccess} = useMutation({
    mutationKey: ["login"],
    mutationFn: mutationLogin,
  });

  const handleLogin = async () => {
    await mutate();
    if (isSuccess) {
      localStorage.setItem("guest_session_id", data.guest_session_id);
      navigate("/");
    }
  };

  return (
    // <div className='h-[655px] text-slate-200'>
    //   <div className='flex flex-col h-full items-center justify-center'>
    //     <h1 className='text-xl text-center font-semibold mb-6 xs:px-4'>
    //       Welcome! Login by registering as a guest below.
    //     </h1>
    //     <button className='bg-blue-800 px-4 py-2 rounded-lg w-[100px]' onClick={handleLogin}>
    //       <p className='text-lg text-slate-100'>Login</p>
    //     </button>
    //   </div>
    // </div>

    <div className='h-[655px]'>
      <div className='flex h-full items-center justify-center xxs:p-4 sm:p-0'>
        <Card className={cn("w-[380px]")}>
          <CardHeader>
            <CardTitle>Welcome!</CardTitle>
            <CardDescription>Login by registering as a guest below.</CardDescription>
          </CardHeader>
          <CardContent className='grid gap-4'></CardContent>
          <CardFooter>
            <Button className='w-full' onClick={handleLogin}>
              <Check className='mr-2 h-4 w-4' /> Login as Guest
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
