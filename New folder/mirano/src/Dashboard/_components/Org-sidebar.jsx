"client"
import logo from './sidebar/logo.png';
// import { Image } from "lucide-react";
// import { Poppins } from  "@expo-google-fonts/poppins";
// const font = Poppins ({
//     subsets: ["latin"],
//     weight:  ["600"],
// });
import { Link } from "react-router-dom";

export const OrgSidebar = () => {
return (
    <div className="hidden lg:flex flex-col space-y-6   w-[206px]  pl-5  ">
               <Link to="/"></Link>
               <div className="flex items-center gap-x-2">
                <img src={logo} alt="Logo-MiranoBoards" className="h-12 w-16" />
              <span className="font-semibold text-2xl">Mirano </span>
                </div>
                <div className="">
                    <button className='pt-3 hover:underline'>Recent Boards</button>
                    <button className='pt-6 hover:underline'>Stared Boards</button>
                </div>
                <div className="">
                    <button className='pt-9 hover:underline'>Boards in this Team</button>
                    <button className='pt-9 hover:underline text-blue-600'>Miroverse</button>
                </div>
                </div>
);
};