import React from "react";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
function Leftright() {
  return (
    <>
      <div className="flex items-center gap-2">
        <span className="bg-[#f3f3f3] p-2 rounded-sm">
          <AiOutlineLeft className="text-title" />
        </span>
        <span className="bg-[#f3f3f3] p-2 rounded-sm">
          <AiOutlineRight className="text-title" />
        </span>
      </div>
    </>
  );
}

export default Leftright;
