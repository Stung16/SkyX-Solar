"use client";
import React, { Fragment, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Banner from "@/sections/Banner/Banner";
import AboutUs from "@/sections/AboutUs/AboutUs";
import Research3C from "@/sections/Research3C/Research3C";
import OtherPages from "@/sections/OtherPages/OtherPages";
import GuideProject from "@/sections/GuideProject/GuideProject";
import ResultProject from "@/sections/ResultProject/ResultProject";
import PageWCYD from "@/sections/PageWCYD/PageWCYD";
import ResponsiveOptimal from "@/sections/ResponsiveOptimal/ResponsiveOptimal";

const Main = () => {
  useEffect(function () {
    Aos.init({ duration: 1000, disable: `mobile` });
  }, []);
  return (
    <Fragment>
      {/* Header */}

      {/* main */}
      <main className="max-w-[100rem] mx-auto overflow-hidden">
        <Banner />
        <AboutUs />
        <Research3C />
        <GuideProject />
        <ResultProject />
        <PageWCYD />
        <OtherPages />
        <ResponsiveOptimal />
      </main>

      {/* Footer */}
    </Fragment>
  );
};

export default Main;
