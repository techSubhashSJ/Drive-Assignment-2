import type { NextPage } from "next";
import Card from "../../src/components/card";
import Layout from "../../src/components/layout";
import axios from "axios";
import { GetServerSideProps } from "next";
import { topHeadlinesType } from "../../src/types";

const Home: NextPage<{data: topHeadlinesType}> = ({data}) => {
  return (
    <>
      <Layout>
        <h1>hello</h1>
      </Layout>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=in&pageSize=6&apiKey=${process.env.API_KEY}`
  );
  
  return {
    props: {
      data: res.data.articles,
    },
  };
};