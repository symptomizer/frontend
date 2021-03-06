import { FC, useEffect } from "react";
import { View } from "../../pages/Login";
import { Transition } from "@headlessui/react";

interface LoginViewProps {
  changeView: React.Dispatch<React.SetStateAction<View>>;
  setNotificationShowing: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ForgotPasswordView: FC<LoginViewProps> = ({
  changeView,
  setNotificationShowing,
}) => {
  return (
    <div className="space-y-6">
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email address
        </label>
        <div className="mt-1">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className="transition duration-500 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </div>

      <div>
        <button
          onClick={() => {
            changeView(View.Login);
            setNotificationShowing(true);
          }}
          className="transition w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyans-500"
        >
          Reset Password
        </button>
      </div>

      <div className="text-right">
        <div className="text-sm">
          <a // eslint-disable-line
            onClick={() => changeView(View.Login)}
            className="font-medium text-cyan-600 hover:text-cyan-500 cursor-pointer"
          >
            Back to Login
          </a>
        </div>
      </div>
    </div>
  );
};

interface ResetNotificationProps {
  showing: boolean;
  setShowing: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ResetNotification: FC<ResetNotificationProps> = ({
  showing,
  setShowing,
}: ResetNotificationProps) => {
  useEffect(() => {
    if (showing) {
      setTimeout(() => {
        setShowing(false);
      }, 2500);
    }
  });

  return (
    <Transition
      show={showing}
      enter="transition duration-500 ease-out"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition duration-500"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="fixed inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end">
        <div
          x-data="{ show: true }"
          x-show="show"
          x-description="Notification panel, show/hide based on alert state."
          className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden"
        >
          <div className="p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg
                  className="h-6 w-6 text-green-400"
                  x-description="Heroicon name: check-circle"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <div className="ml-3 w-0 flex-1 pt-0.5">
                <p className="ztext-sm font-medium text-gray-900">
                  Reset Email Sent!
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Please check your inbox to reset your password.
                </p>
              </div>
              <div className="ml-4 flex-shrink-0 flex">
                <button
                  onClick={() => setShowing(false)}
                  className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="sr-only">Close</span>
                  <svg
                    className="h-5 w-5"
                    x-description="Heroicon name: x"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
};
