import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { client, urlFor } from "../../lib/client";
import { PortableText } from "@portabletext/react";
import TimeAgo from "react-timeago";
import { Jobs } from "../../components";
import Head from "next/head";
import Link from "next/link";

const PostDetails = ({ jobposts, jobpost }) => {
  const { image, title, author, posturl, category, publishedAt, body } =
    jobpost;
  const [index, setIndex] = useState(0);

  const PostComponents = {
    types: {
      image: ({ value }) => {
        return (
          <img className=" w-[500px] relative" alt="pics" src={urlFor(value)} />
        );
      },
    },
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="keywords"
          content="phones, techno, laptops, cars, rwenzori tv live, free to air"
        />
        <meta name="description" content={`${title}, posted by ${author}`} />
        <meta property="og:title" content={title} />
        <meta property="og:image" href={`${urlFor(image && image[index])}`} />
        <link rel="icon" href={`${urlFor(image && image[index])}`} />
      </Head>
      <div>
        <div className="flex flex-col md:px-48 p-4 max-w-full">
          <div>
            <p className="bg-twitter w-fit rounded-full px-1  text-white font-serif italic font-light text-sm">
              {category}
            </p>
            <h1 className="text-twitter font-semibold text-2xl ">{title}</h1>
            <p className="text-soil font-mono font-light text-base">
              by {author}
            </p>
            <div className="mb-3">
              <TimeAgo
                date={publishedAt}
                className="text-sm text-soil font-mono font-light"
              />
            </div>

            <div className="image-container">
              <img
                src={urlFor(image && image[0])}
                width={800}
                className=" product-image"
              />
            </div>
            <div className="small-images-container">
              {image?.map((item, i) => (
                <img
                  key={i}
                  src={urlFor(item)}
                  className={
                    i === index ? "small-image selected-image" : "small-image"
                  }
                  onMouseEnter={() => setIndex(i)}
                />
              ))}
            </div>
          </div>

          <div className="product-detail-desc">
            <div className="flex flex-col mt-3">
              <PortableText value={body} components={PostComponents} />
            </div>
            <a href="https://yllix.com/publishers/398782" target="_blank">
              <img
                src="//ylx-aff.advertica-cdn.com/pub_zecyzp.png"
                width="300"
                height="250"
                border="0"
                alt="Monetize your website traffic with yX Media"
                title="Monetize your website traffic with yX Media"
              />
            </a>
            <Link href={`${posturl}`} target="_blank">
              <p className="text-gray-500 hover:translate-x-8 text-2xl font-bold bg-green-500 rounded-full w-fit p-3">
                Apply Now
              </p>
            </Link>
          </div>
        </div>
        <div className=" ">
          <div className="maylike-products-wrapper">
            <h2 className="-mb-36">Related Posts</h2>
            <div className="flex flex-wrap justify-center p-3">
              {jobposts.map((item) => (
                <Jobs key={item._id} jobpost={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "jobposts"] {
    slug {
      current
    }
  }
  `;

  const jobposts = await client.fetch(query);

  const paths = jobposts.map((jobpost) => ({
    params: {
      slug: jobpost.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "jobposts" && slug.current == '${slug}'][0]`;
  const jobpostsQuery = '*[_type == "jobposts"]';

  const jobpost = await client.fetch(query);
  const jobposts = await client.fetch(jobpostsQuery);

  return {
    props: { jobposts, jobpost },
  };
};

export default PostDetails;
