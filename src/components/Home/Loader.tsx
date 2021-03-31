import { FC } from "react";
import "./loader.css";

type LoaderType = {
  mini?: boolean;
};

export const Loader: FC<LoaderType> = ({ mini }: LoaderType) => {
  if (mini) {
    <div className="lds-ellipsis-mini">
      <div></div>
      <div></div>
      <div></div>
    </div>;
  }
  return (
    <div className="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
