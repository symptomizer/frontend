import classNames from "classnames";
import { FC } from "react";

type FooterOptions = { border?: boolean };

export const Footer: FC<FooterOptions> = ({ border } = { border: true }) => (
  <footer>
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
      <div
        className={classNames(
          { "border-t border-gray-200": border },
          "py-8 text-sm text-gray-600 text-center sm:text-left"
        )}
      >
        <span className="block sm:inline">© 2021 Symptomizer.</span>{" "}
        <span className="block sm:inline">All rights reserved.</span>
      </div>
    </div>
  </footer>
);
