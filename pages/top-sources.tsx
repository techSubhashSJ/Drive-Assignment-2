import axios from "axios";
import { GetStaticProps, NextPage } from "next";
import React from "react";
import Layout from "../src/components/layout";
import SourceCard from "../src/components/source-card";
import { source } from "../src/types/top-sources";

const TopSources: NextPage<{ source: source }> = ({ source }) => {  
  return (
    <Layout>
      <SourceCard source={source} />
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
