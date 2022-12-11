import React from "react";
import Link from "next/link";
import TimeAgo from "react-timeago";
import { urlFor } from "../lib/client";

const Jobs = ({ jobpost: { image, title, slug, publishedAt } }) => {
  return (
    <div className="w-fit px-1 my-2 border-2 py-1 m-1 bg-twitter rounded-lg text-gray-200 p-2">
      <Link href={`/jobs/${slug.current}`}>
        <div className="flex items-center gap-2">
          <img
            src={urlFor(image && image[0])}
            className="items-center bg-soil w-[150px] rounded-xl"
          />
          <div>
            <p className="w-[180px]">{title}</p>
            <div className="my-3 flex gap-1 items-center">
              <p className="text-sm text-gray-300 font-semibold font-mono ">
                Posted:{" "}
              </p>
              <TimeAgo date={publishedAt} className="text-sm text-gray-400 " />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Jobs;
