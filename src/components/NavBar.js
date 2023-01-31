import React from 'react';
import { BsSearch} from "react-icons/bs";

const NavBar = () => {
    return (
        <div className="flex justify-between bg-blue">
            <div className="bg-[#D9D9D9] w-1/3 ml-12 mt-1 h-10 rounded-full ">
            <BsSearch className="mt-2 ml-1"/>
                {/* <input
                    placeholder="Search something here..."
                    className=" bg-inherit text-black font-semibold mb-6"
                /> */}
            </div>
            <div className="flex w-1/5 justify-between mr-10">
                <div className="bg-[#D9D9D9] w-12 h-12 rounded-full"></div>
                <div className="bg-[#D9D9D9] w-12 h-12 rounded-full"></div>
                <div className="bg-[#D9D9D9] w-12 h-12 rounded-full"></div>

                <div className="text-sm font-semibold mt-3 ml-1">Student</div>
            </div>
            
        </div>
            )
}

            export default NavBar;