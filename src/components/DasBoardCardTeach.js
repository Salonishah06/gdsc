import React from 'react';
import { TbMathSymbols} from "react-icons/tb";
const DashBoardCardTeach = () => {
  return (
    
        <div className="w-1/5 h-11/12 rounded-2xl mt-5 bg-[#D4D9F6]">
            <TbMathSymbols  size="45"className="px-1"/>
              <div className="text-black text-left text-medium  font-bold px-2">
                Maths
              </div>
              
            
            <div className="text-left font-normal text-black text-lg px-1">
              No.of Students
            </div>
            <div className="text-left font-normal text-black text-medium px-1">
              Batch Description
            </div>
            <div className="text-left font-thin text-black text-medium mx-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Curabitur
              imperdiet ante ut neque pretium tempus.
            </div>
            <div className="flex justify-between">
              
                <button className="bg-blue text-white text-medium text-center w-16 h-5 rounded-lg my-2 mx-1 ">View</button>
            
              
            </div>
          </div>
    
  )
}
export default DashBoardCardTeach;
