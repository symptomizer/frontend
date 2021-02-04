import { FC } from "react";
import { BNF } from "../logos/BNF";
import { NHS } from "../logos/NHS";
import { NICE } from "../logos/NICE";
import { WHO } from "../logos/WHO";

export const LogoCloud: FC = () => (
  <div className="max-w-7xl mx-auto pt-12 lg:pt-16">
    <p className="text-base font-semibold uppercase text-gray-600 tracking-wider">
      Featuring content exclusively from reputable sources
    </p>
    <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
      <a href="https://www.nhs.uk/">
        <div className="transition duration-150 ease-in-out col-span-1 flex justify-center py-8 px-8 bg-gray-50 text-gray-400 hover:text-brands-nhs-blue">
          <svg className="max-h-12">
            <NHS />
          </svg>
        </div>
      </a>
      <a href="https://www.nice.org.uk/">
        <div className="transition duration-150 ease-in-out col-span-1 flex justify-center py-8 px-8 bg-gray-50 text-gray-400 hover:text-brands-nice-black">
          <svg className="max-h-12">
            <NICE />
          </svg>
        </div>
      </a>
      <a href="https://www.who.int/">
        <div className="transition duration-150 ease-in-out col-span-1 flex justify-center py-8 px-8 bg-gray-50 text-gray-400 hover:text-brands-who-blue">
          <svg className="max-h-12">
            <WHO />
          </svg>
        </div>
      </a>
      <a href="https://bnf.nice.org.uk/">
        <div className="transition duration-150 ease-in-out col-span-1 flex justify-center py-8 px-8 bg-gray-50 text-gray-400 hover:text-brands-bnf-black">
          <svg className="max-h-12">
            <BNF />
          </svg>
        </div>
      </a>
      <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50"></div>
      <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50"></div>
    </div>
  </div>
);
