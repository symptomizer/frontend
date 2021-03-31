import { Transition } from "@headlessui/react";

type QAResultType = {
  answer: string;
  confidence: number;
};

export const QAResults = ({
  loading,
  error,
  data,
  search,
}: {
  loading: boolean;
  error?: any;
  data?: QAResultType;
  search?: string;
}) => {
  const notRender =
    !search || error || data?.answer === "empty" || search.indexOf("?") < 0;

  let confidenceStr = "";

  const showQA = !loading && data !== undefined && !notRender;
  if (showQA && data !== undefined) {
    confidenceStr = `Confidence: ${Math.floor(data.confidence * 100)}%`;
    return (
      <Transition
        appear={true}
        show={showQA}
        enter="transition-opacity duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="relative rounded-lg bg-white mb-4 overflow-hidden shadow">
          <div className="px-6 py-10">
            <p className="text-3xl font-light text-gray-900">{data.answer}</p>
          </div>
          <div className="absolute bottom-2 right-4">
            <p className="text-xs text-gray-500">
              <span className="hidden md:inline-flex">
                Answered by Symptomizer's BERT-based QA: &nbsp;
              </span>
              {data.confidence >= 0.7 ? (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  {confidenceStr}
                </span>
              ) : data.confidence >= 0.4 ? (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  {confidenceStr}
                </span>
              ) : (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  {confidenceStr}
                </span>
              )}
            </p>
          </div>
          <div className="absolute bottom-2 left-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-800 to-cyan-500 lowercase tracking-wide text-xs font-normal">
              Beta v0.5
            </span>
          </div>
        </div>
      </Transition>
    );
  }

  return (
    <Transition
      appear={true}
      show={!notRender}
      enter="transition-opacity duration-500"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-500"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="border border-gray-200 shadow rounded-md mb-4 p-4 w-full mx-auto">
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-2 py-1">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    </Transition>
  );
};
