import Head from "next/head";
import { Contact as ContactComponent } from "../components";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact | ElectrogenLabs</title>
        <meta
          name="description"
          content="ElectrogenLabs is India's tech oriented ed-tech company, launched in 2021. 
          It's goal is to creating tech content and facilitating offline as well as online workshops and sessions to 
          help learn students new tech in electrical & electronics with ease and allow them to hone there career as they desire."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/lablogo.png" />
      </Head>
      <ContactComponent />
      {/* <FAQ /> */}
    </>
  );
};

export default Contact;
