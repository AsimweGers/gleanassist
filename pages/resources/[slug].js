import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { client, urlFor } from "../../lib/client";
import { PortableText } from "@portabletext/react";
import TimeAgo from "react-timeago";
import { Resources } from "../../components";
import Head from "next/head";

const PostDetails = ({ resources, resource }) => {
  const { image, title, author, category, publishedAt, body } =
    resource;
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
        <meta name="viewport" content="initial-scale=1,width=device-width" />
        <meta charset="utf-8" />
        <meta name="theme-color" content="#000000" />
        <meta name="msvalidate.01" content="636CB3ADD97C4DABBF11D6B5656DB622" />
        <link rel="manifest" href="/manifest.json" />
        <link href="/static/css/2.a844480a.chunk.css" rel="stylesheet" />
        <link href="/static/css/main.283a044d.chunk.css" rel="stylesheet" />
      </Head>
      <div>
        <div className="flex flex-col md:px-28 p-2 max-w-full">
          <div>
            <p className="bg-twitter w-fit rounded-full px-1  text-white font-serif italic font-light text-sm">
              {category}
            </p>
            <h1 className="text-twitter font-semibold text-2xl ">{title}</h1>
            <p className="text-soil font-mono font-light text-base">
              by {author}
            </p>
            <div>
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
        <div className=" ">
          <div className="maylike-products-wrapper">
            <h2 className="-mb-36">Related Posts</h2>
            <div className="marquee">
              <div className="maylike-products-container track">
                {resources.map((item) => (
                  <Resources key={item._id} resource={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "resources"] {
    slug {
      current
    }
  }
  `;

  const resources = await client.fetch(query);

  const paths = resources.map((resource) => ({
    params: {
      slug: resource.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "resources" && slug.current == '${slug}'][0]`;
  const resourcesQuery = '*[_type == "resources"]';

  const resource = await client.fetch(query);
  const resources = await client.fetch(resourcesQuery);

  return {
    props: { resources, resource },
  };
};

export default PostDetails;
