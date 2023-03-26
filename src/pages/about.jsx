import Head from "next/head";
import React from "react";
import { About as AboutComponent } from "../components";

const About = () => {
  return (
    <>
      <Head>
        <title>About | ElectrogenLabs</title>
        <meta
          name="description"
          content="ElectrogenLabs is India's tech oriented ed-tech company, launched in 2021. 
          It's goal is to creating tech content and facilitating offline as well as online workshops and sessions to 
          help learn students new tech in electrical & electronics with ease and allow them to hone there career as they desire."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/lablogo.png" />
      </Head>
      <AboutComponent />
      {/* <AboutMain /> */}
    </>
  );
};

export default About;
