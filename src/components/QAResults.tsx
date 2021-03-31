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
  if (!search || error) return <></>;

  let confidenceStr = "";

  const showQA = !loading && data !== undefined;
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

  return <div>Loading...</div>;
};
