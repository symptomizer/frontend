import { Transition } from "@headlessui/react";
import { SearchInfobox_search_infobox } from "../pages/__generated__/SearchInfobox";

const orderedPriorityOfInfoBoxFields = [
  "frequency",
  "deaths",
  "duration",
  "onset",
  "symptoms",
  "cause",
  "diagnosis",
  "complications",
  "prevention",
  "treatment",
  "bioavailability",
  "routes_of_administration",
  "tradename",
  "boiling_point",
  "melting_point",
  "density",
  "solubility",
  "excretion",
  "metabolism",
  "metabolites",
  "pregnancy_category",
  "protein_bound",
  "melting_high",
];

const sortInfoBoxObjectEntries = (entries: [string, string][]) => {
  return entries
    .filter((a) => a[0] !== "name")
    .sort(function (a, b) {
      const indA = orderedPriorityOfInfoBoxFields.indexOf(a[0]);
      const indB = orderedPriorityOfInfoBoxFields.indexOf(b[0]);
      return indA - indB;
    });
};

const sortStringArrayByLength = (array: string[]) => {
  return array.slice().sort(function (a, b) {
    return a.length - b.length;
  });
};

const stripHTMLTags = (str: string) => {
  return str.replace(/(<([^>]+)>)/gi, " ");
};

export type InfoBoxDataType = {
  aliases?: string[];
  extext?: string;
  images?: string[];
  infobox?: { [k: string]: string };
};

export const InfoBox = ({
  loading,
  error,
  data,
  search,
}: {
  loading: boolean;
  error?: any;
  data?: SearchInfobox_search_infobox | null;
  search: string;
}) => {
  if (!search || error) return <></>;

  if (loading) return <div>Loading...</div>;
  if (!data) return <></>;

  const title =
    data && data.infobox && data.infobox.name
      ? stripHTMLTags(data?.infobox.name)
      : search;
  const aliases =
    data && data.aliases
      ? sortStringArrayByLength(data?.aliases).slice(0, 3).join(", ")
      : "";
  const image = data && data.images ? data.images[0] : "";

  const infoBoxEntries =
    data && data.infobox
      ? sortInfoBoxObjectEntries(
          Object.entries(data.infobox).filter(
            ([key, value]) => key !== "__typename" && value
          )
        )
      : [];

  return (
    <Transition
      appear={true}
      show={true}
      enter="transition-opacity duration-500"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-500"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="relative rounded-lg bg-white mb-4 overflow-hidden shadow">
        <div className="px-6 py-6">
          <div className="divide-y divide-gray-200">
            <div className="pb-2">
              <p className="text-xl font-semibold text-gray-900">{title}</p>
              <p className="text-xs capitalize text-gray-600">{aliases}</p>
            </div>
            <div className="grid grid-cols-4 gap-4">
              <div className="pt-2 col-span-3">
                {infoBoxEntries.slice(0, 5).map((entry) => {
                  const [label, value] = entry;
                  return (
                    <>
                      <p>
                        <span className="capitalize text-sm font-semibold text-gray-900">
                          {`${label.split("_").join(" ")}: `}
                        </span>
                        <span
                          className="capitalize text-sm font-normal text-gray-900"
                          dangerouslySetInnerHTML={{ __html: value }}
                        />
                      </p>
                    </>
                  );
                })}
              </div>
              {image && (
                <div className="p-2 max-h-full flex justify-center items-center">
                  <img
                    className="rounded-2xl max-h-24 "
                    src={image}
                    alt="Search Result Visualisation"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        {/* <div className="absolute bottom-2 right-4">
            <p className="text-xs text-gray-500">{confidenceStr}</p>
          </div>
          <div className="absolute bottom-2 left-4">
            <p className="lowercase tracking-wide text-xs font-light text-gray-500">Beta v0.5</p> */}
        {/* </div> */}
      </div>
    </Transition>
  );
};
