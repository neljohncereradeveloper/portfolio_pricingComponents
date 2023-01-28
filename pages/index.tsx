import type { NextPage } from "next";
import Head from "next/head";
import PricingFour from "../src/components/pricing/prcing-four";
import PricingOne from "../src/components/pricing/pricing-one";
import PricingThree from "../src/components/pricing/pricing-three";
import PricingTwo from "../src/components/pricing/pricing-two";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Pricing Components</title>
        <meta name="description" content="Business pricing components" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PricingOne />
      <PricingTwo />
      <PricingThree />
      <PricingFour />
    </div>
  );
};

export default Home;
