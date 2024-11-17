import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";

function Footer({ imageUrl, alternativeText }) {
  return (
    <footer className="px-9 py-8 dark-blue">
      <div className="flex flex-col gap-5 items-center mt-5 lg:flex-row lg:justify-between font-bold">
        <Link href="/">
          <Image
            alt={alternativeText}
            src={imageUrl}
            height={150}
            width={150}
          />
        </Link>
        <p className="text-center">
          Investment in yourself is the best investment you can make. <br />
          Invest in your soccer career today.
        </p>
      </div>
      <div className="flex flex-col gap-4 items-center lg:flex-row lg:justify-around lg:items-center mt-8 font-semibold">
        <div>
          <p className="text-center">connect with us</p>
          <div className="flex gap-8">
            <Link href="#">
              <FaLinkedinIn size={25} />
            </Link>
            <Link href="#">
              <FaTwitter size={25} />
            </Link>
            <Link href="#">
              <FaInstagram size={25} />
            </Link>
            <Link href="#">
              <FaFacebookF size={25} />
            </Link>
          </div>
        </div>
        <div>
          <p className="text-center">our location</p>
          <span className="font-light text-sm">
            456 Soccer Field Rd, <br />
            Goal City, FC 98765
          </span>
        </div>
        <div>
          <p className="text-center">resources</p>
          <Link
            href="/blog"
            className="block font-light hover:opacity-40 text-sm"
          >
            Blog
          </Link>
          <Link
            href="/training-programs"
            className="block font-light hover:opacity-40 text-sm"
          >
            Training programs
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
