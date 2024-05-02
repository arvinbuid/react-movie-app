import {useMutation} from "@tanstack/react-query";
import {mutationLogin} from "./mutation";
import {useNavigate} from "react-router-dom";

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
    <div className='h-[655px] text-slate-800'>
      <div className='flex flex-col h-full items-center justify-center'>
        <h1 className='text-xl text-center font-semibold mb-6 xs:px-4'>
          Welcome! Login by registering as a guest below.
        </h1>
        <button className='bg-blue-800 px-4 py-2 rounded-lg w-[100px]' onClick={handleLogin}>
          <p className='text-lg text-slate-100'>Login</p>
        </button>
      </div>
    </div>
  );
};
