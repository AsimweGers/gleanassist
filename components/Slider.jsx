import React, { useState, useEffect } from "react";
import { urlFor } from "../lib/client";
import Link from "next/link";

const Slider = ({ navPage: { name, image, hint,link } }) => {
  return (
    <div className="flex flex-row gap-2 overflow-hidden">
      <div className="bg-gray-200 border-r-2">
        <img src={urlFor(image && image[0])} width={500} className="w-72" />
        <Link href={link}>
          <h1 className="p-1 border-2 hover:bg-green bg-gray-400 border-twitter rounded-lg w-fit mt-1 ml-1">
            {name}
          </h1>
          <p className="p-1">{hint}</p>
        </Link>
      </div>
    </div>
  );
};

export default Slider;
