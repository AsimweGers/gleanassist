import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { client, urlFor } from "../../lib/client";
import { Blog } from "../../components";
import { PortableText } from "@portabletext/react";
import TimeAgo from "react-timeago";
import Head from "next/head";
import ReactPlayer from "react-player";

const PostDetails = ({ latestposts, latestpost }) => {
  const { image, title, posturl, author, category, publishedAt, body } =
    latestpost;
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
      <div className="flex flex-col lg:px-56 md:px-20 pt-6 px-3 max-w-full">
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
          <div className="flex flex-col">
            <PortableText value={body} components={PostComponents} />
          </div>
          <div style={{ position: "relative", padding: "50%" }}>
            <ReactPlayer
              style={{
                position: "absolute",
                top: "10px",
                left: "-4px",
              }}
              url={`${posturl}`}
              width="100%"
              height="60%"
              controls={true}
            />
          </div>
          <a href="https://yllix.com/publishers/398782" target="_blank">
            <img
              src="//ylx-aff.advertica-cdn.com/pub_7nc2s6.png"
              width="300"
              height="250"
              border="0"
              alt="yX Media - Monetize your website traffic with us"
              title="yX Media - Monetize your website traffic with us"
            />
          </a>
          {/* <p className="price">comments</p>
          <div className="reviews">
            <div className="flex">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20+)</p>
          </div> */}
        </div>
      </div>

      <div className="items-center flex flex-col gap-2 p-2 ">
        <h2 className="text-twitter text-2xl font-semibold ">Related Posts</h2>

        <div className="flex flex-wrap gap-3">
          {latestposts.map((item) => (
            <Blog key={item._id} latestpost={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "latestposts"] {
    slug {
      current
    }
  }
  `;

  const latestposts = await client.fetch(query);

  const paths = latestposts.map((latestpost) => ({
    params: {
      slug: latestpost.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "latestposts" && slug.current == '${slug}'][0]`;
  const latestpostsQuery = '*[_type == "latestposts"]';

  const latestpost = await client.fetch(query);
  const latestposts = await client.fetch(latestpostsQuery);

  return {
    props: { latestposts, latestpost },
  };
};

export default PostDetails;
