import { FC } from "react";
import GregBrimble from "../../assets/profilePictures/GregBrimble.jpg";
import RagnorComerford from "../../assets/profilePictures/RagnorComerford.jpg";
import MohammadJavad from "../../assets/profilePictures/MohammadJavad.jpg";
import BenedictyMambi from "../../assets/profilePictures/BenedictyMambi.jpg";
import LianaMostafa from "../../assets/profilePictures/LianaMostafa.jpg";
import BarnabasUjvari from "../../assets/profilePictures/BarnabasUjvari.jpg";

export const Team: FC = () => (
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
                <p className="text-cyan-600">Job Description</p>
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
                <p className="text-cyan-600">Job Description</p>
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
                <p className="text-cyan-600">Job Description</p>
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
                <p className="text-cyan-600">Job Description</p>
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
                <p className="text-cyan-600">Job Description</p>
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
                <p className="text-cyan-600">Job Description</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
);
