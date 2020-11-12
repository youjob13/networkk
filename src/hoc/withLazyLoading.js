import React, { Suspense } from "react";
import Preloader from "../components/common/preloader/Preloader";

export const withLazyLoading = (Component) => {
  return (props) => {
    return (
      <Suspense fallback={<Preloader />}>
        <Component {...props} />
      </Suspense>
    );
  };
};
