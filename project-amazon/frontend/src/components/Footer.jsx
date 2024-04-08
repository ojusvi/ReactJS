import React from "react";
import { amazon } from "../assets/images";

const Footer = () => {
  return (
    <footer className="bg-adgray">
      <section className="relative overflow-hidden py-10">
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <div className="-m-6 flex flex-wrap">
            <div className="w-full p-6 md:w-1/2 lg:w-5/12">
              <div className="flex h-full flex-col justify-between">
                <div className="mb-4 inline-flex items-center">
                  <img
                    src={amazon}
                    alt="logo"
                    width={290}
                    height={290}
                    className="px-9 py-4"
                  />
                </div>
                <div>
                  <p className="mb-4  text-base font-medium text-white">
                    amazon.in | India Ki Apni Dukaan
                  </p>
                  <p className="text-sm text-white text-esm">
                    &copy; 1996-2024, Amazon.com, Inc. or its affiliates
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full p-6 md:w-1/2 lg:w-2/12">
              <div className="h-full">
                <h3 className="tracking-px mb-9  text-xs uppercase text-white font-semibold text-[17px]">
                  Company
                </h3>
                <ul>
                  <li className="mb-4">
                    <a
                      className=" text-base font-medium text-white hover:text-yellow-500"
                      href="#"
                    >
                      Features
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className=" text-base font-medium text-white hover:text-yellow-500"
                      href="#"
                    >
                      Pricing
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className=" text-base font-medium text-white hover:text-yellow-500"
                      href="#"
                    >
                      Affiliate Program
                    </a>
                  </li>
                  <li>
                    <a
                      className=" text-base font-medium text-white hover:text-yellow-500"
                      href="#"
                    >
                      Press Kit
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full p-6 md:w-1/2 lg:w-2/12">
              <div className="h-full">
                <h3 className="tracking-px mb-9  text-xs font-semibold text-[17px] uppercase text-white">
                  Support
                </h3>
                <ul>
                  <li className="mb-4">
                    <a
                      className=" text-base font-medium text-white hover:text-yellow-500"
                      href="#"
                    >
                      Account
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className=" text-base font-medium text-white hover:text-yellow-500"
                      href="#"
                    >
                      Help
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className=" text-base font-medium text-white hover:text-yellow-500"
                      href="#"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      className=" text-base font-medium text-white hover:text-yellow-500"
                      href="#"
                    >
                      Customer Support
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full p-6 md:w-1/2 lg:w-3/12">
              <div className="h-full">
                <h3 className="tracking-px mb-9  text-xs font-semibold text-[17px] uppercase text-white ">
                  Legals
                </h3>
                <ul>
                  <li className="mb-4">
                    <a
                      className=" text-base font-medium text-white hover:text-yellow-500"
                      href="#"
                    >
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className=" text-base font-medium text-white hover:text-yellow-500"
                      href="#"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      className=" text-base font-medium text-white hover:text-yellow-500"
                      href="#"
                    >
                      Licensing
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;