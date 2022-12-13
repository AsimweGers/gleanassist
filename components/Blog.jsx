import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";
import TimeAgo from "react-timeago";

const Post = ({
  latestpost: {
    image,
    title,
    slug,
    author,
    publishedAt,
  },
}) => {
  return (
    <div className="px-1 my-2 border-2 pt-1 hover:border-none">
      <Link href={`/blogposts/${slug.current}`}>
        <div className="product-card">
          <img
            src={urlFor(image && image[0])}
            width={400}
            className="product-image"
          />
          <div className="border-t-2 mt-1 max-w-[400px] ">
            <p className="text-twitter font-semibold text-lg">{title}</p>
            <div className="flex justify-between items-center">
              <div className="flex gap-1 py-1">
                <p className="text-base font-light text-soil">{author}</p>
              </div>
              <div>
                <TimeAgo
                  date={publishedAt}
                  className="text-sm text-soil font-mono font-light"
                />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Post;
