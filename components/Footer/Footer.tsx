import { FOOTER_CONTACT_INFO, SOCIALS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-8 lg:py-4">
      <div className="container mx-auto px-4 lg:px-0">
        <div className="flex flex-wrap items-center justify-between gap-8">
          <div className="flex gap-10">

          <Link href="/" className="mb-4 lg:mb-0">
            <Image src="/Chef.png" alt="logo" width={90} height={24} />
          </Link>
          <div className="max-w-md flex flex-col items-center">
            <span className="text-gray-800 text-sm font-semibold mb-2">Address</span>
            <div className="text-gray-700 hover:text-gray-800 transition-colors duration-300">
              H H Patel School Office, Ram Nagar <br /> Sabarmati, Ahmedabad, Gujarat
              380005
            </div>
          </div>
          </div>
          <div className="flex flex-wrap gap-8">
            <div className="flex flex-col gap-2">
              <h4 className="text-gray-800 text-sm font-semibold mb-2">
                Contact Us
              </h4>
              <ul className="text-gray-600">
                {FOOTER_CONTACT_INFO.links.map((link, index) => (
                  <li key={index} className="flex items-center">
                    <span className="mr-1">{link.label}:</span>
                    <a
                      href={`tel:${link.value}`}
                      className="text-gray-700 hover:text-gray-800 transition-colors duration-300"
                    >
                      {link.value}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-gray-800 text-sm font-semibold mb-2">
                Social Media
              </h4>
              <ul className="flex gap-4">
                {SOCIALS.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={link.icon}
                        alt="social icon"
                        width={20}
                        height={20}
                        className="rounded-full"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-4 pt-2">
        <p className="text-gray-600 text-center text-xs">
          &copy; 2024 NAVRANG | All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
