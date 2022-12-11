import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";
import { useStateContext } from "../context/StateContext";
import { runFireworks } from "../lib/utils";
import Head from "next/head";

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, []);

  return (
    <>
      <Head>
        <title>Successful Purchace | Uquicks Shop</title>
        <meta
          name="keywords"
          content="Uquicks Shop, Welcome to Latest and upcoming events in uganda - rwenzori region and abroad events, Welcome to avariety of Blog posts like make money online,free internet, data tricks, tech posts, quick loan tutorials, insurance, electricity, anotrny, mortage and much more, sell anything in kasese, buy online kasese, SEO tools, Graphics design Tools, Tour Advisor tools, hotel advisor tools and much more Uquicks.com, Kasese News Updates, Kasese Technology, Loans in Kasese, Insurance in Kasese, Make Money Kasese, Kasese Entertainment, Free Data Kasese,how to see my ubteb results online, how to see my uneb results online,how to see my unmeb results online, Services at Free Costs in Kasese, Rwenzori tv live Rwenzori tv live streaming,"
        />
        <meta
          name="description"
          content="You have successfully purchased Your product. Thank You"
        />
        <meta property="og:title" content="Upcoming Events | Uquicks.com" />
        <link rel="icon" href="/uquicks-logo.png" />
        <meta name="viewport" content="initial-scale=1,width=device-width" />
        <meta charset="utf-8" />
        <meta name="theme-color" content="#000000" />
        <meta name="msvalidate.01" content="636CB3ADD97C4DABBF11D6B5656DB622" />
        <link rel="manifest" href="/manifest.json" />
        <link href="/static/css/2.a844480a.chunk.css" rel="stylesheet" />
        <link href="/static/css/main.283a044d.chunk.css" rel="stylesheet" />
      </Head>
      <div className="success-wrapper">
        <div className="success">
          <p className="icon">
            <BsBagCheckFill />
          </p>
          <h2>Thank you for your order!</h2>
          <p className="email-msg">
            Please Bear WIth The Current Payment Situation due to payment
            Upgrade.
          </p>
          <p className="description">
            For faster Purchase, Kindly contact the Seller in the Product's
            Details Page Or Email
            <a className="email" href="mailto:joshuabwambale249@gmail.com">
              joshuabwambale249@gmail.com
            </a>{" "}
            , The Admin
          </p>
          <Link href="/">
            <button
              type="button"
              className="bg-red-500 p-2 rounded-lg text-2xl text-white"
            >
              Continue Shopping
            </button>
          </Link>
          <p className="text-soil my-2">Uquicks.com | smart, faster & secure</p>
        </div>
      </div>
    </>
  );
};

export default Success;
