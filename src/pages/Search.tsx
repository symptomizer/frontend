import gql from "graphql-tag";
import { FC, useState, useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Search } from "./__generated__/Search";
import { SearchResults } from "../components/SearchResults";
import { QAResults } from "../components/QAResults";
import { Footer } from "../components/Footer";
import { useProfile } from "../utils/useProfile";
import WhiteLogo from "../assets/logo/white.png";
import { InfoBox, InfoBoxDataType } from "../components/InfoBox";

const SEARCH = gql`
  query Search($term: String!) {
    search(query: $term) {
      documents {
        edges {
          node {
            id
            title
            description
            url
            source {
              id
            }
          }
        }
      }
    }
  }
`;

export const SearchPage: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [loadingQA, setLoadingQA] = useState(true);
  const [infoBoxData, setInfoBoxData] = useState<InfoBoxDataType>({});
  // Just here to demo how the QA would take longer to load. To remove when it's actually hooked up I guess.
  useEffect(() => {
    setLoadingQA(true);
    setTimeout(() => {
      setLoadingQA(false);
    }, 3000);
  }, [searchTerm]);

  // Temporary for me to fetch from infobox. Should be replaced
  const getInfoBoxData = async (title: string) => {
    const response = await fetch(
      `http://35.214.36.96:8889/info?search=${title}`
    );
    const json = await response.json();

    if (json.status && json.status === 200) {
      if (Object.keys(json.data.infobox).length > 1) {
        setInfoBoxData(json.data);
      }
    } else {
      console.warn("Fetch from infobox did not yield results.");
    }
  };

  const searchResults = useQuery<Search>(SEARCH, {
    variables: { term: searchTerm },
  });

  const { id, imageURL } = useProfile();

  return (
    <div style={{ minHeight: "712px" }} className="overflow-y-auto">
      <div className="min-h-screen bg-gray-100">
        <header className="pb-24 bg-gradient-to-r from-light-blue-800 to-cyan-600">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="relative py-5 flex items-center justify-center lg:justify-between">
              {/* Logo */}
              <div className="absolute left-0 flex-shrink-0 lg:static">
                <a href="/search">
                  <span className="sr-only">Workflow</span>
                  <img className="h-9 w-auto" src={WhiteLogo} alt="Workflow" />
                </a>
              </div>

              {/* Right section on desktop */}
              <div className="hidden lg:ml-4 lg:flex lg:items-center lg:pr-0.5">
                <button
                  type="button"
                  className="flex-shrink-0 p-1 text-cyan-200 rounded-full hover:text-white hover:bg-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <span className="sr-only">View notifications</span>
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
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    ></path>
                  </svg>
                </button>

                {/* Profile dropdown */}
                <Menu>
                  {({ open }) => (
                    <div className="ml-4 relative flex-shrink-0">
                      <div>
                        <Menu.Button className="bg-white rounded-full flex text-sm ring-2 ring-white ring-opacity-20 focus:outline-none focus:ring-opacity-100">
                          <div id="user-menu">
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="h-8 w-8 rounded-full"
                              src={imageURL}
                              alt="Profile"
                            />
                          </div>
                        </Menu.Button>
                      </div>
                      <Transition
                        show={open}
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                        aria-orientation="vertical"
                        aria-labelledby="user-menu"
                        className="origin-top-right z-40 absolute -right-2 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
                      >
                        <Menu.Items>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="/search"
                                className={classNames(
                                  "block px-4 py-2 text-sm text-gray-700",
                                  { "bg-gray-100": active }
                                )}
                                role="menuitem"
                              >
                                Your Profile
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="/search"
                                className={classNames(
                                  "block px-4 py-2 text-sm text-gray-700",
                                  { "bg-gray-100": active }
                                )}
                                role="menuitem"
                              >
                                Settings
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="/logout"
                                className={classNames(
                                  "block px-4 py-2 text-sm text-gray-700",
                                  { "bg-gray-100": active }
                                )}
                                role="menuitem"
                              >
                                Sign out
                              </a>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </div>
                  )}
                </Menu>
              </div>

              {/* Search */}
              <div className="flex-1 min-w-0 px-12 lg:hidden">
                <div className="max-w-xs w-full mx-auto">
                  <label htmlFor="mobile-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative text-white focus-within:text-gray-600">
                    <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <input
                      id="mobile-search"
                      className="block w-full bg-white bg-opacity-20 py-2 pl-10 pr-3 border border-transparent rounded-md leading-5 focus:text-gray-900 placeholder-white focus:outline-none focus:bg-opacity-100 focus:border-transparent focus:placeholder-gray-500 focus:ring-0 sm:text-sm"
                      placeholder="Search"
                      type="search"
                      name="search"
                      value={searchTerm}
                      onChange={(event) => {
                        setSearchTerm(event.target.value);
                        setInfoBoxData({});
                      }}
                      onBlur={() => {
                        getInfoBoxData(searchTerm);
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Menu button */}
              <div className="absolute right-0 flex-shrink-0 lg:hidden">
                {/* Mobile menu button */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="bg-transparent p-2 rounded-md inline-flex items-center justify-center text-cyan-200 hover:text-white hover:bg-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white"
                  aria-expanded={isOpen}
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className={classNames("block h-6 w-6", {
                      hidden: isOpen,
                      block: !isOpen,
                    })}
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
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                  <svg
                    className={classNames("hidden h-6 w-6", {
                      hidden: !isOpen,
                      block: isOpen,
                    })}
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
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="hidden lg:block border-t border-white border-opacity-20 py-5">
              <div className="grid grid-cols-3 gap-8 items-center">
                <div className="col-span-2">
                  <nav className="flex space-x-4">
                    <Link
                      to="/search"
                      className="text-white text-sm font-medium rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10"
                      aria-current="page"
                    >
                      Search
                    </Link>

                    <Link
                      to="/search"
                      className="text-cyan-100 text-sm font-medium rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10"
                      aria-current="false"
                    >
                      Profile
                    </Link>

                    <Link
                      to="/search"
                      className="text-cyan-100 text-sm font-medium rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10"
                      aria-current="false"
                    >
                      Resources
                    </Link>

                    <Link
                      to="/search"
                      className="text-cyan-100 text-sm font-medium rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10"
                      aria-current="false"
                    >
                      Company Directory
                    </Link>

                    <Link
                      to="/search"
                      className="text-cyan-100 text-sm font-medium rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10"
                      aria-current="false"
                    >
                      Openings
                    </Link>
                  </nav>
                </div>
                <div>
                  <div className="max-w-md w-full mx-auto">
                    <label htmlFor="search" className="sr-only">
                      Search
                    </label>
                    <div className="relative text-white focus-within:text-gray-600">
                      <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                        <svg
                          className="h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <input
                        id="search"
                        className="block w-full bg-white bg-opacity-20 py-2 pl-10 pr-3 border border-transparent rounded-md leading-5 focus:text-gray-900 placeholder-white focus:outline-none focus:bg-opacity-100 focus:border-transparent focus:placeholder-gray-500 focus:ring-0 sm:text-sm"
                        placeholder="Search"
                        type="search"
                        name="search"
                        value={searchTerm}
                        onChange={(event) => {
                          setSearchTerm(event.target.value);
                          setInfoBoxData({});
                        }}
                        onBlur={() => {
                          getInfoBoxData(searchTerm);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Transition
            show={isOpen}
            enter="duration-150 ease-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="duration-150 ease-in"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            className="z-20 fixed inset-0 bg-black bg-opacity-25 lg:hidden"
            aria-hidden="true"
          ></Transition>

          <Transition
            show={isOpen}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-150 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
            className="z-30 absolute top-0 inset-x-0 max-w-3xl mx-auto w-full p-2 transition transform origin-top lg:hidden"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y divide-gray-200">
              <div className="pt-3 pb-2">
                <div className="flex items-center justify-between px-4">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark-cyan-600.svg"
                      alt="Workflow"
                    />
                  </div>
                  <div className="-mr-2">
                    <button
                      onClick={() => setIsOpen(false)}
                      type="button"
                      className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500"
                    >
                      <span className="sr-only">Close menu</span>
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
                          d="M6 18L18 6M6 6l12 12"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="mt-3 px-2 space-y-1">
                  <Link
                    to="/search"
                    className="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800"
                  >
                    Search
                  </Link>
                  <Link
                    to="/search"
                    className="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800"
                  >
                    Profile
                  </Link>
                  <Link
                    to="/search"
                    className="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800"
                  >
                    Resources
                  </Link>
                  <Link
                    to="/search"
                    className="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800"
                  >
                    Company Directory
                  </Link>
                  <Link
                    to="/search"
                    className="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800"
                  >
                    Openings
                  </Link>
                </div>
              </div>
              <div className="pt-4 pb-2">
                <div className="flex items-center px-5">
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={imageURL}
                      alt="Profile"
                    />
                  </div>
                  <div className="ml-3 min-w-0 flex-1">
                    <div className="text-base font-medium text-gray-800 truncate">
                      {id}
                    </div>
                    <div className="text-sm font-medium text-gray-500 truncate">
                      {id}
                    </div>
                  </div>
                  <button className="ml-auto flex-shrink-0 bg-white p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
                    <span className="sr-only">View notifications</span>
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
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className="mt-3 px-2 space-y-1">
                  <a
                    href="/search"
                    className="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800"
                  >
                    Your Profile
                  </a>
                  <a
                    href="/search"
                    className="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800"
                  >
                    Settings
                  </a>
                  <a
                    href="/logout"
                    className="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800"
                  >
                    Sign out
                  </a>
                </div>
              </div>
            </div>
          </Transition>
        </header>
        <main className="-mt-24 pb-8">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <h1 className="sr-only">Page title</h1>
            {/* Main 3 column grid */}
            <div className="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
              {/* Left column */}
              {/* <div className="grid grid-cols-1 gap-4 lg:col-span-2">
                <section aria-labelledby="section-1-title">
                  <h2 className="sr-only" id="section-1-title">
                    Section title
                  </h2>
                  <div className="rounded-lg bg-white overflow-hidden shadow">
                    <div className="p-6">
                      <div className="h-96 border-4 border-dashed border-gray-200 rounded-lg"></div>
                    </div>
                  </div>
                </section>
              </div> */}

              {/* Right column */}
              <div className="grid grid-cols-1 lg:col-span-3 gap-4">
                <section aria-labelledby="section-2-title">
                  <h2 className="sr-only" id="section-2-title">
                    Section title
                  </h2>
                  {searchTerm.length > 0 && (
                    <QAResults
                      loading={loadingQA}
                      data={{
                        answer: "osteoperosis",
                        confidence: Math.random(),
                      }}
                    />
                  )}
                  {searchTerm.length > 0 && (
                    <InfoBox
                      loading={Object.keys(infoBoxData).length === 0}
                      data={infoBoxData}
                      search={searchTerm}
                    />
                  )}
                  <div className="rounded-lg bg-white overflow-hidden shadow">
                    <div className="px-6 py-2">
                      <SearchResults {...searchResults} />
                      {/* <x-placeholder>
                        <div className="h-96 border-4 border-dashed border-gray-200 rounded-lg"></div>
                      </x-placeholder> */}
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};
