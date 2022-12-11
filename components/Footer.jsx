import Link from "next/link";
import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <Link href="/AboutUs">
        <p className="curser-pointer hover:border-2 hover:rounded-xl hover:p-2">
          About Uquicks
        </p>
      </Link>
      <Link
        className="curser-pointer hover:border-2 hover:rounded-xl hover:p-2"
        href="/ContactUs"
      >
        <p>Contact Us</p>
      </Link>
      <Link
        className="curser-pointer hover:border-2 hover:rounded-xl hover:p-2"
        href="/Privacy-Policy"
      >
        <p>Privacy Policy</p>
      </Link>
      <Link
        className="curser-pointer hover:border-2 hover:rounded-xl hover:p-2"
        href="/Terms-&-Conditions"
      >
        <p>Terms & Conditions</p>
      </Link>

      <p>
        Created by{" "}
        <Link href="https://joshcreativeprogrammer.netlify.app" target="_blank">
          Bwambale Joshua
        </Link>
      </p>

      <p>
        2022 <Link href="/">Uquicks.com</Link> All rights reserverd
      </p>
      <p className="icons">
        <Link href="/">
          <AiFillInstagram className="curser-pointer hover:border-2 hover:rounded-xl hover:p-1" />
        </Link>
        <Link href="/">
          <AiOutlineTwitter className="curser-pointer hover:border-2 hover:rounded-xl hover:p-1" />
        </Link>
      </p>
    </div>
  );
};

export default Footer;
