import { QuestionMarkCircleIcon } from "@heroicons/react/outline";

export const Suggestions = ({
  setSearchTerm,
}: {
  setSearchTerm: (searchTerm: string) => void;
}) => {
  return (
    <section className="overflow-hidden">
      <div className="relative max-w-7xl mx-auto pt-20 pb-12 px-4 sm:px-6 lg:px-8 lg:py-20">
        <div className="relative lg:flex lg:items-center">
          <div className="relative lg:ml-10">
            <QuestionMarkCircleIcon className="absolute top-1 left-1 transform -translate-x-8 -translate-y-24 h-36 w-36 text-indigo-200 opacity-30" />

            <div className="relative">
              <div className="text-2xl leading-9 font-medium text-gray-700">
                <p>
                  Try searching for a drug like{" "}
                  <span
                    className="underline text-cyan-600 cursor-pointer"
                    onClick={() => setSearchTerm("ibuprofen")}
                  >
                    ibuprofen
                  </span>{" "}
                  or asking a question such as{" "}
                  <span
                    className="underline text-cyan-600 cursor-pointer"
                    onClick={() => setSearchTerm("what is bone cancer?")}
                  >
                    "what is bone cancer?"
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
