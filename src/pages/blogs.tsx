import Head from "next/head";
import { Blogs as BlogComponent } from "../components";

const Blogs = () => {
  return (
    <>
      <Head>
        <title>Blogs | ElectrogenLabs</title>
        <meta
          name="description"
          content="Blogs on Robotics, Electrical & Electronics"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/lablogo.png" />
      </Head>
      <div style={{ marginTop: "60px" }}>
        <BlogComponent />
      </div>
    </>
  );
};

export default Blogs;
