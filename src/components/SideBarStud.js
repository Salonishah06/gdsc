import React, { useState } from 'react';
import { BsArrowLeftShort } from "react-icons/bs";
import { GiBookmarklet } from "react-icons/gi";
import { BsSearch,BsFillCalendarWeekFill} from "react-icons/bs";
import {AiTwotoneHome} from "react-icons/ai";
import { CgNotes,CgProfile} from "react-icons/cg";
import { TfiAnnouncement} from "react-icons/tfi";
import { IoLogOut} from "react-icons/io5";

const SideBar = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="justify-evenly">
      <div>
        <div className={`bg-white h-screen p-5 text-black pt-8 w-72 relative duration-300 ${open ? "w-72" : "w-20"}`}>
          <BsArrowLeftShort className={`bg-white text-black cursor-pointer text-3xl rounded-full absolute -right-3 top-9 border border-blue ${!open && "rotate-180"}`} onClick={() => setOpen(!open)} />
          <div className="inline-flex mb-6">
            <GiBookmarklet size="50" className={`w-10 cursor-pointer  ${!open && "p-0 object-cover "}`} />
            <h1 className={`text-white font-medium origin-left uppercase text-xl mt-1 ml-2 ${!open && "scale-0"}`}>Website name</h1>

          </div>
          {/* <div className={` flex items-center rounded-lg bg-[#d8d6d6] py-2  ${open ? "px-4":"px-2.5"}`}>
              <BsSearch className={`text-white text-lg float-left cursor-pointer mr-2 ${!open && "mr-0"}`}/>
              <input type="text" placeholder="Search"className={`text-base bg-transparent text-white w-full focus-outline-none ${!open && "hidden"}`}></input>
          </div> */}
          <div className="pt-2">
            <li className="text-gray-300 text-sm flex items-center gap-x-4 p-2 hover:bg- rounded-md mt-2">
              <span className="text-2xl block float-left">
                <AiTwotoneHome/>
              </span>
              <span className={`text-base  font-bold flex-1 ${!open && "hidden" }`}>Dashboard</span>
            </li>
          </div>
          <div className="pt-2">
            <li className="text-gray-300 text-sm flex items-center gap-x-4 p-2 hover:bg-[#71bbd4] rounded-md mt-2">
              <span className="text-2xl block float-left">
                <BsFillCalendarWeekFill/>
              </span>
              <span className={`text-base font-bold flex-1 ${!open && "hidden" }`}>Calendar</span>
            </li>
          </div>
          <div className="pt-2">
            <li className="text-gray-300 text-sm flex items-center gap-x-4 p-2 hover:bg-[#71bbd4] rounded-md mt-2">
              <span className="text-2xl block float-left">
                <CgNotes/>
              </span>
              <span className={`text-base font-bold flex-1 ${!open && "hidden" }`}>Notes</span>
            </li>
          </div>
          <div className="pt-2">
            <li className="text-gray-300 text-sm flex items-center gap-x-4 p-2 hover:bg-[#71bbd4] rounded-md mt-2">
              <span className="text-2xl block float-left">
                <TfiAnnouncement/>
              </span>
              <span className={`text-base font-bold flex-1 ${!open && "hidden" }`}>Announcements</span>
            </li>
          </div>
          <div className="pt-2">
            <li className="text-gray-300 text-sm flex items-center gap-x-4 p-2 hover:bg-[#71bbd4] rounded-md mt-2">
              <span className="text-2xl block float-left">
                <CgProfile/>
              </span>
              <span className={`text-base font-bold  flex-1 ${!open && "hidden" }`}>Profile</span>
            </li>
          </div>
          <div className="pt-2">
            <li className="text-gray-300 text-sm flex items-center gap-x-4 p-2 hover:bg-[#71bbd4] rounded-md mt-2">
              <span className="text-2xl block float-left">
                <IoLogOut/>
              </span>
              <span className={`text-base font-bold flex-1 ${!open && "hidden" }`}>LogOut</span>
            </li>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar;