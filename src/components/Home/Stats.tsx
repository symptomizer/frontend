import { FC } from "react";

// TODO: Update automatically

export const Stats: FC = () => (
  <div className="bg-white pt-12 sm:pt-16" id="stats">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Trusted by at least one medical student
        </h2>
        <p className="mt-3 text-xl text-gray-500 sm:mt-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus
          repellat laudantium.
        </p>
      </div>
    </div>
    <div className="mt-10 pb-12 bg-gray-50 sm:pb-16">
      <div className="relative">
        <div className="absolute inset-0 h-1/2 bg-white"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
              <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                  Sources
                </dt>
                <dd className="order-1 text-5xl font-extrabold text-cyan-600">
                  4
                </dd>
              </div>
              <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                  Documents
                </dt>
                <dd className="order-1 text-5xl font-extrabold text-cyan-600">
                  260k
                </dd>
              </div>
              <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                  Searches completed
                </dt>
                <dd className="order-1 text-5xl font-extrabold text-cyan-600">
                  3
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
);
