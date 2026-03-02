import React from "react";
import Plant from "./Plant";
import Sidephoto from "./Sidephoto";

const Headercontent = () => {
  return (
    <div className="flex justify-center px-4">
      <div className="bg-[#bcecec] rounded-2xl w-full max-w-350 min-h-[80vh] flex flex-col lg:flex-row items-center justify-between p-8 lg:p-16">
        <Plant />
        <Sidephoto />
      </div>
    </div>
  );
};

export default Headercontent;