import {Link} from "react-router-dom";
import {FaHome} from "react-icons/fa";
import {FaStar} from "react-icons/fa";
import {CiLogin} from "react-icons/ci";

export const Navbar = () => {
  return (
    <nav className='fixed top-0 left-0 right-0 h-[60px] bg-slate-900'>
      <div className='w-full h-full'>
        <ul className='flex gap-6 items-center m-auto h-full max-w-[760px]'>
          {/* left */}
          <div className='flex flex-1 gap-6'>
            {/* Home */}
            <li>
              <Link to={"/"}>
                <h2 className='text-slate-100 text-xl'>
                  <FaHome />
                </h2>
              </Link>
            </li>
            {/* Rated */}
            <li>
              <Link to={"/rated"}>
                <h2 className='text-slate-100 text-xl'>
                  <FaStar />
                </h2>
              </Link>
            </li>
          </div>

          {/* right */}
          <div className='flex h-full px-6 items-center justify-center'>
            {/* Auth */}
            <li>
              <Link to={"/auth"}>
                <h2 className='text-slate-100 text-xl font-bold'>
                  <CiLogin />
                </h2>
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};
