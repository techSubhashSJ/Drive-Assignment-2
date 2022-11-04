import type { NextPage } from "next";
import Layout from "../../src/components/layout";
import axios from "axios";
import { GetServerSideProps } from "next";
import { topHeadlinesType } from "../../src/types";
import SingleNews from "../../src/components/single-news";

const SingleNewsPage: NextPage<{ data: topHeadlinesType }> = ({ data }) => {
  return (
    <>
      <Layout>
        <SingleNews news={data} />
      </Layout>
    </>
  );
};

export default SingleNewsPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `https://newsapi.org/v2/everything?q=${params?.title}&apiKey=${process.env.API_KEY}`
  );

  return {
    props: {
      data: res.data.articles,
    },
  };
};
