import { gql, useQuery } from "@apollo/client";
import { Menu, Transition } from "@headlessui/react";
import {
  SearchIcon,
  TerminalIcon,
  MapIcon,
  SupportIcon,
  MenuAlt2Icon,
  HomeIcon,
  XIcon,
} from "@heroicons/react/outline";
import { SearchIcon as SSearchIcon } from "@heroicons/react/solid";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo/white.svg";
import { InfoBox } from "../components/InfoBox";
import { QAResults } from "../components/QAResults";
import { useDebounce } from "../utils/useDebounce";
import { useProfile } from "../utils/useProfile";
import { Question } from "./__generated__/Question";
import { SearchDocuments } from "./__generated__/SearchDocuments";
import { SearchInfobox } from "./__generated__/SearchInfobox";

const QUESTION = gql`
  query Question($query: String!) {
    question(query: $query) {
      answer
      confidence
    }
  }
`;

const SEARCH_DOCUMENTS = gql`
  query SearchDocuments($query: String!) {
    search(query: $query) {
      documents(first: 10) {
        edges {
          node {
            id
            title
          }
        }
      }
    }
  }
`;

const SEARCH_INFOBOX = gql`
  query SearchInfobox($query: String!) {
    search(query: $query) {
      infobox {
        aliases
        extext
        images
        infobox {
          cause
          complications
          deaths
          diagnosis
          duration
          frequency
          name
          prevention
          symptoms
          treatment
          onset
          bioavailability
          boiling_point
          density
          excretion
          melting_high
          melting_point
          metabolism
          metabolites
          pregnancy_category
          protein_bound
          routes_of_administration
          solubility
          tradename
        }
      }
    }
  }
`;

