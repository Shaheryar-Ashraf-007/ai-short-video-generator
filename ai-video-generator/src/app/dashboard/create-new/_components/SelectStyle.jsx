import React, { useState } from "react";
import Image from "next/image";
import real from "../../../../../public/real.jpg"
import cartoon from "../../../../../public/cartoon.jpg";
import comic from "../../../../../public/comic.jpg";
import watercolor from "../../../../../public/watercolor.jpg";
import gta from "../../../../../public/gta.jpg";

const SelectStyle = ({onUserSelect}) => {
  const StyleOptions = [
    {
      name: "Realistic",
      image: real, 
    },
    {
      name: "Cartoon",
      image: cartoon, 
    },
    {
      name: "Comics",
      image: comic,
    },
    {
      name: "Water Colors",
      image: watercolor, 
    },
    {
      name: "GTA",
      image: gta, 
    },
  ];

  const [seletctedOptions, setSelectedOptions] = useState()
  
  return (
    <div>
      <h1 className='text-primary text-xl md:text-2xl font-bold mt-4'>Style</h1>
      <p className='font-medium text-gray-500'>Select Your Video Style</p>
      <div className="flex flex-wrap gap-2 items-center justify-center mt-7 ">
        {StyleOptions.map((item, index) => (
          <div key={index} className={`m-2 hover:scale-105 translate-all cursor-pointer rounded-xl
          ${seletctedOptions == item.name && 'border-4 border-primary' }`}>
            <Image src={item.image} alt={item.name}
            className="h-40 w-full object-cover rounded-lg"
            onClick={()=>{setSelectedOptions(item.name)
                onUserSelect('imageStyle', item.name)
            }} />
            <h2 className="text-center font-semibold">{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};


export default SelectStyle;