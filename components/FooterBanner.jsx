import React from "react";
import Link from "next/link";
import TimeAgo from "react-timeago";
import { urlFor } from "../lib/client";

const FooterBanner = ({
  upcomingevent: {
    image,
    title,
    hint,
    slug,
    author,
    publishedAt,
  },
}) => {
  return (
    <div className="bg-red-600 p-4  mt-4 mb-4 rounded-lg  text-white ">
      <div className="flex flex-col items-center lg:flex-row">
        <h1 className="text-2xl font-semibold lg:font-bold lg:border-r-4 mr-1 lg:h-72 lg:text-3xl mx-4 lg:w-48">
          {title}
        </h1>
        <div className="items-center flex flex-col">
          <h3 className="text-xl mt-2 mx-4 lg:text-4xl  lg:w-[600px]">
            {hint}
          </h3>
          <Link href="https://xvaaa.com/fullpage.php?section=YllixDirect&pub=398782&ga=a">
            <button
              type="button"
              className="border-2 px-2 mt-2 lg:my-6 rounded-full bg-soil "
            >
              View Event
            </button>
          </Link>

          <div className="my-3 flex gap-3 items-center">
            <p>Posted: </p>
            <TimeAgo
              date={publishedAt}
              className="text-lg text-white font-semibold font-mono "
            />
          </div>

          <div className="hidden my-3 lg:flex gap-3 items-center">
            <p>Sponsered by: {author}</p>
          </div>
        </div>
        <Link href={`/upcoming/${slug.current}`}>
          <img
            src={urlFor(image && image[0])}
            width={550}
            className=" product-image"
          />
        </Link>
      </div>
    </div>
  );
};

export default FooterBanner;
