import React from "react";
import MainNavigation from "../components/MainNavigation/MainNavigation";

const ErrorPage = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>An error Occurred</h1>
        <p>Please go back!</p>
      </main>
    </>
  );
};

export default ErrorPage;
