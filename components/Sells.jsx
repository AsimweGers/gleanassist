import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";

const Sells = ({ sellpost: { image, title, slug, price } }) => {
  return (
    <div className="flex my-2 hover:border-2 w-fit mx-1 bg-gray-200">
      <Link href={`/sells/${slug.current}`}>
        <div className="my-2 px-2">
          <img
            src={urlFor(image && image[0])}
            className="bg-soil rounded-md w-36 lg:w-72 md:w-48"
          />
          <p className="text-twitter font-semibold text-base md:text-lg w-36 md:w-56 lg:w-72 ">
            {title}
          </p>
          <p className="text-twitter font-semibold text-sm md:text-base">
            UGX {""}
            {price}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Sells;
