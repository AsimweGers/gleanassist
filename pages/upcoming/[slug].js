import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { client, urlFor } from "../../lib/client";
import { FooterBanner } from "../../components";
import { PortableText } from "@portabletext/react";
import TimeAgo from "react-timeago";
import Head from "next/head";

const PostDetails = ({ upcomingevents, upcomingevent }) => {
  const { image, title, hint, author, category, publishedAt, body } =
    upcomingevent;
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
          content="kasese upcoming, kasese music events, mbarara festival events, kampala festival events, rwenzori tv live, free to air"
        />
        <meta name="description" content={`${hint}`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={`${hint}`} />
        <meta property="og:image" href={`${urlFor(image && image[index])}`} />
        <link rel="icon" href={`${urlFor(image && image[index])}`} />
      </Head>
      <div>
        <div className="flex flex-col md:px-28 lg:px-48 p-2 max-w-full">
          <div>
            <p className="bg-twitter w-fit rounded-full px-1  text-white font-serif italic font-light text-sm">
              {category}
            </p>
            <h1 className="text-twitter font-semibold text-2xl ">{title}</h1>
            <p className="text-soil font-mono font-light text-base">
              by {author}
            </p>
            <div className="mb-2">
              <TimeAgo
                date={publishedAt}
                className="text-sm text-soil font-mono font-light "
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
            <div className="flex flex-col mt-4">
              <PortableText value={body} components={PostComponents} />
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
        <div className=" ">
          <div className="maylike-products-wrapper">
            <h2 className="-mb-36">Related Posts</h2>
            <div className="">
              <div className="flex flex-wrap p-4">
                {upcomingevents.map((item) => (
                  <FooterBanner key={item._id} upcomingevent={item} />
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
  const query = `*[_type == "upcomingevents"] {
    slug {
      current
    }
  }
  `;

  const upcomingevents = await client.fetch(query);

  const paths = upcomingevents.map((upcomingevent) => ({
    params: {
      slug: upcomingevent.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "upcomingevents" && slug.current == '${slug}'][0]`;
  const upcomingeventsQuery = '*[_type == "upcomingevents"]';

  const upcomingevent = await client.fetch(query);
  const upcomingevents = await client.fetch(upcomingeventsQuery);

  return {
    props: { upcomingevents, upcomingevent },
  };
};

export default PostDetails;
