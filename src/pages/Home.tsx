import { FC } from "react";
import { NHS } from "../components/logos/NHS";
import { NICE } from "../components/logos/NICE";
import GregBrimble from "../assets/profilePictures/GregBrimble.jpg";
import RagnorComerford from "../assets/profilePictures/RagnorComerford.jpg";
import MohammadJavad from "../assets/profilePictures/MohammadJavad.jpg";
import BenedictyMambi from "../assets/profilePictures/BenedictyMambi.jpg";
import LianaMostafa from "../assets/profilePictures/LianaMostafa.jpg";
import BarnabasUjvari from "../assets/profilePictures/BarnabasUjvari.jpg";
import { Footer } from "../components/Footer";

export const Home: FC = () => (
  <div>
    <div className="pb-8 sm:pb-12 lg:pb-12">
      <div className="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48">
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
          <div>
            <div>
              <img
                className="h-11 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark.svg?color=cyan&amp;shade=600"
                alt="Workflow"
              />
            </div>
            <div className="mt-20">
              <div>
                <a href="/" className="inline-flex space-x-4">
                  <span className="rounded bg-cyan-50 px-2.5 py-1 text-xs font-semibold text-cyan-600 tracking-wide uppercase">
                    What's new
                  </span>
                  <span className="inline-flex items-center text-sm font-medium text-cyan-600 space-x-1">
                    <span>Just shipped version 1.0.0</span>
                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </a>
              </div>
              <div className="mt-6 sm:max-w-xl">
                <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                  Search for conditions, drugs, treatments and more
                </h1>
                <p className="mt-6 text-xl text-gray-500">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo.
                </p>
              </div>
              <div className="mt-12 sm:max-w-lg sm:w-full sm:flex">
                <div className="mt-4 sm:mt-0 sm:ml-3">
                  <a
                    href="/login"
                    className="block w-full rounded-md border border-transparent px-5 py-3 bg-cyan-600 text-base font-medium text-white shadow hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 sm:px-10"
                  >
                    Get Started
                  </a>
                </div>
              </div>
              <div className="mt-6">
                <div className="max-w-7xl mx-auto pt-12 lg:pt-16">
                  <p className="text-base font-semibold uppercase text-gray-600 tracking-wider">
                    Featuring content exclusively from reputable sources
                  </p>
                  <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
                    <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                      <svg className="max-h-12 fill-current text-gray-400">
                        <NHS />
                      </svg>
                    </div>
                    <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                      <svg className="max-h-12 fill-current text-gray-400">
                        <NICE />
                      </svg>
                    </div>
                    <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                      <img
                        className="max-h-12"
                        src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
                        alt="Tuple"
                      />
                    </div>
                    <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                      <img
                        className="max-h-12"
                        src="https://tailwindui.com/img/logos/laravel-logo-gray-400.svg"
                        alt="Laravel"
                      />
                    </div>
                    <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                      <img
                        className="max-h-12"
                        src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                        alt="StaticKit"
                      />
                    </div>
                    <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                      <img
                        className="max-h-12"
                        src="https://tailwindui.com/img/logos/statamic-logo-gray-400.svg"
                        alt="Statamic"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
          <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <div className="hidden sm:block">
              <div className="absolute inset-y-0 left-1/2 w-screen bg-gray-50 rounded-l-3xl lg:left-80 lg:right-0 lg:w-full"></div>
              <svg
                className="absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0"
                width="404"
                height="392"
                fill="none"
                viewBox="0 0 404 392"
              >
                <defs>
                  <pattern
                    id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="4"
                      height="4"
                      className="text-gray-200"
                      fill="currentColor"
                    ></rect>
                  </pattern>
                </defs>
                <rect
                  width="404"
                  height="392"
                  fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
                ></rect>
              </svg>
            </div>
            <div className="relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12">
              <img
                className="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
                src="https://tailwindui.com/img/component-images/top-nav-with-multi-column-layout-screenshot.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
        <div className="space-y-5 sm:space-y-4">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Meet the team
          </h2>
          <p className="text-xl text-gray-500">
            Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae
            elementum enim vitae ullamcorper suspendisse. Vivamus fringilla.
          </p>
        </div>
        <div className="lg:col-span-2">
          <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8">
            <li>
              <div className="flex items-center space-x-4 lg:space-x-6">
                <img
                  className="w-16 h-16 rounded-full lg:w-20 lg:h-20"
                  src={GregBrimble}
                  alt="Greg Brimble"
                />
                <div className="font-medium text-lg leading-6 space-y-1">
                  <h3>Greg Brimble</h3>
                  <p className="text-indigo-600">Job Description</p>
                </div>
              </div>
            </li>

            <li>
              <div className="flex items-center space-x-4 lg:space-x-6">
                <img
                  className="w-16 h-16 rounded-full lg:w-20 lg:h-20"
                  src={RagnorComerford}
                  alt="Ragnor Comerford"
                />
                <div className="font-medium text-lg leading-6 space-y-1">
                  <h3>Ragnor Comerford</h3>
                  <p className="text-indigo-600">Job Description</p>
                </div>
              </div>
            </li>

            <li>
              <div className="flex items-center space-x-4 lg:space-x-6">
                <img
                  className="w-16 h-16 rounded-full lg:w-20 lg:h-20"
                  src={MohammadJavad}
                  alt="Mohammad Javad"
                />
                <div className="font-medium text-lg leading-6 space-y-1">
                  <h3>Mohammad Javad</h3>
                  <p className="text-indigo-600">Job Description</p>
                </div>
              </div>
            </li>

            <li>
              <div className="flex items-center space-x-4 lg:space-x-6">
                <img
                  className="w-16 h-16 rounded-full lg:w-20 lg:h-20"
                  src={BenedictyMambi}
                  alt="Benedicty Mambi"
                />
                <div className="font-medium text-lg leading-6 space-y-1">
                  <h3>Benedicty Mambi</h3>
                  <p className="text-indigo-600">Job Description</p>
                </div>
              </div>
            </li>

            <li>
              <div className="flex items-center space-x-4 lg:space-x-6">
                <img
                  className="w-16 h-16 rounded-full lg:w-20 lg:h-20"
                  src={LianaMostafa}
                  alt="Liana Mostafa"
                />
                <div className="font-medium text-lg leading-6 space-y-1">
                  <h3>Liana Mostafa</h3>
                  <p className="text-indigo-600">Job Description</p>
                </div>
              </div>
            </li>

            <li>
              <div className="flex items-center space-x-4 lg:space-x-6">
                <img
                  className="w-16 h-16 rounded-full lg:w-20 lg:h-20"
                  src={BarnabasUjvari}
                  alt="Barnabás Ujvári"
                />
                <div className="font-medium text-lg leading-6 space-y-1">
                  <h3>Barnabás Ujvári</h3>
                  <p className="text-indigo-600">Job Description</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <Footer />
  </div>
);
