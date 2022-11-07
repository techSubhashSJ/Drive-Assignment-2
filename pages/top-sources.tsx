/**
 * @author Subhash Jadhav
 * @description This is a page where you will get top sources of news
 * @params {array} array of source objects
 */

import axios from "axios";
import { GetStaticProps, NextPage } from "next";
import React from "react";
import Layout from "../src/components/layout";
import SourceCards from "../src/components/source-cards";
import { source } from "../src/types/top-sources";

const TopSources: NextPage<{ source: source }> = ({ source }) => {  
  return (
    <Layout>
      <SourceCards source={source} />
    </Layout>
  );
};

export default TopSources;

export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get(
    `https://newsapi.org/v2/top-headlines/sources?country=in&apiKey=${process.env.API_KEY}`
  );

  return {
    props: {
      source: res.data.sources,
    },
  };
};