export const Search2Page = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const profile = useProfile();

  const question = useQuery<Question>(QUESTION, {
    variables: { query: debouncedSearchTerm },
  });

  const searchDocuments = useQuery<SearchDocuments>(SEARCH_DOCUMENTS, {
    variables: { query: debouncedSearchTerm },
  });

  const infobox = useQuery<SearchInfobox>(SEARCH_INFOBOX, {
    variables: { query: debouncedSearchTerm },
  });

  return (
    <div className="h-screen bg-gray-50 flex overflow-hidden">
      <div className="hidden w-28 bg-cyan-700 overflow-y-auto md:block">
        <div className="w-full py-6 flex flex-col items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img className="h-8 w-auto" src={Logo} alt="Workflow" />
            </Link>
          </div>
          <div className="flex-1 mt-6 w-full px-2 space-y-1">
            <Link
              to="/search"
              className="bg-cyan-800 text-white w-full p-3 rounded-md flex flex-col items-center text-xs font-medium"
              aria-current="page"
            >
              <SearchIcon className="text-white h-6 w-6" />
              <span className="mt-2">Search</span>
            </Link>

            <a
              href="/graphiql?endpoint=https%3A%2F%2Fsymptomize.me%2Fgraphql&query=%7B%0A%20%20question%28query%3A%20%22What%20causes%20heart%20attacks%3F%22%29%20%7B%0A%20%20%20%20answer%0A%20%20%20%20confidence%0A%20%20%7D%0A%20%20search%28query%3A%20%22COVID-19%22%29%20%7B%0A%20%20%20%20infobox%20%7B%0A%20%20%20%20%20%20aliases%0A%20%20%20%20%20%20infobox%20%7B%0A%20%20%20%20%20%20%20%20diagnosis%0A%20%20%20%20%20%20%20%20duration%0A%20%20%20%20%20%20%20%20prevention%0A%20%20%20%20%20%20%20%20symptoms%0A%20%20%20%20%20%20%20%20treatment%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20documents%20%7B%0A%20%20%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20%20%20content%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D"
              target="_blank"
              className="group text-cyan-100 hover:bg-cyan-800 hover:text-white w-full p-3 rounded-md flex flex-col items-center text-xs font-medium"
              aria-current="page"
            >
              <TerminalIcon className="text-cyan-300 group-hover:text-white h-6 w-6" />
              <span className="mt-2">API</span>
            </a>

            <a
              href="/voyager"
              target="_blank"
              className="group text-cyan-100 hover:bg-cyan-800 hover:text-white w-full p-3 rounded-md flex flex-col items-center text-xs font-medium"
              aria-current="page"
            >
              <MapIcon className="text-cyan-300 group-hover:text-white h-6 w-6" />
              <span className="mt-2">Explorer</span>
            </a>

            <Link
              to="/support"
              className="group text-cyan-100 hover:bg-cyan-800 hover:text-white w-full p-3 rounded-md flex flex-col items-center text-xs font-medium"
              aria-current="page"
            >
              <SupportIcon className="text-cyan-300 group-hover:text-white h-6 w-6" />
              <span className="mt-2">Support</span>
            </Link>
          </div>
        </div>
      </div>

      <div className={classNames({ hidden: !showMobileMenu }, "md:hidden")}>
        <div className="fixed inset-0 z-40 flex">
          <Transition
            show={showMobileMenu}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-600 opacity-75"></div>
            </div>
          </Transition>

          <Transition
            className="relative max-w-xs w-full bg-cyan-700 pt-5 pb-4 flex-1 flex flex-col"
            show={showMobileMenu}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="absolute top-1 right-0 -mr-14 p-1">
              <button
                className="h-12 w-12 rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white"
                onClick={() => setShowMobileMenu(false)}
              >
                <XIcon className="h-6 w-6 text-white" />
                <span className="sr-only">Close sidebar</span>
              </button>
            </div>
            <div className="flex-shrink-0 px-4 flex items-center">
              <img className="h-8 w-auto" src={Logo} alt="Workflow" />
            </div>
            <div className="mt-5 flex-1 h-0 px-2 overflow-y-auto">
              <nav className="h-full flex flex-col">
                <div className="space-y-1">
                  {/* <!-- Current: "bg-cyan-800 text-white", Default: "group text-cyan-100 hover:bg-cyan-800 hover:text-white" --> */}

                  <Link
                    to="/search"
                    className="bg-cyan-800 text-white py-2 px-3 rounded-md flex items-center text-sm font-medium"
                  >
                    <SearchIcon className="text-white mr-3 h-6 w-6" />
                    <span>Search</span>
                  </Link>

                  <a
                    href="/graphiql?endpoint=https%3A%2F%2Fsymptomize.me%2Fgraphql&query=%7B%0A%20%20question%28query%3A%20%22What%20causes%20heart%20attacks%3F%22%29%20%7B%0A%20%20%20%20answer%0A%20%20%20%20confidence%0A%20%20%7D%0A%20%20search%28query%3A%20%22COVID-19%22%29%20%7B%0A%20%20%20%20infobox%20%7B%0A%20%20%20%20%20%20aliases%0A%20%20%20%20%20%20infobox%20%7B%0A%20%20%20%20%20%20%20%20diagnosis%0A%20%20%20%20%20%20%20%20duration%0A%20%20%20%20%20%20%20%20prevention%0A%20%20%20%20%20%20%20%20symptoms%0A%20%20%20%20%20%20%20%20treatment%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20documents%20%7B%0A%20%20%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20%20%20content%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D"
                    target="_blank"
                    className="group text-cyan-100 hover:bg-cyan-800 hover:text-white py-2 px-3 rounded-md flex items-center text-sm font-medium"
                  >
                    <TerminalIcon className="text-cyan-300 group-hover:text-white mr-3 h-6 w-6" />
                    <span>API</span>
                  </a>

                  <a
                    href="/voyager"
                    target="_blank"
                    className="group text-cyan-100 hover:bg-cyan-800 hover:text-white py-2 px-3 rounded-md flex items-center text-sm font-medium"
                    aria-current="page"
                  >
                    <MapIcon className="text-cyan-300 group-hover:text-white mr-3 h-6 w-6" />
                    <span>Explorer</span>
                  </a>

                  <Link
                    to="/support"
                    className="group text-cyan-100 hover:bg-cyan-800 hover:text-white py-2 px-3 rounded-md flex items-center text-sm font-medium"
                  >
                    <SupportIcon className="text-cyan-300 group-hover:text-white mr-3 h-6 w-6" />
                    <span>Support</span>
                  </Link>
                </div>
              </nav>
            </div>
          </Transition>
          <div className="flex-shrink-0 w-14" aria-hidden="true">
            {/* <!-- Dummy element to force sidebar to shrink to fit close icon --> */}
          </div>
        </div>
      </div>

      {/* <!-- Content area --> */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="w-full">
          <div className="relative z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200 shadow-sm flex">
            <button
              className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 md:hidden"
              onClick={() => setShowMobileMenu(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <MenuAlt2Icon className="h-6 w-6" />
            </button>
            <div className="flex-1 flex justify-between px-4 sm:px-6">
              <div className="flex-1 flex">
                <form className="w-full flex md:ml-0" action="#" method="GET">
                  <label htmlFor="search_field" className="sr-only">
                    Ask a question or search for a condition, drug, or keyword
                  </label>
                  <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                      <SSearchIcon className="flex-shrink-0 h-5 w-5" />
                    </div>
                    <input
                      name="search_field"
                      id="search_field"
                      className="h-full w-full border-transparent py-2 pl-8 pr-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400 sm:hidden"
                      placeholder="Search"
                      type="search"
                      value={searchTerm}
                      onChange={(event) => setSearchTerm(event.target.value)}
                    />
                    <input
                      name="search_field"
                      id="search_field"
                      className="hidden h-full w-full border-transparent py-2 pl-8 pr-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400 sm:block"
                      placeholder="Ask a question or search for a condition, drug, or keyword"
                      type="search"
                      value={searchTerm}
                      onChange={(event) => setSearchTerm(event.target.value)}
                    />
                  </div>
                </form>
              </div>
              <div className="ml-2 flex items-center sm:ml-6">
                {/* <!-- Profile dropdown --> */}
                <Menu>
                  {({ open }) => (
                    <>
                      <div className="relative flex-shrink-0">
                        <div>
                          <Menu.Button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="h-8 w-8 rounded-full"
                              src={profile.imageURL}
                              alt="Profile"
                            />
                          </Menu.Button>
                        </div>

                        <Transition
                          show={open}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items
                            static
                            className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                          >
                            <Menu.Item>
                              <a
                                href="/logout"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                role="menuitem"
                              >
                                Sign out ({profile.id})
                              </a>
                            </Menu.Item>
                          </Menu.Items>
                        </Transition>
                      </div>
                    </>
                  )}
                </Menu>
              </div>
            </div>
          </div>
        </header>

        {/* <!-- Main content --> */}
        <div className="flex-1 flex items-stretch overflow-hidden">
          <main className="flex-1 overflow-y-auto">
            <div className="pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex">
                <h1 className="flex-1 text-2xl font-bold text-gray-900 mb-4">
                  <em>Smart</em> Results
                </h1>
              </div>

              <QAResults
                search={debouncedSearchTerm}
                loading={question.loading}
                data={question.data?.question}
                error={question.error}
              />
              <InfoBox
                search={debouncedSearchTerm}
                loading={infobox.loading}
                data={{
                  aliases: infobox.data?.search?.infobox?.aliases,
                  extext: infobox.data?.search?.infobox?.extext || undefined,
                  images: infobox.data?.search?.infobox?.images,
                  infobox: Object.fromEntries(
                    Object.entries(
                      infobox.data?.search?.infobox?.infobox || {}
                    ).filter(([key, value]) => value)
                  ),
                }}
                error={infobox.error}
              />

              <div className="flex mt-8">
                <h1 className="flex-1 text-2xl font-bold text-gray-900">
                  Documents
                </h1>
              </div>

              {/* <!-- Gallery --> */}
              <section className="mt-8 pb-16" aria-labelledby="gallery-heading">
                <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                  {/* <!-- Current: "ring-2 ring-offset-2 ring-cyan-500", Default: "focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-cyan-500" --> */}

                  <li className="relative">
                    <div className="ring-2 ring-offset-2 ring-cyan-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
                        alt=""
                        className="object-cover pointer-events-none"
                      />
                      <button type="button" className="absolute inset-0">
                        <span className="sr-only">
                          View details for IMG_4985.HEIC
                        </span>
                      </button>
                    </div>
                    <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
                      IMG_4985.HEIC
                    </p>
                    <p className="block text-sm font-medium text-gray-500 pointer-events-none">
                      3.9 MB
                    </p>
                  </li>

                  <li className="relative">
                    <div className="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-cyan-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1614926857083-7be149266cda?ixlib=rb-1.2.1&ixqx=fFTBXALF4O&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=512&q=80"
                        alt=""
                        className="group-hover:opacity-75 object-cover pointer-events-none"
                      />
                      <button type="button" className="absolute inset-0">
                        <span className="sr-only">
                          View details for IMG_5214.HEIC
                        </span>
                      </button>
                    </div>
                    <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
                      IMG_5214.HEIC
                    </p>
                    <p className="block text-sm font-medium text-gray-500 pointer-events-none">
                      4 MB
                    </p>
                  </li>

                  <li className="relative">
                    <div className="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-cyan-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1614705827065-62c3dc488f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
                        alt=""
                        className="group-hover:opacity-75 object-cover pointer-events-none"
                      ></img>
                      <button type="button" className="absolute inset-0">
                        <span className="sr-only">
                          View details for IMG_3851.HEIC
                        </span>
                      </button>
                    </div>
                    <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
                      IMG_3851.HEIC
                    </p>
                    <p className="block text-sm font-medium text-gray-500 pointer-events-none">
                      3.8 MB
                    </p>
                  </li>

                  <li className="relative">
                    <div className="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-cyan-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
                        alt=""
                        className="group-hover:opacity-75 object-cover pointer-events-none"
                      ></img>
                      <button type="button" className="absolute inset-0">
                        <span className="sr-only">
                          View details for IMG_4278.HEIC
                        </span>
                      </button>
                    </div>
                    <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
                      IMG_4278.HEIC
                    </p>
                    <p className="block text-sm font-medium text-gray-500 pointer-events-none">
                      4.1 MB
                    </p>
                  </li>

                  <li className="relative">
                    <div className="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-cyan-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
                        alt=""
                        className="group-hover:opacity-75 object-cover pointer-events-none"
                      ></img>
                      <button type="button" className="absolute inset-0">
                        <span className="sr-only">
                          View details for IMG_6842.HEIC
                        </span>
                      </button>
                    </div>
                    <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
                      IMG_6842.HEIC
                    </p>
                    <p className="block text-sm font-medium text-gray-500 pointer-events-none">
                      4 MB
                    </p>
                  </li>

                  <li className="relative">
                    <div className="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-cyan-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-1.2.1&ixqx=fFTBXALF4O&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=512&q=80"
                        alt=""
                        className="group-hover:opacity-75 object-cover pointer-events-none"
                      ></img>
                      <button type="button" className="absolute inset-0">
                        <span className="sr-only">
                          View details for IMG_3284.HEIC
                        </span>
                      </button>
                    </div>
                    <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
                      IMG_3284.HEIC
                    </p>
                    <p className="block text-sm font-medium text-gray-500 pointer-events-none">
                      3.9 MB
                    </p>
                  </li>

                  <li className="relative">
                    <div className="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-cyan-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
                        alt=""
                        className="group-hover:opacity-75 object-cover pointer-events-none"
                      ></img>
                      <button type="button" className="absolute inset-0">
                        <span className="sr-only">
                          View details for IMG_4841.HEIC
                        </span>
                      </button>
                    </div>
                    <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
                      IMG_4841.HEIC
                    </p>
                    <p className="block text-sm font-medium text-gray-500 pointer-events-none">
                      3.8 MB
                    </p>
                  </li>

                  <li className="relative">
                    <div className="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-cyan-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1492724724894-7464c27d0ceb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
                        alt=""
                        className="group-hover:opacity-75 object-cover pointer-events-none"
                      ></img>
                      <button type="button" className="absolute inset-0">
                        <span className="sr-only">
                          View details for IMG_5644.HEIC
                        </span>
                      </button>
                    </div>
                    <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
                      IMG_5644.HEIC
                    </p>
                    <p className="block text-sm font-medium text-gray-500 pointer-events-none">
                      4 MB
                    </p>
                  </li>

                  <li className="relative">
                    <div className="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-cyan-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1513682322455-ea8b2d81d418?ixlib=rb-1.2.1&ixqx=fFTBXALF4O&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=512&q=80"
                        alt=""
                        className="group-hover:opacity-75 object-cover pointer-events-none"
                      ></img>
                      <button type="button" className="absolute inset-0">
                        <span className="sr-only">
                          View details for IMG_4945.HEIC
                        </span>
                      </button>
                    </div>
                    <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
                      IMG_4945.HEIC
                    </p>
                    <p className="block text-sm font-medium text-gray-500 pointer-events-none">
                      4 MB
                    </p>
                  </li>

                  <li className="relative">
                    <div className="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-cyan-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1463107971871-fbac9ddb920f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
                        alt=""
                        className="group-hover:opacity-75 object-cover pointer-events-none"
                      ></img>
                      <button type="button" className="absolute inset-0">
                        <span className="sr-only">
                          View details for IMG_2156.HEIC
                        </span>
                      </button>
                    </div>
                    <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
                      IMG_2156.HEIC
                    </p>
                    <p className="block text-sm font-medium text-gray-500 pointer-events-none">
                      4.1 MB
                    </p>
                  </li>

                  <li className="relative">
                    <div className="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-cyan-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1552461871-ce4f9fb3b438?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
                        alt=""
                        className="group-hover:opacity-75 object-cover pointer-events-none"
                      ></img>
                      <button type="button" className="absolute inset-0">
                        <span className="sr-only">
                          View details for IMG_6945.HEIC
                        </span>
                      </button>
                    </div>
                    <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
                      IMG_6945.HEIC
                    </p>
                    <p className="block text-sm font-medium text-gray-500 pointer-events-none">
                      4.2 MB
                    </p>
                  </li>

                  <li className="relative">
                    <div className="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-cyan-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1446292532430-3e76f6ab6444?ixlib=rb-1.2.1&ixqx=fFTBXALF4O&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=512&q=80"
                        alt=""
                        className="group-hover:opacity-75 object-cover pointer-events-none"
                      ></img>
                      <button type="button" className="absolute inset-0">
                        <span className="sr-only">
                          View details for IMG_1846.HEIC
                        </span>
                      </button>
                    </div>
                    <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
                      IMG_1846.HEIC
                    </p>
                    <p className="block text-sm font-medium text-gray-500 pointer-events-none">
                      3.6 MB
                    </p>
                  </li>

                  <li className="relative">
                    <div className="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-cyan-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1508669232496-137b159c1cdb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
                        alt=""
                        className="group-hover:opacity-75 object-cover pointer-events-none"
                      ></img>
                      <button type="button" className="absolute inset-0">
                        <span className="sr-only">
                          View details for IMG_4769.HEIC
                        </span>
                      </button>
                    </div>
                    <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
                      IMG_4769.HEIC
                    </p>
                    <p className="block text-sm font-medium text-gray-500 pointer-events-none">
                      3.3 MB
                    </p>
                  </li>

                  <li className="relative">
                    <div className="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-cyan-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1431512284068-4c4002298068?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
                        alt=""
                        className="group-hover:opacity-75 object-cover pointer-events-none"
                      ></img>
                      <button type="button" className="absolute inset-0">
                        <span className="sr-only">
                          View details for IMG_9513.HEIC
                        </span>
                      </button>
                    </div>
                    <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
                      IMG_9513.HEIC
                    </p>
                    <p className="block text-sm font-medium text-gray-500 pointer-events-none">
                      4 MB
                    </p>
                  </li>

                  <li className="relative">
                    <div className="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-cyan-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1581320546160-0078de357255?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
                        alt=""
                        className="group-hover:opacity-75 object-cover pointer-events-none"
                      ></img>
                      <button type="button" className="absolute inset-0">
                        <span className="sr-only">
                          View details for IMG_8451.HEIC
                        </span>
                      </button>
                    </div>
                    <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
                      IMG_8451.HEIC
                    </p>
                    <p className="block text-sm font-medium text-gray-500 pointer-events-none">
                      3.4 MB
                    </p>
                  </li>

                  <li className="relative">
                    <div className="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-cyan-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1541956628-68d338ae09d5?ixlib=rb-1.2.1&ixqx=fFTBXALF4O&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=512&q=80"
                        alt=""
                        className="group-hover:opacity-75 object-cover pointer-events-none"
                      ></img>
                      <button type="button" className="absolute inset-0">
                        <span className="sr-only">
                          View details for IMG_1298.HEIC
                        </span>
                      </button>
                    </div>
                    <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
                      IMG_1298.HEIC
                    </p>
                    <p className="block text-sm font-medium text-gray-500 pointer-events-none">
                      4.1 MB
                    </p>
                  </li>

                  <li className="relative">
                    <div className="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-cyan-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1505429155379-441cc7a574f7?ixlib=rb-1.2.1&ixqx=fFTBXALF4O&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=512&q=80"
                        alt=""
                        className="group-hover:opacity-75 object-cover pointer-events-none"
                      ></img>
                      <button type="button" className="absolute inset-0">
                        <span className="sr-only">
                          View details for IMG_6222.HEIC
                        </span>
                      </button>
                    </div>
                    <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
                      IMG_6222.HEIC
                    </p>
                    <p className="block text-sm font-medium text-gray-500 pointer-events-none">
                      4 MB
                    </p>
                  </li>

                  <li className="relative">
                    <div className="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-cyan-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1582029133746-96031e5c8d00?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
                        alt=""
                        className="group-hover:opacity-75 object-cover pointer-events-none"
                      ></img>
                      <button type="button" className="absolute inset-0">
                        <span className="sr-only">
                          View details for IMG_7451.HEIC
                        </span>
                      </button>
                    </div>
                    <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
                      IMG_7451.HEIC
                    </p>
                    <p className="block text-sm font-medium text-gray-500 pointer-events-none">
                      3.8 MB
                    </p>
                  </li>

                  <li className="relative">
                    <div className="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-cyan-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1575868053350-9fd87f68f984?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
                        alt=""
                        className="group-hover:opacity-75 object-cover pointer-events-none"
                      ></img>
                      <button type="button" className="absolute inset-0">
                        <span className="sr-only">
                          View details for IMG_9815.HEIC
                        </span>
                      </button>
                    </div>
                    <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
                      IMG_9815.HEIC
                    </p>
                    <p className="block text-sm font-medium text-gray-500 pointer-events-none">
                      3.9 MB
                    </p>
                  </li>

                  <li className="relative">
                    <div className="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-cyan-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1588391051471-1a5283d5a625?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
                        alt=""
                        className="group-hover:opacity-75 object-cover pointer-events-none"
                      ></img>
                      <button type="button" className="absolute inset-0">
                        <span className="sr-only">
                          View details for IMG_1025.HEIC
                        </span>
                      </button>
                    </div>
                    <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
                      IMG_1025.HEIC
                    </p>
                    <p className="block text-sm font-medium text-gray-500 pointer-events-none">
                      3.9 MB
                    </p>
                  </li>

                  <li className="relative">
                    <div className="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-cyan-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1575314146619-ec67b6213351?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
                        alt=""
                        className="group-hover:opacity-75 object-cover pointer-events-none"
                      ></img>
                      <button type="button" className="absolute inset-0">
                        <span className="sr-only">
                          View details for IMG_6010.HEIC
                        </span>
                      </button>
                    </div>
                    <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
                      IMG_6010.HEIC
                    </p>
                    <p className="block text-sm font-medium text-gray-500 pointer-events-none">
                      3.1 MB
                    </p>
                  </li>

                  <li className="relative">
                    <div className="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-cyan-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1579874107960-e602329ef20a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
                        alt=""
                        className="group-hover:opacity-75 object-cover pointer-events-none"
                      ></img>
                      <button type="button" className="absolute inset-0">
                        <span className="sr-only">
                          View details for IMG_1004.HEIC
                        </span>
                      </button>
                    </div>
                    <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
                      IMG_1004.HEIC
                    </p>
                    <p className="block text-sm font-medium text-gray-500 pointer-events-none">
                      4.4 MB
                    </p>
                  </li>

                  <li className="relative">
                    <div className="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-cyan-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden">
                      <img
                        src="https://images.unsplash.com/flagged/photo-1551385229-2925ed4eb53d?ixlib=rb-1.2.1&ixqx=fFTBXALF4O&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=512&q=80"
                        alt=""
                        className="group-hover:opacity-75 object-cover pointer-events-none"
                      ></img>
                      <button type="button" className="absolute inset-0">
                        <span className="sr-only">
                          View details for IMG_8499.HEIC
                        </span>
                      </button>
                    </div>
                    <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
                      IMG_8499.HEIC
                    </p>
                    <p className="block text-sm font-medium text-gray-500 pointer-events-none">
                      3.4 MB
                    </p>
                  </li>

                  <li className="relative">
                    <div className="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-cyan-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1498575637358-821023f27355?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
                        alt=""
                        className="group-hover:opacity-75 object-cover pointer-events-none"
                      ></img>
                      <button type="button" className="absolute inset-0">
                        <span className="sr-only">
                          View details for IMG_2154.HEIC
                        </span>
                      </button>
                    </div>
                    <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
                      IMG_2154.HEIC
                    </p>
                    <p className="block text-sm font-medium text-gray-500 pointer-events-none">
                      3.8 MB
                    </p>
                  </li>
                </ul>
              </section>
            </div>
          </main>

          {/* <!-- Details sidebar --> */}
          <aside className="hidden w-96 bg-white p-8 border-l border-gray-200 overflow-y-auto lg:block">
            <div className="pb-16 space-y-6">
              <div>
                <div className="block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
                    alt=""
                    className="object-cover"
                  ></img>
                </div>
                <div className="mt-4 flex items-start justify-between">
                  <div>
                    <h2 className="text-lg font-medium text-gray-900">
                      <span className="sr-only">Details for </span>IMG_4985.HEIC
                    </h2>
                    <p className="text-sm font-medium text-gray-500">3.9 MB</p>
                  </div>
                  <button
                    type="button"
                    className="ml-4 bg-white rounded-full h-8 w-8 flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    {/* <!-- Heroicon name: outline/heart --> */}
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                    <span className="sr-only">Favorite</span>
                  </button>
                </div>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Information</h3>
                <dl className="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200">
                  <div className="py-3 flex justify-between text-sm font-medium">
                    <dt className="text-gray-500">Uploaded by</dt>
                    <dd className="text-gray-900">Marie Culver</dd>
                  </div>
                  <div className="py-3 flex justify-between text-sm font-medium">
                    <dt className="text-gray-500">Created</dt>
                    <dd className="text-gray-900">June 8, 2020</dd>
                  </div>
                  <div className="py-3 flex justify-between text-sm font-medium">
                    <dt className="text-gray-500">Last modified</dt>
                    <dd className="text-gray-900">June 8, 2020</dd>
                  </div>
                  <div className="py-3 flex justify-between text-sm font-medium">
                    <dt className="text-gray-500">Dimensions</dt>
                    <dd className="text-gray-900">4032 x 3024</dd>
                  </div>
                  <div className="py-3 flex justify-between text-sm font-medium">
                    <dt className="text-gray-500">Resolution</dt>
                    <dd className="text-gray-900">72 x 72</dd>
                  </div>
                </dl>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Description</h3>
                <div className="mt-2 flex items-center justify-between">
                  <p className="text-sm text-gray-500 italic">
                    Add a description to this image.
                  </p>
                  <button
                    type="button"
                    className="bg-white rounded-full h-8 w-8 flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    {/* <!-- Heroicon name: solid/pencil --> */}
                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                    </svg>
                    <span className="sr-only">Add description</span>
                  </button>
                </div>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Shared with</h3>
                <ul className="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200">
                  <li className="py-3 flex justify-between items-center">
                    <div className="flex items-center">
                      <img
                        src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=1024&h=1024&q=80"
                        alt=""
                        className="w-8 h-8 rounded-full"
                      />
                      <p className="ml-4 text-sm font-medium text-gray-900">
                        Aimee Douglas
                      </p>
                    </div>
                    <button
                      type="button"
                      className="ml-6 bg-white rounded-md text-sm font-medium text-cyan-600 hover:text-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                    >
                      Remove<span className="sr-only"> Aimee Douglas</span>
                    </button>
                  </li>
                  <li className="py-3 flex justify-between items-center">
                    <div className="flex items-center">
                      <img
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixqx=fFTBXALF4O&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                        className="w-8 h-8 rounded-full"
                      />
                      <p className="ml-4 text-sm font-medium text-gray-900">
                        Andrea McMillan
                      </p>
                    </div>
                    <button
                      type="button"
                      className="ml-6 bg-white rounded-md text-sm font-medium text-cyan-600 hover:text-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                    >
                      Remove<span className="sr-only"> Andrea McMillan</span>
                    </button>
                  </li>
                  <li className="py-2 flex justify-between items-center">
                    <button
                      type="button"
                      className="group -ml-1 bg-white p-1 rounded-md flex items-center focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    >
                      <span className="w-8 h-8 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400">
                        {/* <!-- Heroicon name: solid/plus --> */}
                        <svg
                          className="h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                      <span className="ml-4 text-sm font-medium text-cyan-600 group-hover:text-cyan-500">
                        Share
                      </span>
                    </button>
                  </li>
                </ul>
              </div>
              <div className="flex">
                <button
                  type="button"
                  className="flex-1 bg-cyan-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                >
                  View
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};
