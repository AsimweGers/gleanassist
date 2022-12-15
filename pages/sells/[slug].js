import React, { useState } from "react";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import { client, urlFor } from "../../lib/client";
import { useStateContext } from "../../context/StateContext";
import { Sells } from "../../components";
import TimeAgo from "react-timeago";
import { PortableText } from "@portabletext/react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Head from "next/head";
import Link from "next/link";

const PostComponents = {
  types: {
    image: ({ value }) => {
      return (
        <img className=" w-[500px] relative" alt="pics" src={urlFor(value)} />
      );
    },
  },
};

var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const options = {
  margin: 30,
  responsiveClass: true,
  nav: true,
  dots: true,
  autoplay: true,
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 2,
    },
    700: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
};

const SellsDetails = ({ sellposts, sellpost }) => {
  const { image, category, price, title, body, author, publishedAt } = sellpost;
  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

  const handleBuyNow = () => {
    onAdd(sellpost, qty);

    setShowCart(true);
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="keywords"
          content="phones, techno, laptops, cars, rwenzori tv live, free to air"
        />
        <meta
          name="description"
          content={`${title} at UGX ${price}, The seller is ${author}`}
        />
        <meta property="og:title" content={title} />
        <meta property="og:image" href={`${urlFor(image && image[index])}`} />
        <link rel="icon" href={`${urlFor(image && image[index])}`} />
      </Head>
      <div className=" w-full">
        <div className="lg:px-56 md:px-20 px-4 pt-4 w-full">
          <div>
            <p className="bg-twitter w-fit rounded-full px-1  text-white font-serif italic font-light text-sm">
              {category}
            </p>
            <h1 className="text-twitter font-semibold text-2xl ">{title}</h1>
            <p className="text-soil font-mono font-light text-base">
              Seller: {""}
              {author}
            </p>
            Posted: {""}
            <TimeAgo
              date={publishedAt}
              className="text-sm text-soil font-mono font-light "
            />
            <div className="mt-2">
              <img
                src={urlFor(image && image[index])}
                className="product-detail-image"
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
            <p className="price">
              UGX {""}
              {price}
            </p>
            <div className="reviews">
              <div className="flex">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </div>
              <p>(4)</p>
            </div>
            <div className="quantity">
              <h3 className="font-bold">Quantity:</h3>
              <p className="quantity-desc">
                <span className="minus" onClick={decQty}>
                  <AiOutlineMinus />
                </span>
                <span className="num">{qty}</span>
                <span className="plus" onClick={incQty}>
                  <AiOutlinePlus />
                </span>
              </p>
            </div>
            <div className="buttons">
              <button
                type="button"
                className="add-to-cart"
                onClick={() => onAdd(sellpost, qty)}
              >
                Add to Cart
              </button>
              <button type="button" className="buy-now" onClick={handleBuyNow}>
                Buy Now
              </button>
            </div>
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
        </div>

        <div className="items-center flex flex-col my-4 p-2 ">
          <h2 className="text-twitter text-2xl font-semibold mb-4">
            You May Also Like
          </h2>
          <Link href="https://vdbaa.com/fullpage.php?section=General&pub=398782&ga=g">
            <OwlCarousel
              className="mb-5"
              loop
              margin={2}
              nav={true}
              navText={[
                '<img src="/back.png" alt="back"/>',
                '<img src="/forward.png" alt="forward"/>',
              ]}
              dots={true}
              animateIn={true}
              {...options}
            >
              {sellposts.map((item) => (
                <Sells key={item._id} sellpost={item} />
              ))}
            </OwlCarousel>
          </Link>
        </div>
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "sellposts"] {
    slug {
      current
    }
  }
  `;

  const sellposts = await client.fetch(query);

  const paths = sellposts.map((sellpost) => ({
    params: {
      slug: sellpost.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "sellposts" && slug.current == '${slug}'][0]`;
  const sellpostsQuery = '*[_type == "sellposts"]';

  const sellpost = await client.fetch(query);
  const sellposts = await client.fetch(sellpostsQuery);

  return {
    props: { sellposts, sellpost },
  };
};

export default SellsDetails;
