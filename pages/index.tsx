import type { NextPage } from "next";
import Card from "../src/components/card";
import Layout from "../src/components/layout";
import axios from "axios";
import { GetStaticProps } from "next";
import { topHeadlinesType } from "../src/types";
import { useEffect, useState } from "react";
import Spinner from "../src/components/spinner";
import Button from "../src/components/button";

const Home: NextPage<{ data: topHeadlinesType }> = ({ data }) => {
  const [loadMoreCount, setLoadMoreCount] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [newsData, setNewsData] = useState<topHeadlinesType>(data.slice(0, 6));

  useEffect(() => {
    setLoading(true);
    setNewsData(data.slice(0, loadMoreCount * 6));
    setLoading(false);
  }, [loadMoreCount]);

  return (
    <Layout>
      <Card topHeadlines={newsData} />
      <div className="flex justify-center">
        {loading ? (
          <Spinner />
        ) : (
          Math.ceil(data.length / 6) > loadMoreCount && (
            <Button
              onclick={() => setLoadMoreCount((count) => count + 1)}
              classes="text-center py-2 px-4 bg-blue-700 text-white my-5 rounded-full"
              label=" Load More"
            />
          )
        )}
      </div>
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.API_KEY}`
  );

  return {
    props: {
      data: res.data.articles,
    },
  };
};
