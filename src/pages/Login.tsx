import { FC, useState } from "react";
import AnimateHeight from "react-animate-height";

import { LoginView } from "../components/Login/LoginView";
import { RegisterView } from "../components/Login/RegisterView";
import {
  ForgotPasswordView,
  ResetNotification,
} from "../components/Login/ForgotPasswordView";

export enum View {
  Login,
  Register,
  ForgotPassword,
}

export const Login: FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.Login);
  const [notificationShowing, setNotificationShowing] = useState(false);

  return (
    <div>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <ResetNotification
          showing={notificationShowing}
          setShowing={setNotificationShowing}
        />
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-cyan-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
            {currentView === View.Login
              ? "Log in to Your Account"
              : currentView === View.ForgotPassword
              ? "Reset Your Password"
              : "Register an Account"}
          </h2>
          {currentView === View.Login && (
            <p className="mt-2 text-center text-sm text-gray-600 max-w">
              Or&nbsp;
              <a // eslint-disable-line
                onClick={() => setCurrentView(View.Register)}
                className="cursor-pointer transition font-medium text-cyan-600 hover:text-cyan-500"
              >
                register here...
              </a>
            </p>
          )}
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <AnimateHeight
            duration={250}
            delay={250}
            height={currentView === View.Login ? "auto" : 0}
          >
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <LoginView changeView={setCurrentView} />
            </div>
          </AnimateHeight>
          <AnimateHeight
            duration={250}
            delay={250}
            height={currentView === View.ForgotPassword ? "auto" : 0}
          >
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <ForgotPasswordView
                changeView={setCurrentView}
                setNotificationShowing={setNotificationShowing}
              />
            </div>
          </AnimateHeight>
          <AnimateHeight
            duration={250}
            delay={250}
            height={currentView === View.Register ? "auto" : 0}
          >
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <RegisterView changeView={setCurrentView} />
            </div>
          </AnimateHeight>
        </div>
        <footer>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
            <div className="py-8 text-sm text-gray-600 text-center">
              <span className="block sm:inline">© 2021 Symptomizer.</span>{" "}
              <span className="block sm:inline">All rights reserved.</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
