import { FC } from "react";
import { LogoCloud } from "./LogoCloud";
import HeroSC from "../../assets/heroAssets/hero-sc.jpg";

export const Hero: FC = () => (
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
              <a href="#stats" className="inline-flex space-x-4">
                <span className="rounded bg-cyan-50 px-2.5 py-1 text-xs font-semibold text-cyan-600 tracking-wide uppercase">
                  What's new
                </span>
                <span className="inline-flex items-center text-sm font-medium text-cyan-600 space-x-1">
                  <span>Live indexing in 3.1.0</span>
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
                Symptomizer can instantly search through hundreds of thousands
                of documents to find you exactly what you're looking for.
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
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="#stats"
                  className="block w-full rounded-md border border-transparent px-5 py-3 bg-cyan-100 text-base font-medium text-cyan-700 shadow hover:bg-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 sm:px-10"
                >
                  Learn more
                </a>
              </div>
            </div>
            <div className="mt-6">
              <LogoCloud />
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
              src={HeroSC}
              alt="The main page of this beautiful search system."
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);
