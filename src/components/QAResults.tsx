import { Transition } from "@headlessui/react";

type QAResultType = {
  answer: string;
  confidence: number;
};

export const QAResults = ({
  loading,
  error,
  data,
}: {
  loading: boolean;
  error?: object;
  data?: QAResultType;
}) => {
  let confidenceStr = "";

  const showQA = !loading && data !== undefined && data.confidence > 0.7;
  if (showQA && data !== undefined) {
    confidenceStr = `Answered by Symptomizer's BERT-based QA - Confidence: ${Math.floor(
      data.confidence * 100
    )}%`;
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
            <p className="text-xs text-gray-500">{confidenceStr}</p>
          </div>
        </div>
      </Transition>
    );
  }
  return <></>;
};
