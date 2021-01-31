import { FC } from "react";

export const Footer: FC = () => (
  <footer>
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
      <div className="border-t border-gray-200 py-8 text-sm text-gray-600 text-center sm:text-left">
        <span className="block sm:inline">© 2021 Symptomizer.</span>{" "}
        <span className="block sm:inline">All rights reserved.</span>
      </div>
    </div>
  </footer>
);
