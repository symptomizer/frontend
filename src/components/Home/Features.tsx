import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlasses,
  faSearch,
  faQuestion,
  faDatabase,
  faInfoCircle,
  faCloud,
  faStopwatch,
} from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faDocker,
  faPython,
} from "@fortawesome/free-brands-svg-icons";

export const Features: FC = () => (
  <div className="bg-cyan-700" id="features">
    <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
      <h2 className="text-3xl font-extrabold text-white tracking-tight">
        A bunch of cool search features
      </h2>
      <p className="mt-4 max-w-3xl text-lg text-cyan-200">
        Built with some of the the latest technologies for data science
        including things like magic and TF-IDF, whatever that is.
      </p>
      <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
        <div>
          <div>
            <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
              <FontAwesomeIcon icon={faGlasses} color="white" />
            </span>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-medium text-white">
              Typo-tolerant TF-IDF
            </h3>
            <p className="mt-2 text-base text-cyan-200">
              Using N-gram based TF-IDF, there is some level of typo-tolerance
              in our index construction and retrieval system, to allow for a
              convenient search experience.
            </p>
          </div>
        </div>

        <div>
          <div>
            <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
              <FontAwesomeIcon icon={faQuestion} color="white" />
            </span>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-medium text-white">
              BERT-based Question Answering
            </h3>
            <p className="mt-2 text-base text-cyan-200">
              A question-answering tool has been developed with state-of-the-art
              NLP models to be able to parse a question and retrieve the answer
              to the question from our large compiled dataset.
            </p>
          </div>
        </div>

        <div>
          <div>
            <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
              <FontAwesomeIcon icon={faSearch} color="white" />
            </span>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-medium text-white">
              Boolean & Phrase Search
            </h3>
            <p className="mt-2 text-base text-cyan-200">
              To accomodate for more specified and precise searching,
              Symptomizer includes basic boolean and phrase search.
            </p>
          </div>
        </div>

        <div>
          <div>
            <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
              <FontAwesomeIcon icon={faInfoCircle} color="white" size="lg" />
            </span>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-medium text-white">Information Box</h3>
            <p className="mt-2 text-base text-cyan-200">
              Similar to modern search engines, when possible Symptomizer will
              display an 'Information Box' that contains basic facts and key
              points about the query.
            </p>
          </div>
        </div>

        <div>
          <div>
            <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
              <FontAwesomeIcon icon={faDatabase} color="white" />
            </span>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-medium text-white">
              Custom Compiled Dataset
            </h3>
            <p className="mt-2 text-base text-cyan-200">
              A large dataset containing a mixture of medical publications, and
              publicly available information was compiled by the Symptomizer
              team. These sources were carefully curated and parsed by the data
              team.
            </p>
          </div>
        </div>

        <div>
          <div>
            <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
              <svg
                className="h-6 w-6 text-white"
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
                  d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                ></path>
              </svg>
            </span>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-medium text-white">Live Indexing</h3>
            <p className="mt-2 text-base text-cyan-200">
              As the data compilation contains a large collection of documents,
              the IR system is able to run live indexing. This means that over
              time, more and more documents will be added and indexed. Don't
              believe us? The counter{" "}
              <a href="#stats" className="text-white">
                here
              </a>{" "}
              shows the current number of documents that have been added to our
              index so far.
            </p>
          </div>
        </div>

        <div>
          <div>
            <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
              <svg
                className="h-6 w-6 text-white"
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
                  d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                ></path>
              </svg>
            </span>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-medium text-white">Caching</h3>
            <p className="mt-2 text-base text-cyan-200">
              Dealing with such large datasets means that the data needs to be
              stored in the correct way. The indices and data is cached in the
              cloud in order to keep it synced and prevent unnecessary
              reprocessing.
            </p>
          </div>
        </div>

        <div>
          <div>
            <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
              <FontAwesomeIcon icon={faStopwatch} color="white" size="lg" />
            </span>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-medium text-white">Cron Triggers</h3>
            <p className="mt-2 text-base text-cyan-200">
              Automatic jobs have been created to run live indexing, and pull
              the latest indices from the cloud. Additionally, these cron jobs
              are used to clear the server from old data, and keep everything up
              and running.
            </p>
          </div>
        </div>

        <div>
          <div>
            <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
              <FontAwesomeIcon icon={faReact} color="white" size="lg" />
            </span>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-medium text-white">React + TS</h3>
            <p className="mt-2 text-base text-cyan-200">
              The web interface of Symptomizer has been build with React and
              Typescript, which are the de-facto industry standard frontend
              frameworks. This ensures a modern and smooth experience for our
              users.
            </p>
          </div>
        </div>

        <div>
          <div>
            <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
              <FontAwesomeIcon icon={faPython} color="white" size="lg" />
            </span>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-medium text-white">Python</h3>
            <p className="mt-2 text-base text-cyan-200">
              What is there to say about Python? Such a simple, yet amazing
              language. But you already know that... Symptomizer uses Python for
              indexing, and the information retrieval part of the application.
            </p>
          </div>
        </div>

        <div>
          <div>
            <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
              <FontAwesomeIcon icon={faDocker} color="white" size="lg" />
            </span>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-medium text-white">Docker + CI/CD</h3>
            <p className="mt-2 text-base text-cyan-200">
              Using Docker, we can containerize the distribution and deployment
              of our application. This means that we can automatically update
              and continously deliver the latest version of Symptomizer to our
              amazing users.
            </p>
          </div>
        </div>

        <div>
          <div>
            <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
              <FontAwesomeIcon icon={faCloud} color="white" />
            </span>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-medium text-white">Cloud Based</h3>
            <p className="mt-2 text-base text-cyan-200">
              Leveraging the power of the cloud (and the free credit given to
              students), Symptomizer is deployed on Google Cloud Platform, using
              various cloud technologies to be able to host and create a
              production ready application.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
