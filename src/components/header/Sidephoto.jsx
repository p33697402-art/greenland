import React from "react";
import plantImage from "../../assets/img/plant.png";

const Sidephoto = () => {
  return (
    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0">
      <div className="relative w-75 h-100 sm:w-100 lg:w-125 aspect-square">
        <div className="w-full h-full rounded-full bg-black"></div>
        <img
          src={plantImage}
          alt="plant"
          className="absolute inset-0 w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default Sidephoto;